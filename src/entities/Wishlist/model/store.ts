import { action, computed, makeObservable, observable } from 'mobx'
import { Product } from "@/entities/Product/model/types";

class WishlistStore {
    wishList: Product[] = [];
    
    constructor() {
        makeObservable(this, {
            wishList: observable,
            existenceCheck: observable,
            isEmpty: computed,
            itemsCount: computed,
            addWishListItem: action,
            removeWishlistItem: action,
            removeAllWishlistItems: action,
        })
    };

    // проверка на пустой вишлист
    get isEmpty(): boolean {
        return this.wishList.length === 0;
    };

    get itemsCount(): number {
        return this.wishList.length;
    };

    // проверка на существование товара в вишлисте по id
    existenceCheck = (id: number): boolean => {
        return this.wishList.some(product => product.id === id)
    };

    // добавить товар в вишлист
    addWishListItem = (product: Product) => {
        const existingItem = this.wishList.find(item => item.id === product.id);

        if (!existingItem) {
            this.wishList.push(product);
        } 
    };

    // удалить товар из вишлиста
    removeWishlistItem = (id: number) => {
        this.wishList = this.wishList.filter(product => product.id !== id);
    };

    // удалить все товары из вишлиста
    removeAllWishlistItems = () => {
        this.wishList = [];
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new WishlistStore();