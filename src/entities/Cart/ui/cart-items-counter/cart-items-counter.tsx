'use client'

import { observer } from "mobx-react";
import { CartStore } from "../..";

export const CartItemsCounter = observer(() => {
    const { totalQuantity, isEmpty } = CartStore;

    if(isEmpty) return null;

    return (
        <div 
            className="inline-flex items-center justify-center bg-white text-black rounded-full px-[5px] max-h-[20px] min-w-[20px]"
            aria-label="Количество товаров в корзине"
            aria-live="polite"
            role="status">
            {totalQuantity}
        </div>
    )
})