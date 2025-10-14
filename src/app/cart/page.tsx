import { CartItemsList } from "@/entities/Cart"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Корзина',
    description: 'Страница с корзиной товаров',
    keywords: ['корзина', 'корзина товаров', 'товары', 'оплата'],
}

export default function CartPage () {

    return (
        <section>
            <div className='container'>
                <div className="mt-4">
                    <h2 className="font-semibold text-3xl pt-2">Корзина</h2>
                </div>
                <div className="mt-8">
                    <CartItemsList/>
                </div>
            </div>
        </section>
    )
}