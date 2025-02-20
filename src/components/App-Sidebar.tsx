"use client"

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    // SidebarProvider,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]


export function AppSidebar() {
    const pathname = usePathname();
    return (
        <Sidebar className="bg-background text-secondary-foreground">
            <div className="head text-justify text-muted-foreground text-2xl font-bold p-5">Admin Dashboard</div>
            <SidebarContent className="bg-transparent">
                <SidebarGroup>
                    <SidebarGroupLabel className="">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="bg-background dark:backdrop-blur-3xl ">
                            {items.map((item) => (
                                <SidebarMenuItem className=" hover:bg-slate-500 " key={item.title}>
                                    <SidebarMenuButton className="" asChild>
                                        <a
                                            href={item.url}
                                            className={pathname === item.url ? " bg-slate-700" : ""}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}
