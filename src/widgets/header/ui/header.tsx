'use client'

import Link from 'next/link'
import s from './header.module.scss'
import { observer } from 'mobx-react'
import { CartStore } from '@/entities/Cart'
import { HEADER_NAV_MENU_CONFIG } from '../const/nav-menu'

export const Header = observer(() => {
    const { isEmpty, totalQuantity } = CartStore;

    const renderMenu = () => {
        return (
            <nav className={s.header_menu}>
                <ul className={s.header_menu_list}>
                    {HEADER_NAV_MENU_CONFIG.map(({ label, href }) => (
                        <li key={label}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href='/cart'>
                            Корзина {!isEmpty && <span className={s.counter}>{totalQuantity}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }

    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.header_inner}>
                    <span className={s.title}>red</span>
                    {renderMenu()}
                </div>
            </div>
        </header>
    )
})