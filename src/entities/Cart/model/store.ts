import { action, computed, makeObservable, observable } from 'mobx'
import { Product } from "@/entities/Product/model/types";
import { CartItem } from "./types";

class CartStore {
    cartItems: CartItem[] = [];
    
    constructor() {
        // makeAutoObservable(this)
        makeObservable(this, {
            cartItems: observable,
            isEmpty: computed,
            uniqueItemsCount: computed,
            totalQuantity: computed,
            totalPrice: computed,
            existenceCheck: observable,
            addCartItem: action,
            increaseCartItem: action,
            decreaseCartItem: action,
            removeCartItem: action,
            removeAllCartItems: action,
        })
    };

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
    }

    addCartItem = (product: Product) => {
        const existingItem = this.cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({ ...product, quantity: 1 });
        }
    };

    increaseCartItem = (id: number) => {
        const item = this.cartItems.find((product) => product.id === id);

        if (!item) return;

        item.quantity += 1;
    };

    decreaseCartItem = (id: number) => {
        const item = this.cartItems.find(product => product.id === id);

        if (!item) return;

        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            this.removeCartItem(id)
        }
    };

    removeCartItem = (id: number) => {
        this.cartItems = this.cartItems.filter(product => product.id !== id);
    };

    removeAllCartItems = () => {
        this.cartItems = [];
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartStore();