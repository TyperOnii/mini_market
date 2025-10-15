'use client'

import { observer } from "mobx-react";
import { CartItem } from "../../model/types"
import { CartStore } from "../..";
import s from './cart-item-card.module.scss'
import Image from "next/image";
import { Button } from "@/shared/components/button/button";

interface CartItemCardProps {
    item: CartItem,
}

export const CartItemCard = observer((props: CartItemCardProps) => {
    const { item } = props;
    const { getCartItemDetails, increaseCartItem, decreaseCartItem } = CartStore;
    const { totalPrice, totalQuantity } = getCartItemDetails(item.id);

    return (
        <article className={s.card}>
            <div className={s.cardInner}>
                <Image src={item.previewImage} height={100} width={80} alt={`Изображение товара: ${item.name}`}/>
                <div className={s.infoWrap}>
                    <h3 className={s.title}>{item.name}</h3>
                </div>
                
                <div className={s.actions}>
                    <Button onClick={() => decreaseCartItem(item.id)} variant='secondary'>-</Button>
                    <span>{totalQuantity}</span>
                    <Button onClick={() => increaseCartItem(item.id)} variant='secondary'>+</Button>
                </div>

                <div className={s.totalPrice}>
                    <span>{totalPrice} P</span>
                </div>
            </div>
        </article>
    )
})