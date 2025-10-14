import s from './product-list.module.scss'
import { UrlObject } from "url"
import { Product } from "../../model/types"
import { ProductCard } from "../product-card/product-card"
import { ReactNode } from 'react'

interface ProductListProps {
    list: Product[],
    path: string | UrlObject,
    renderCard?: (product: Product) => ReactNode,
    searchQuery?: string,
}

export const ProductList = (props: ProductListProps) => {
    const { 
        list, 
        searchQuery, 
        path, 
        renderCard= (product) => <ProductCard item={product} path={path}/> 
    } = props;

    if(list.length === 0) {
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
            {list.map((product) => (
                <li 
                    key={product.id}
                    aria-label='Товар'>
                    {renderCard(product)}
                </li>
            ))}
        </ul>
    )
}