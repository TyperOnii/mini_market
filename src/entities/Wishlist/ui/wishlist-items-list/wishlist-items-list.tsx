'use client'

import s from './wishlist-items-list.module.scss'
import { ReactNode } from 'react'
import { Product } from '@/entities/Product';
import { WishlistStore } from '../..';
import { observer } from 'mobx-react';

interface WishlistItemsListProps {
    renderCard: (product: Product) => ReactNode,
    searchQuery?: string,
}

export const WishlistItemsList = observer((props: WishlistItemsListProps) => {
    const { searchQuery, renderCard} = props;
    const { wishList } = WishlistStore;

    if(wishList.length === 0) {
        return (
            <div className={s.emptyState}>
                {searchQuery ? (
                    <>Товаров по запросу <span>«{searchQuery}»</span> не найдено</>
                ) : (
                    <>Товаров не найдено</>
                )}
            </div>
        )
    }

    return (
        <ul 
            className={s.list}
            aria-label='Список товаров'>
            {wishList.map((product) => (
                <li 
                    key={product.id}
                    aria-label='Товар'>
                    {renderCard(product)}
                </li>
            ))}
        </ul>
    )
})