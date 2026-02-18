"use client";

import React, { useState } from "react";
import {
  Users,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  Check,
  X,
  ExternalLink,
  BarChart3,
  Building2,
  ArrowUpRight,
  ShieldAlert,
  MoreVertical,
  ChevronRight,
  UserPlus,
} from "lucide-react";

export default function Proveedor() {
  const [activeKyc, setActiveKyc] = useState(0);

  // Mock de solicitudes KYC
  const kycRequests = [
    {
      id: 1,
      name: "Logística Norte SA",
      type: "Persona Moral",
      date: "Hace 2 horas",
      docType: "Registro Fiscal (RFC)",
      status: "Pendiente",
    },
    {
      id: 2,
      name: "Insumos Médicos Express",
      type: "Persona Física",
      date: "Hace 5 horas",
      docType: "ID Oficial",
      status: "Pendiente",
    },
  ];

  // Mock de Directorio de Proveedores
  const providers = [
    {
      id: "P001",
      name: "Tech Solutions",
      volume: 85000,
      health: "Excelente",
      growth: 15,
      disputes: 2,
    },
    {
      id: "P002",
      name: "Global Foods",
      volume: 42000,
      health: "Estable",
      growth: -5,
      disputes: 8,
    },
    {
      id: "P003",
      name: "Eco Power",
      volume: 120000,
      health: "Crítico",
      growth: 22,
      disputes: 15,
    },
    {
      id: "P004",
      name: "Alpha Logistics",
      volume: 67000,
      health: "Excelente",
      growth: 8,
      disputes: 1,
    },
  ];

  return (
    <div className="text-gray-300 ">
      {/* Cabecera */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            Ecosistema de Proveedores
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Validación KYC, monitoreo de riesgo y directorio de contratos.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-2xl text-sm transition-all shadow-lg shadow-orange-500/10">
          <UserPlus size={18} />
          Registrar Proveedor
        </button>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* COLUMNA IZQUIERDA: Directorio y Analítica */}
        <div className="xl:col-span-8 space-y-8">
          {/* 3. Matriz de Rendimiento y Riesgo (Analítica) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-[28px] border border-gray-800/50 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-widest italic">
                  <TrendingUp size={16} className="text-green-500" />
                  Top Crecimiento
                </h4>
                <BarChart3 size={16} className="text-gray-600" />
              </div>
              <div className="space-y-4">
                {providers
                  .sort((a, b) => b.growth - a.growth)
                  .slice(0, 3)
                  .map((p, i) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-gray-600">
                          0{i + 1}
                        </span>
                        <p className="text-sm text-gray-300 font-medium">
                          {p.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500"
                            style={{ width: `${Math.max(10, p.growth)}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-orange-500 font-bold">
                          +{p.growth}%
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-[28px] border border-gray-800/50 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-widest italic">
                  <ShieldAlert size={16} className="text-red-500" />
                  Monitor de Disputas
                </h4>
                <AlertTriangle size={16} className="text-gray-600" />
              </div>
              <div className="space-y-4">
                {providers
                  .sort((a, b) => b.disputes - a.disputes)
                  .slice(0, 3)
                  .map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between"
                    >
                      <p className="text-sm text-gray-300">{p.name}</p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${p.disputes > 10 ? "bg-red-500/20 text-red-500" : "bg-gray-800 text-gray-400"}`}
                        >
                          {p.disputes} Reclamos
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* 1. Directorio en "Cards" de Perfil */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">
                Directorio de Socios Comerciales
              </h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Filtrar..."
                    className="bg-[#121212] border border-gray-800 rounded-xl py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-orange-500/50 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {providers.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#1a1a1a] p-6 rounded-[24px] border border-gray-800/50 hover:border-orange-500/30 transition-all group relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:scale-110 transition-transform">
                        <Building2 size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white group-hover:text-orange-500 transition-colors">
                          {p.name}
                        </h5>
                        <p className="text-[10px] text-gray-600 font-mono">
                          UID: {p.id}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-600 hover:text-white transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#121212] p-3 rounded-xl border border-gray-800/50">
                      <p className="text-[9px] text-gray-600 uppercase font-bold mb-1 tracking-widest">
                        Facturación
                      </p>
                      <p className="text-sm font-bold text-white">
                        ${p.volume.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-[#121212] p-3 rounded-xl border border-gray-800/50">
                      <p className="text-[9px] text-gray-600 uppercase font-bold mb-1 tracking-widest">
                        Salud Financiera
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${p.health === "Excelente" ? "bg-green-500" : p.health === "Estable" ? "bg-yellow-500" : "bg-red-500"}`}
                        ></span>
                        <span className="text-[10px] font-bold text-gray-300">
                          {p.health}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-[#121212] hover:bg-orange-500 hover:text-black border border-gray-800 py-3 rounded-xl text-xs font-bold transition-all group-hover:shadow-lg">
                    Gestionar Proveedor
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: 2. Panel de "Solicitudes de Validación" (KYC Stack) */}
        <div className="xl:col-span-4">
          <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] p-8 rounded-[32px] border border-gray-800/50 sticky top-10 shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <ShieldCheck size={20} className="text-orange-500" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Cola de Validación
                </h4>
              </div>

              {/* Stack Swiper Effect Simulado */}
              <div className="relative h-[480px]">
                {kycRequests.map((req, index) => (
                  <div
                    key={req.id}
                    className={`absolute inset-x-0 transition-all duration-500 cursor-pointer ${
                      index === activeKyc
                        ? "translate-y-0 scale-100 z-30 opacity-100"
                        : "translate-y-6 scale-95 z-20 opacity-40 blur-[1px]"
                    }`}
                    style={{ top: `${index * 20}px` }}
                  >
                    <div className="bg-[#121212] border border-gray-800 p-6 rounded-3xl shadow-2xl flex flex-col h-[420px]">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] bg-orange-500 text-black font-black px-2 py-0.5 rounded uppercase tracking-tighter italic">
                          New Request
                        </span>
                        <span className="text-[10px] text-gray-600 font-mono">
                          {req.date}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center border-2 border-dashed border-gray-700 mb-4 overflow-hidden">
                          <Building2 size={32} className="text-gray-600" />
                        </div>
                        <h5 className="text-white font-bold text-lg mb-1">
                          {req.name}
                        </h5>
                        <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
                          {req.type}
                        </p>

                        <div className="w-full bg-[#0d0d0d] p-4 rounded-2xl border border-gray-800/50 text-left mb-6">
                          <p className="text-[9px] text-gray-600 font-bold uppercase mb-2">
                            Documento Adjunto
                          </p>
                          <div className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-2">
                              <ExternalLink
                                size={14}
                                className="text-orange-500"
                              />
                              <span className="text-[11px] text-gray-300 truncate w-32">
                                {req.docType}.pdf
                              </span>
                            </div>
                            <span className="text-[10px] text-gray-600">
                              4.2 MB
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 font-bold py-4 rounded-2xl text-xs transition-all flex items-center justify-center gap-2">
                          <X size={16} />
                          Rechazar
                        </button>
                        <button className="flex-1 bg-green-500 text-black font-bold py-4 rounded-2xl text-xs transition-all hover:bg-green-400 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
                          <Check size={16} />
                          Aprobar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Empty State / Bottom Indicator */}
                <div className="absolute bottom-0 inset-x-0 text-center py-4 border-t border-gray-800/50 mt-4">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                    {kycRequests.length} Solicitudes Pendientes
                  </p>
                </div>
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px]"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
