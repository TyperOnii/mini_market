import { action, computed, makeObservable, observable } from 'mobx'
import { Product } from "@/entities/Product/model/types";
import { CartItem } from "./types";

class CartStore {
    cartItems: CartItem[] = [];
    
    constructor() {
        makeObservable(this, {
            cartItems: observable,
            existenceCheck: observable,
            getCurrentPrice: observable,
            getMainInfoAboutCartItem: observable,
            isEmpty: computed,
            uniqueItemsCount: computed,
            totalQuantity: computed,
            totalPrice: computed,
            addCartItem: action,
            increaseCartItem: action,
            decreaseCartItem: action,
            removeCartItem: action,
            removeAllCartItems: action,
        })
    };

    // проверка на пустую корзину
    get isEmpty(): boolean {
        return this.cartItems.length === 0;
    };

    get uniqueItemsCount(): number {
        return this.cartItems.length;
    };

    get totalQuantity(): number {
        return this.cartItems.reduce((acc, product) => acc += product.quantity, 0);
    };

    get totalPrice(): number {
        return this.cartItems.reduce((acc, product) => acc += product.price * product.quantity, 0);
    };

    // проверка на существование товара в корзине по id
    existenceCheck = (id: number): boolean => {
        return this.cartItems.some((product) => product.id === id)
    };

    // получить актуальную цену
    getCurrentPrice = (id: number): number => {
        const item = this.cartItems.find((product) => product.id === id) as CartItem;
        
        if(item.discountedPrice) {
            return item.discountedPrice
        }
        return item.price;
    };

    // удобный объект для UI по конкретному товару в корзине
    getMainInfoAboutCartItem = (id: number) => {
        const item = this.cartItems.find((product) => product.id === id) as CartItem;

        return {
            totalPrice: this.getCurrentPrice(id) * item.quantity,
            totalQuantity: item.quantity,
        }
    };

    // добавить товар в корзину
    addCartItem = (product: Product) => {
        const existingItem = this.cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({ ...product, quantity: 1 });
        }
    };

    // увеличить кол-во товара
    increaseCartItem = (id: number) => {
        const item = this.cartItems.find((product) => product.id === id);

        if (!item) return;

        item.quantity += 1;
    };

    // уменьшить кол-во товара
    decreaseCartItem = (id: number) => {
        const item = this.cartItems.find(product => product.id === id);

        if (!item) return;

        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            this.removeCartItem(id)
        }
    };

    // удалить товар из корзины
    removeCartItem = (id: number) => {
        this.cartItems = this.cartItems.filter(product => product.id !== id);
    };

    // удалить все товары из корзины
    removeAllCartItems = () => {
        this.cartItems = [];
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartStore();