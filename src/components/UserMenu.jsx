"use client";
import React, { useState, useRef, useEffect } from "react";
// Importamos tus componentes de avatar.jsx
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  User,
  Settings,
  BellRing,
  LogOut,
  ChevronDown,
  ShieldCheck,
  Mail,
  Camera,
} from "lucide-react";
import Link from "next/link";

export default function MenuDesplegable() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuGroups = [
    {
      label: "Personal",
      items: [
        { label: "Mi Perfil", icon: <User size={14} />, path: "/perfil" },
        {
          label: "Preferencias",
          icon: <BellRing size={14} />,
          path: "/preferencias",
        },
      ],
    },
    {
      label: "Organización",
      items: [
        {
          label: "Configuración de Cuenta",
          icon: <Settings size={14} />,
          path: "/configuracionCuenta",
        },
      ],
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* TRIGGER: Aquí usamos tus componentes de Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-white/5 p-1 rounded-2xl transition-all group outline-none"
      >
        <Avatar className="h-9 w-9 border border-white/10 shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1762571944746-de332cab1e57?q=80&w=687&auto=format&fit=crop" />
          <AvatarFallback className="bg-orange-500 text-black font-black italic">
            JD
          </AvatarFallback>
        </Avatar>

        <ChevronDown
          size={12}
          className={`text-zinc-600 group-hover:text-orange-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-[#0a0a0a] border border-zinc-800/80 rounded-[30px] shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200 origin-top-right backdrop-blur-xl">
          <div className="p-2 py-3">
            {menuGroups.map((group, idx) => (
              <div key={idx} className="mb-2 last:mb-0">
                <p className="px-4 py-2 text-[7px] font-black text-zinc-800 uppercase tracking-[0.4em] italic">
                  {group.label}
                </p>
                <div className="space-y-0.5 mt-1">
                  {group.items.map((item, i) => (
                    <Link
                      href={item.path || "#"}
                      key={i}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/[0.04] transition-all group text-left"
                    >
                      <div className="text-zinc-600 group-hover:text-orange-500 transition-colors">
                        {item.icon}
                      </div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors italic">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <footer className="p-2 bg-zinc-950/40 border-t border-zinc-800/40">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-[18px] hover:bg-rose-500/10 transition-all group">
              <div className="flex items-center gap-3">
                <Link href={"/login"} className="flex gap-4">
                  <LogOut
                    size={14}
                    className="text-rose-500/70 group-hover:text-rose-500 transition-colors"
                  />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] italic text-rose-500/70 group-hover:text-rose-500 transition-colors">
                    Cerrar Sesión
                  </span>
                </Link>
              </div>
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
