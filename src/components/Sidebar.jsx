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
  Menu, // Icono para abrir
  X, // Icono para cerrar
} from "lucide-react";
import { useEffect, useState } from "react";
import { obtenerDatosUsuario } from "../lib/userData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [usuarioRol, setUsuarioRol] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Estado para el móvil

  // Función para cerrar el menú al hacer clic en un link (móvil)
  const closeMenu = () => setIsOpen(false);

  // ... (Tus arrays menuItems, menuCliente, menuProveedor se mantienen igual)
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    { name: "Facturas", icon: <FileText size={20} />, path: "/admin/facturas" },
    {
      name: "Proveedores",
      icon: <Box size={20} />,
      path: "/admin/proveedores",
    },
    { name: "Clientes", icon: <Users size={20} />, path: "/admin/clientes" },
  ];

  const menuCliente = [
    {
      name: "Realizar Pago",
      icon: <SendHorizontal size={20} />,
      path: "/cliente/realizarPago",
    },
    {
      name: "Mis Pagos",
      icon: <ReceiptText size={20} />,
      path: "/cliente/misPagos",
    },
    {
      name: "Métodos de Pago",
      icon: <Wallet size={20} />,
      path: "/cliente/metodoPago",
    },
    {
      name: "Soporte de Pagos",
      icon: <LifeBuoy size={20} />,
      path: "/cliente/soportePago",
    },
  ];

  const menuProveedor = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/proveedor/dashboard",
    },
    {
      name: "Generar cobro",
      icon: <HandCoins size={20} />,
      path: "/proveedor/generarCobro",
    },
    {
      name: "Recibos Emitidos",
      icon: <FileCheck size={20} />,
      path: "/proveedor/recibosEmitidos",
    },
  ];

  useEffect(() => {
    const cargarInfo = async () => {
      const info = await obtenerDatosUsuario();
      setUsuarioRol(info);
    };
    cargarInfo();
  }, []);

  return (
    <>
      {/* --- BOTÓN HAMBURGUESA (Solo visible en móviles) --- */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2.5 bg-orange-500 text-white rounded-xl shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* --- OVERLAY PARA MÓVIL (Fondo oscuro cuando el menú está abierto) --- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* --- SIDEBAR --- */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-[70] w-64 bg-[#1c1c1c] m-4 rounded-3xl flex flex-col text-gray-400 p-6 shadow-2xl border border-white/5 transition-transform duration-300 ease-in-out
        lg:sticky lg:translate-x-0 lg:h-[calc(100vh-2rem)] lg:top-4
        ${isOpen ? "translate-x-0" : "-translate-x-[110%]"} 
      `}
      >
        {/* Botón cerrar (Solo móvil) */}
        <button
          onClick={closeMenu}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-orange-500 p-2 rounded-xl text-white shadow-lg shadow-orange-500/20">
            <Box size={22} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tight uppercase italic">
              finansee
            </span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              {usuarioRol?.rol === "admin"
                ? "Administrador"
                : usuarioRol?.rol || "Cargando..."}
            </span>
          </div>
        </div>

        {/* Menú Dinámico */}
        <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">
            Main Menu
          </p>

          {(usuarioRol?.rol === "admin"
            ? menuItems
            : usuarioRol?.rol === "cliente"
              ? menuCliente
              : usuarioRol?.rol === "proveedor"
                ? menuProveedor
                : []
          ).map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path || "#"}
                onClick={closeMenu}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                    : "hover:bg-white/5 hover:text-gray-200 text-gray-400"
                }`}
              >
                <div
                  className={`${isActive ? "scale-110 text-orange-500" : ""} transition-transform`}
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
          })}
        </nav>

        {/* Footer */}
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
    </>
  );
}
