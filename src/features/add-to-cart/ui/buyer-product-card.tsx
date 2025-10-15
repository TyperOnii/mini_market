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
    const { addCartItem, removeCartItem, existenceCheck } = CartStore;

    const isProductInCart = existenceCheck(item.id);

    const handleClick = () => {
        if(isProductInCart) {
            removeCartItem(item.id);
            return
        }
        addCartItem(item);
    }

    const buttonStyle = isProductInCart ? 'secondary' : 'primary';
    const buttonLabel = isProductInCart ? 'Удалить' : 'В корзину';

    return (
        <ProductCard
            item={item}
            path={path}
            actionSlot={
            <Button 
                aria-label={isProductInCart ? 'Кнопка для удаления товара из корзины' : 'Кнопка для добавления товара в корзину'}
                title={isProductInCart ? 'Удалить товар из корзины' : 'Добавить товар в корзину'}
                variant={buttonStyle} 
                onClick={handleClick}
                >
                {buttonLabel}
            </Button>}
        />
    )
})