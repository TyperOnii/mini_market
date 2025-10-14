'use client'

import { observer } from "mobx-react"
import { CartItemCard, CartStore } from "../.."

export const CartItemsList = observer(() => {
    const { isEmpty, cartItems } = CartStore;

    if(isEmpty) {
        return <div>Корзина пустая</div>
    }

    return (
        <ul className="flex flex-col md:gap-y-[20] gap-y-[12]">
            {cartItems.map((cartItem) => (
                <li key={cartItem.id}>
                    <CartItemCard item={cartItem}/>
                </li>
            ))}
        </ul>
    )
})