import { UrlObject } from "url";

export interface NavigationLink {
    label: string,
    href: string | UrlObject,
    icon?: string,
    state?: Record<string, string | number | boolean>,
}