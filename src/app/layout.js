"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // usePathName es para obtener la ruta actual de la pagina, es decir 'https://localhost:3000'
  const rutaNombre = usePathname();

  const isLoginPagina = rutaNombre === "/login";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] flex h-screen overflow-hidden`}
      >
        {!isLoginPagina && <Sidebar />}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {!isLoginPagina && (
            <header className="h-20 flex items-center justify-between px-8 border-b border-white/5">
              <h2 className="text-white font-semibold text-lg">
                Dashboard Overview
              </h2>

              <Avatar className="h-10 w-10 border border-white/10">
                <AvatarImage src="https://images.unsplash.com/photo-1762571944746-de332cab1e57?q=80&w=687&auto=format&fit=crop" />
                <AvatarFallback className="bg-[#222222] text-white">
                  CN
                </AvatarFallback>
              </Avatar>
            </header>
          )}

          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
