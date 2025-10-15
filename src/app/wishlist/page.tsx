'use client'

import { WishlistItemsList, WishlistStore } from "@/entities/Wishlist"
import { BuyerProductCard } from "@/widgets/buyer-product-card";
import { observer } from "mobx-react";
import { Metadata } from "next"

// export const metadata: Metadata = {
//     title: 'Вишлист',
//     description: 'Страница с вашим вишлистом',
//     keywords: ['вишлист', 'вишлист товаров', 'товары', 'избранное', 'отложенное'],
// }

const WishlistPage = observer(() => {
    const { wishList } = WishlistStore;

    return (
        <section>
            <div className='container'>
                <div className="mt-4">
                    <h2 className="font-semibold text-3xl pt-2">Вишлист</h2>
                </div>
                <div className="mt-8">
                    <WishlistItemsList 
                        products={wishList} 
                        renderCard={(product) => <BuyerProductCard product={product} 
                        path='/'/>}
                    />
                </div>
            </div>
        </section>
    )
})

export default WishlistPage;