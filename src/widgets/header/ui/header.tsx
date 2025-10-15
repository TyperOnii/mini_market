import Link from 'next/link'
import s from './header.module.scss'
import { HEADER_NAV_MENU_CONFIG } from '../const/nav-menu'
import { CartItemsCounter } from '@/entities/Cart'

export const Header = () => {
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
                            Корзина <CartItemsCounter/>
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
}