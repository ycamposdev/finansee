"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Plus,
  Trash2,
  Star,
  ShieldCheck,
  Copy,
  Check,
  ChevronRight,
  Zap,
  Lock,
  Building,
  Info,
} from "lucide-react";

export default function metodoPago() {
  // Estado para el toggle de Autopay
  const [autoPay, setAutoPay] = useState(true);
  const [copied, setCopied] = useState(false);

  // Datos mock de tarjetas
  const [cards, setCards] = useState([
    {
      id: 1,
      brand: "Visa",
      last4: "4242",
      exp: "12/26",
      isDefault: true,
      color: "from-blue-600 to-indigo-900",
    },
    {
      id: 2,
      brand: "Mastercard",
      last4: "8890",
      exp: "10/25",
      isDefault: false,
      color: "from-gray-700 to-black",
    },
    {
      id: 3,
      brand: "Amex",
      last4: "2004",
      exp: "05/27",
      isDefault: false,
      color: "from-emerald-600 to-teal-900",
    },
  ]);

  const copyToClipboard = () => {
    const clabe = "123 456 789 012 345 678";
    // En un entorno real se usaría navigator.clipboard o document.execCommand('copy')
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" text-gray-300 font-sans ">
      {/* Decoración de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>

      <header className="mb-12 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
            Métodos de Pago
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md italic">
            Administra tus tarjetas, configura cobros automáticos y consulta tus
            datos para transferencias SPEI/ACH.
          </p>
        </div>

        {/* 2. Gestión de Domiciliación (Autopay Toggle) */}
        <div className="bg-[#121212] border border-gray-800/50 p-6 rounded-[28px] flex items-center gap-6 shadow-xl">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white uppercase tracking-widest mb-1 italic flex items-center gap-2">
              <Zap size={12} className="text-orange-500" /> Pago Automático
            </span>
            <span className="text-[9px] text-gray-600 font-bold uppercase">
              Domiciliación activa
            </span>
          </div>
          <button
            onClick={() => setAutoPay(!autoPay)}
            className={`w-12 h-6 rounded-full transition-all relative ${autoPay ? "bg-orange-500" : "bg-gray-800"}`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${autoPay ? "right-1" : "left-1"}`}
            ></div>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* COLUMNA IZQUIERDA: Wallet de Tarjetas */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. Wallet de Tarjetas (Visual Card Stack) */}
          <section>
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic flex items-center gap-2">
                <CreditCard size={14} className="text-orange-500" />
                Mis Tarjetas Guardadas
              </h4>

              {/* 4. Flujo de "Agregar Nuevo Método" */}
              <button className="flex items-center gap-2 text-[10px] font-black text-orange-500 hover:text-orange-400 uppercase tracking-widest transition-all group">
                <div className="p-1.5 bg-orange-500/10 border border-orange-500/20 rounded-lg group-hover:bg-orange-500/20">
                  <Plus size={14} />
                </div>
                Agregar Tarjeta
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`relative h-48 rounded-[24px] bg-gradient-to-br ${card.color} p-6 shadow-2xl flex flex-col justify-between overflow-hidden group hover:scale-[1.03] transition-all duration-300`}
                >
                  {/* Overlay de diseño */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>

                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-lg font-black italic tracking-tighter text-white/90">
                      {card.brand}
                    </span>
                    {card.isDefault && (
                      <span className="bg-white/20 backdrop-blur-md text-[8px] font-black text-white px-2 py-0.5 rounded-full uppercase tracking-widest border border-white/10">
                        Principal
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <p className="text-xl font-mono text-white tracking-[0.2em] mb-4">
                      •••• {card.last4}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[8px] text-white/50 font-bold uppercase tracking-widest">
                          Expiración
                        </p>
                        <p className="text-xs font-bold text-white">
                          {card.exp}
                        </p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-black/20 hover:bg-black/40 rounded-xl text-white backdrop-blur-sm transition-all">
                          <Star
                            size={14}
                            className={card.isDefault ? "fill-white" : ""}
                          />
                        </button>
                        <button className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-xl text-white backdrop-blur-sm transition-all">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto de seguridad PCI-DSS */}
            <div className="mt-8 flex items-center gap-3 p-4 bg-green-500/[0.03] border border-green-500/10 rounded-2xl max-w-fit">
              <ShieldCheck size={18} className="text-green-500/50" />
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">
                Tus datos están encriptados y protegidos por estándares{" "}
                <span className="text-green-500/70">PCI-DSS Nivel 1</span>
              </p>
            </div>
          </section>

          {/* 3. Cuentas para Transferencias (SPEI / ACH) */}
          <section className="bg-[#121212] rounded-[32px] border border-gray-800/50 p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                <Building size={20} className="text-gray-400" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">
                  Cuenta para Transferencias
                </h4>
                <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                  Recibe fondos o paga vía SPEI / ACH
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-gray-800/60 p-6 rounded-2xl flex justify-between items-center group">
                <div>
                  <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1 italic">
                    CLABE Interbancaria
                  </p>
                  <p className="text-sm font-mono font-bold text-gray-300">
                    123 456 789 012 345 678
                  </p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-gray-800/50 hover:bg-orange-500 hover:text-black rounded-xl transition-all"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="bg-black/40 border border-gray-800/60 p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1 italic">
                    Banco Destino
                  </p>
                  <p className="text-sm font-bold text-gray-300 tracking-tighter uppercase italic">
                    Fintech Global S.A.
                  </p>
                </div>
                <Info size={16} className="text-gray-700" />
              </div>
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: Resumen y Tips */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[35px] border border-gray-800/50 p-8 shadow-2xl overflow-hidden relative">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 italic flex items-center gap-2 text-orange-500">
              <Lock size={14} /> Configuración de Seguridad
            </h4>

            <div className="space-y-6">
              <div className="p-4 bg-black/40 rounded-2xl border border-gray-800/40">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Límite de Gasto Mensual
                </p>
                <div className="flex justify-between items-end">
                  <p className="text-xl font-black text-white italic">
                    $5,000.00
                  </p>
                  <button className="text-[9px] font-black text-orange-500 uppercase underline">
                    Ajustar
                  </button>
                </div>
              </div>

              <div className="p-4 bg-black/40 rounded-2xl border border-gray-800/40">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Notificaciones
                </p>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 text-[10px] font-bold text-gray-500">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-orange-500"
                    />{" "}
                    Alertas de cobro próximo
                  </label>
                  <label className="flex items-center gap-3 text-[10px] font-bold text-gray-500">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-orange-500"
                    />{" "}
                    Recibos por email
                  </label>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5">
              Guardar Preferencias <ChevronRight size={14} />
            </button>
          </div>

          <div className="p-8 bg-orange-500/5 rounded-[30px] border border-orange-500/10">
            <h6 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Info size={14} /> Tip de Usuario
            </h6>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed italic">
              "Mantener una tarjeta principal con **Autopay** activo evita
              recargos por pago tardío y mejora tu historial crediticio con
              nuestros proveedores."
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
