'use client'

import { CartStore } from "@/entities/Cart";
import { Product, ProductCard } from "@/entities/Product"
import { Button } from "@/shared/components/button/button";
import { observer } from "mobx-react";
import { UrlObject } from "url"

interface BuyerProductCardProps {
    item: Product,
    path: string | UrlObject,
}

export const BuyerProductCard = observer((props: BuyerProductCardProps) => {
    const { item, path } = props;
    const { addCartItem, removeCartItem, cartItems } = CartStore;

    const productInCart = cartItems.find((product) => product.id === item.id);

    const handleAddToCart = () => {
        if(productInCart) {
            removeCartItem(item.id);
            return;
        }
        addCartItem(item)
    }

    return (
        <ProductCard
        item={item}
        path={path}
        actionSlot={<Button variant={productInCart ? 'secondary' :'primary'} onClick={handleAddToCart}>{productInCart ? 'Удалить' : 'В корзину'}</Button>}
        />
    )
})