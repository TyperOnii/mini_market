import s from './wishlist-items-list.module.scss'
import { ReactNode } from 'react'
import { Product } from '@/entities/Product';

interface WishlistItemsListProps {
    products: Product[],
    renderCard: (product: Product) => ReactNode,
    searchQuery?: string,
}

export const WishlistItemsList = (props: WishlistItemsListProps) => {
    const { products, searchQuery, renderCard} = props;

    if(products.length === 0) {
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
            {products.map((product) => (
                <li 
                    key={product.id}
                    aria-label='Товар'>
                    {renderCard(product)}
                </li>
            ))}
        </ul>
    )
}