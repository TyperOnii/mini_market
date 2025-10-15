import { HeaderNavLink } from "../types/header-nav-link.types";

export const HEADER_NAV_MENU_CONFIG: HeaderNavLink[] = [
    {
        label: 'Заказы',
        href: '/',
    },
    {
        label: 'Вишлист',
        href: '/wishlist',
    },
    {
        label: 'Профиль',
        href: '/',
    },
    {
        label: 'Корзина',
        href: '/cart',
        withCounter: true,
    },
] as const;