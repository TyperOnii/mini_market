import { Product } from "../../model/types"
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";
import s from './product-card.module.scss';
import { ReactNode } from "react";

interface ProductCardProps {
    item: Product,
    path: string | UrlObject,
    actionSlot?: ReactNode,
}

export const ProductCard = (props: ProductCardProps) => {
    const { item, path, actionSlot } = props;

    const renderPrice = () => {
        const { price, discountedPrice } = item;
        if(discountedPrice && discountedPrice < price) {
            return (
                <>
                    <span className={s.discountPrice} aria-label={`Цена со скидкой: ${discountedPrice} ₽`}>{discountedPrice} ₽</span>
                    <span className={s.priceLined} aria-label={`Старая цена: ${price} ₽`}>{price} ₽</span>
                </>
            )
        }
        return <span className={s.price} aria-label='Цена'>{price} ₽</span>
    }

    return (
        <article 
            className={s.productCard}
            aria-label={`Карта товара: ${item.name}`}
        >
            <Link href={path}>
                <div className={s.contentWrap}>
                    <Image src={item.previewImage} className={s.productImage} height={300} width={200} alt={`Изображение товара "${item.name}"`} priority/>
                    <div className={s.priceWrap}>
                        {renderPrice()}
                    </div>
                    <h3 className={s.title}>{item.name}</h3>
                    <div className={s.ratingWrap}>
                        <span className={s.rating} aria-label={`Рейтинг товара: ${item.rating}`}>{item.rating}</span>
                        <span className={s.reviewsInfo} aria-label={`Отзывы товара: ${item.reviewsCount ?? 0}`}>{item.reviewsCount ?? 0} Отзывов</span>
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