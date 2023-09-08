import { Home, LucideIcon, ShoppingBag } from "lucide-react"

export interface navLink {
    path: string,
    displayName: string,
    Icon?: LucideIcon
}

export const navLinks: navLink[] = [
    {
        path: '/',
        displayName: 'Home',
        Icon: Home
    },
    {
        path: '/products',
        displayName: 'Produkty',
        Icon: ShoppingBag
    }
]