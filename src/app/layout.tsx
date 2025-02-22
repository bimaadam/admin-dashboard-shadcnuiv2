import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/App-Sidebar";
import { MenuBar } from "@/components/Menubar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary-foreground`}
      >

        <main className="flex-1">
          <SidebarProvider className="dark p-3 flex flex-col md:flex-row">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <SidebarTrigger className="text-white pb-2" />
              <MenuBar />
              <div className="p-5 flex-1">{children}</div>
              <footer className="text-center text-gray-600 py-4">
                Web By Bima Adam
              </footer>
            </div>
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
