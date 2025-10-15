'use client'

import { Product, ProductCard } from "@/entities/Product"
import { AddToCartButton } from "@/features/add-to-cart";
import { AddToWishlistButton } from "@/features/add-to-wishlist";
import { UrlObject } from "url"

interface BuyerProductCardProps {
    product: Product,
    path: string | UrlObject,
}

export const BuyerProductCard = (props: BuyerProductCardProps) => {
    const { product, path } = props;

    const actionSlot = 
    <div className="grid grid-cols-[1fr_50px] gap-x-[6px]">
        <AddToCartButton item={product}/>
        <AddToWishlistButton product={product}/>
    </div>

    return (
        <ProductCard
            item={product}
            path={path}
            actionSlot={actionSlot}
        />
    )
}