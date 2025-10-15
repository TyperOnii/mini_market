'use client'

import { CartStore } from "@/entities/Cart";
import { Product } from "@/entities/Product"
import { Button } from "@/shared/components/button/button";
import { observer } from "mobx-react";

interface AddToCartButtonProps {
    product: Product,
}

export const AddToCartButton = observer((props: AddToCartButtonProps) => {
    const { product } = props;
    const { addCartItem, removeCartItem, existenceCheck } = CartStore;

    const isProductInCart = existenceCheck(product.id);

    const handleClick = () => {
        if(isProductInCart) {
            removeCartItem(product.id);
            return
        }
        addCartItem(product);
    }

    const buttonStyle = isProductInCart ? 'primary' : 'secondary';
    const buttonLabel = isProductInCart ? 'Удалить' : 'В корзину';

    return (
        <Button 
            aria-label={isProductInCart ? 'Кнопка для удаления товара из корзины' : 'Кнопка для добавления товара в корзину'}
            title={isProductInCart ? 'Удалить товар из корзины' : 'Добавить товар в корзину'}
            variant={buttonStyle} 
            onClick={handleClick}
            >
            {buttonLabel}
        </Button>
    )
})