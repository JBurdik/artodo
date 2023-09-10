import { AreaChart, Cog, DollarSign, Home, List, LucideIcon } from "lucide-react"

export interface AdminNav {
    link: string,
    icon?: LucideIcon
    name: string
}

export const adminNav: AdminNav[] = [
    {
        link: "/admin",
        icon: AreaChart,
        name: 'Dashboard'
    },
    {
        link: "/admin/products",
        icon: List,
        name: 'Produkty'
    },
    {
        link: "/admin/orders",
        icon: DollarSign,
        name: 'Objednávky'
    },
    {
        link: "/admin/unknown",
        name: 'Unknown'
    }
]