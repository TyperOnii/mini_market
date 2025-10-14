import { action, computed, makeObservable, observable } from 'mobx'
import { Product } from './types';

class ProductStore {
    products: Product[] = [];

    get productsCount() {
        return this.products.length;
    }

    constructor() {
        makeObservable(this, {
            products: observable,
            productsCount: computed,
            addProduct: action,
            removeProduct: action,
            removeAllProducts: action,
        })
    };

    addProduct = (product: Product) => {
        this.products = [...this.products, product];
    };

    removeProduct = (id: number) => {
        this.products = this.products.filter((product) => product.id !== id);
    };

    removeAllProducts = () => {
        this.products = [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductStore();