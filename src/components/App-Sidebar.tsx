"use client";

import {
    Calendar,
    FolderPlusIcon,
    Gauge,
    Inbox,
    Radical,
    Search,
    Settings,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    // SidebarProvider,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Dialog, DialogTitle, DialogContent } from "@radix-ui/react-dialog";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: Gauge,
    },
    {
        title: "Tambah Produk",
        url: "/produk",
        icon: FolderPlusIcon,
    },
    {
        title: "Hitung HPP",
        url: "hitunghpp",
        icon: Radical
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
];

export function AppSidebar() {
    const pathname = usePathname();
    return (
        <>
            <Dialog>
                <DialogTitle>
                    <DialogContent />
                </DialogTitle>
            </Dialog>
            <Sidebar className="bg-background text-secondary-foreground">
                <div className="head text-justify text-muted-foreground text-2xl font-bold p-5">
                    Admin Dashboard
                </div>
                <SidebarContent className="bg-transparent">
                    <SidebarGroup>
                        <SidebarGroupLabel className="">Menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarFooter>
                                <SidebarMenu className="bg-background dark:backdrop-blur-3xl ">
                                    {items.map((item) => (
                                        <SidebarMenuItem
                                            className=" hover:bg-slate-500 "
                                            key={item.title}
                                        >

                                            <SidebarMenuButton className="" asChild>
                                                <a
                                                    href={item.url}
                                                    className={pathname === item.url ? " bg-slate-700" : ""}
                                                >
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarFooter>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar >
        </>
    );
}
