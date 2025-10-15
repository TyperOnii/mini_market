import Link from 'next/link'
import s from './header.module.scss'
import { HEADER_NAV_MENU_CONFIG } from '../const/nav-menu'
import { CartItemsCounter } from '@/entities/Cart'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.header_inner}>
                    <Link href='/' aria-label='Логотип red' title='red'><span className={s.title}>red</span></Link>
                    <nav className={s.header_menu} aria-label="Основная навигация">
                        <ul className={s.header_menu_list}>
                            {HEADER_NAV_MENU_CONFIG.map(({ label, href, withCounter }) => (
                                <li key={label}>
                                    <Link href={href} title={`Перейти в раздел: ${label}`}>
                                        {label}
                                        {withCounter && <CartItemsCounter/>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}