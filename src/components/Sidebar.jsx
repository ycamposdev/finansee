"use client";

import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Box,
  SendHorizontal,
  ReceiptText,
  Wallet,
  LifeBuoy,
  HandCoins,
  FileCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { obtenerDatosUsuario } from "@/lib/userData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [usuarioRol, setUsuarioRol] = useState("");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      active: true,
      path: "/admin/dashboard",
    },
    {
      name: "Facturas",
      icon: <FileText size={20} />,
      active: false,
      path: "/admin/facturas",
    },
    { name: "Proveedores", icon: <Box size={20} />, active: false },
    { name: "Clientes", icon: <Users size={20} />, active: false },
  ];

  const menuCliente = [
    {
      name: "Realizar Pago",
      icon: <SendHorizontal size={20} />,
      active: true,
    },
    { name: "Mis Pagos", icon: <ReceiptText size={20} />, active: false },
    { name: "Métodos de Pago", icon: <Wallet size={20} />, active: false },
    { name: "Soporte de Pagos", icon: <LifeBuoy size={20} />, active: false },
  ];

  const menuProveedor = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      active: true,
    },
    { name: "Generar cobro", icon: <HandCoins size={20} />, active: false },
    { name: "Recibos Emitidos", icon: <FileCheck size={20} />, active: false },
  ];

  useEffect(() => {
    const cargarInfo = async () => {
      const info = await obtenerDatosUsuario();
      setUsuarioRol(info);
    };
    cargarInfo();
  }, []);

  return (
    // h-[calc(100vh-2rem)] asegura que llegue hasta abajo dejando el margen del floating
    <aside className="w-64 bg-[#1c1c1c] m-4 h-[calc(100vh-2rem)] rounded-3xl flex flex-col text-gray-400 p-6 shadow-2xl border border-white/5 sticky top-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-orange-500 p-2 rounded-xl text-white shadow-lg shadow-orange-500/20">
          <Box size={22} fill="currentColor" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl tracking-tight uppercase italic">
            finansee
          </span>
          <span>
            {usuarioRol?.rol == "admin"
              ? "Administrador"
              : usuarioRol?.rol || "No encontrado"}
          </span>
        </div>
      </div>

      {/* Menú */}
      <nav className="flex-1 space-y-2">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">
          Main Menu
        </p>
        {usuarioRol?.rol == "admin"
          ? menuItems.map((item) => {
              // ESTA ES LA CLAVE: Comparamos la URL real con el path del menú
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path || "#"}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive // <--- Usamos nuestra nueva variable
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                      : "hover:bg-white/5 hover:text-gray-200 text-gray-400"
                  }`}
                >
                  <div
                    className={`${isActive ? "scale-110" : ""} transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`font-medium text-sm ${isActive ? "font-bold" : ""}`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })
          : usuarioRol?.rol == "cliente"
            ? menuCliente.map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    item.active
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                      : "hover:bg-white/5 hover:text-gray-200"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium text-sm">{item.name}</span>
                </button>
              ))
            : usuarioRol?.rol == "proveedor"
              ? menuProveedor.map((item) => (
                  <button
                    key={item.name}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      item.active
                        ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                        : "hover:bg-white/5 hover:text-gray-200"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium text-sm">{item.name}</span>
                  </button>
                ))
              : undefined}
      </nav>

      {/* Footer del Sidebar */}
      <div className="pt-6 border-t border-white/5 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all text-sm">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-500/5 hover:text-red-400 transition-all text-sm">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
