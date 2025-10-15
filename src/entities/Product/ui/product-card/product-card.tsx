import { Product } from "../../model/types"
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";
import s from './product-card.module.scss';
import { ReactNode } from "react";

interface ProductCardProps {
    product: Product,
    path: string | UrlObject,
    actionSlot?: ReactNode,
}

export const ProductCard = (props: ProductCardProps) => {
    const { product, path, actionSlot } = props;

    const renderPrice = () => {
        if(product.discountedPrice && product.discountedPrice < product.price) {
            return (
                <>
                    <span className={s.discountPrice} aria-label={`Цена со скидкой: ${product.discountedPrice} ₽`}>{product.discountedPrice} ₽</span>
                    <span className={s.priceLined} aria-label={`Старая цена: ${product.price} ₽`}>{product.price} ₽</span>
                </>
            )
        }
        return <span className={s.price} aria-label='Цена'>{product.price} ₽</span>
    }

    return (
        <article 
            className={s.productCard}
            aria-label={`Карта товара: ${product.name}`}
        >
            <Link href={path}>
                <div className={s.contentWrap}>
                    <Image src={product.previewImage} className={s.productImage} height={300} width={200} alt={`Изображение товара "${product.name}"`} priority/>
                    <div className={s.priceWrap}>
                        {renderPrice()}
                    </div>
                    <h3 className={s.title}>{product.name}</h3>
                    <div className={s.ratingWrap}>
                        <span className={s.rating} aria-label={`Рейтинг товара: ${product.rating}`}>{product.rating}</span>
                        <span className={s.reviewsInfo} aria-label={`Отзывы товара: ${product.reviewsCount ?? 0}`}>{product.reviewsCount ?? 0} Отзывов</span>
                    </div>
                </div>
            </Link>

            
            {actionSlot && 
            <div className="mt-auto">
                {actionSlot}
            </div>}
        </article>
    )
}