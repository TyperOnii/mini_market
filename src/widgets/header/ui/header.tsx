'use client'

import Link from 'next/link'
import s from './header.module.scss'
import clsx from 'clsx'
import { observer } from 'mobx-react'
import { CartStore } from '@/entities/Cart'

export const Header = observer(() => {
    const { isEmpty, totalQuantity } = CartStore;

    return (
        <header className={s.header}>
            <div className={clsx(s.header_inner, 'container')}>
                <span className={s.title}>red</span>
                <nav className={s.header_menu}>
                    <ul className={s.header_menu_list}>
                        <li>
                            <Link href='/' tabIndex={0}>Заказы</Link>
                        </li>
                        <li>
                            <Link href='/'>Вишлист</Link>
                        </li>
                        <li>
                            <Link href='/'>Профиль</Link>
                        </li>
                        <li>
                            <Link href='/cart'>Корзина <span className={s.counter}>{!isEmpty && totalQuantity}</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
})