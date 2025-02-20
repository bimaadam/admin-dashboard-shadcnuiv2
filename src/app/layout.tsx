import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { cookies } from "next/headers";
import { AppSidebar } from "@/components/App-Sidebar";
import { MenuBar } from "@/components/Menubar";
// import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";


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

// const cookieStore = await cookies();
// const defaultOpen = cookieStore.get("sidebar.state")?.value === "true";

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


        {/* <DialogContent />
          <DialogTitle /> */}
        <main className="flex-1">
          <SidebarProvider className="dark p-3 flex">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <SidebarTrigger className="text-white pb-2" />
              <MenuBar />
              <div className="p-5">{children}</div>
            </div>
          </SidebarProvider>

          <footer className="text-white">Web By Bima Adam</footer>
        </main>
      </body>
    </html >
  );
}
