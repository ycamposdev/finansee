"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
// 1. IMPORTA TU NUEVO COMPONENTE (Asegúrate de que la ruta sea correcta)
import MenuDesplegable from "../components/UserMenu";
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
            <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 flex-shrink-0">
              <div className="flex items-center">
                <div className="lg:hidden w-12" />
                <h2 className="text-white font-semibold text-lg">
                  Dashboard Overview
                </h2>
              </div>

              {/* 2. REEMPLAZA EL <Avatar> POR TU <MenuDesplegable /> */}
              <MenuDesplegable />
            </header>
          )}

          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
