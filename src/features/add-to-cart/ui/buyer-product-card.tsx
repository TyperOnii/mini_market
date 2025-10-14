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
    const { addCartItem, existenceCheck, increaseCartItem, decreaseCartItem, cartItems } = CartStore;

    const productInCart = cartItems.find((product) => product.id === item.id);

    const actionSlot = <div>
        {
            existenceCheck(item.id) ?
            <div className="grid grid-cols-3 items-center justify-items-center">
                <Button onClick={() => decreaseCartItem(item.id)} variant='primary'>-</Button>
                <span>{productInCart?.quantity}</span>
                <Button onClick={() => increaseCartItem(item.id)} variant='primary'>+</Button>
            </div>
            :
            <Button variant='primary' onClick={() => addCartItem(item)}>В коризну</Button>
        }
    </div>

    return (
        <ProductCard
        item={item}
        path={path}
        actionSlot={actionSlot}
        />
    )
})