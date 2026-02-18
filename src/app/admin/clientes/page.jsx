"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  ShieldCheck,
  AlertCircle,
  Crown,
  Zap,
  Search,
  Filter,
  DollarSign,
  BarChart3,
  ChevronRight,
  ArrowUpRight,
  PieChart,
  Wallet,
  MoreVertical,
  Plus,
  Minus,
  Activity,
} from "lucide-react";

export default function Clientes() {
  // Mock de datos de clientes con segmentación y crédito
  const clients = [
    {
      id: "C-9901",
      name: "Corporativo Global Inc",
      tier: "Enterprise",
      usedCredit: 45000,
      totalCredit: 100000,
      avgPayDays: 5,
      status: "Healthy",
    },
    {
      id: "C-8823",
      name: "Restaurante El Faro",
      tier: "En Riesgo",
      usedCredit: 18000,
      totalCredit: 20000,
      avgPayDays: 42,
      status: "Late",
    },
    {
      id: "C-7741",
      name: "Software & Dev Solutions",
      tier: "Recurrente",
      usedCredit: 5000,
      totalCredit: 15000,
      avgPayDays: 12,
      status: "Healthy",
    },
    {
      id: "C-5520",
      name: "Constructora del Norte",
      tier: "Enterprise",
      usedCredit: 82000,
      totalCredit: 150000,
      avgPayDays: 8,
      status: "Healthy",
    },
  ];

  return (
    <div className="text-gray-300 ">
      {/* Cabecera de Gestión */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            Gestión de Cartera
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Control de límites crediticios, salud de pago y segmentación de
            clientes.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="bg-[#1a1a1a] border border-gray-800 p-3 rounded-2xl flex items-center gap-4">
            <div className="text-right border-r border-gray-800 pr-4">
              <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest">
                Total en Riesgo
              </p>
              <p className="text-lg font-bold text-red-500">$124,500.00</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest">
                Días Pago Prom.
              </p>
              <p className="text-lg font-bold text-green-400">14.2 d</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* COLUMNA IZQUIERDA: 1. Panel de Salud de Cartera (Analítica) */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-[32px] border border-gray-800/50 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2 italic">
                  <Activity size={16} className="text-orange-500" />
                  Salud de Cartera
                </h4>
                <PieChart size={18} className="text-gray-600" />
              </div>

              {/* Medidor de Velocidad de Pago */}
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-800"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray="502.4"
                      strokeDashoffset="150"
                      className="text-orange-500 shadow-lg"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-black text-white">85%</span>
                    <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">
                      On-Time Pay
                    </span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-400 mb-1">
                    Velocidad de Cobro
                  </p>
                  <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">
                    <TrendingDown size={14} /> -2.4 días vs mes anterior
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Cartera Vencida (30+ d)</span>
                  <span className="text-red-500 font-bold">$42,300</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[15%] h-full bg-red-500"></div>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
          </section>

          {/* 2. Segmentación de Clientes (Tier Level Summary) */}
          <section className="bg-[#1a1a1a] p-6 rounded-[28px] border border-gray-800/50">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">
              Distribución por Tier
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#121212] rounded-xl border border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Crown size={14} className="text-purple-400" />
                  </div>
                  <span className="text-xs font-bold text-gray-300">
                    VIP / Enterprise
                  </span>
                </div>
                <span className="text-xs text-white">12 Cuentas</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#121212] rounded-xl border border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Zap size={14} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-gray-300">
                    Recurrentes
                  </span>
                </div>
                <span className="text-xs text-white">45 Cuentas</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#121212] rounded-xl border border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertCircle size={14} className="text-red-400" />
                  </div>
                  <span className="text-xs font-bold text-gray-300">
                    En Riesgo
                  </span>
                </div>
                <span className="text-xs text-white">8 Cuentas</span>
              </div>
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: 3. Registro de "Límites de Crédito" (Directorio Detallado) */}
        <div className="lg:col-span-8 space-y-6">
          <section className="bg-[#1a1a1a] rounded-[32px] border border-gray-800/50 overflow-hidden shadow-xl">
            <div className="p-8 border-b border-gray-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-lg font-bold text-white italic tracking-tight">
                Gestión de Líneas de Crédito
              </h3>
              <div className="flex gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Buscar cliente..."
                    className="w-full bg-[#121212] border border-gray-800 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-orange-500/50"
                  />
                </div>
                <button className="p-2 bg-[#121212] border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors">
                  <Filter size={18} />
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-800/50">
              {clients.map((client) => {
                const percentage =
                  (client.usedCredit / client.totalCredit) * 100;
                return (
                  <div
                    key={client.id}
                    className="p-6 hover:bg-orange-500/[0.02] transition-all group"
                  >
                    <div className="flex flex-col xl:flex-row xl:items-center gap-6">
                      {/* Información de Cliente & Tier */}
                      <div className="w-full xl:w-1/3">
                        <div className="flex items-center gap-3 mb-2">
                          <h5 className="font-bold text-white">
                            {client.name}
                          </h5>
                          <span
                            className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter ${
                              client.tier === "Enterprise"
                                ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                : client.tier === "En Riesgo"
                                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                  : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            }`}
                          >
                            {client.tier}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] text-gray-600 font-mono">
                          <span className="flex items-center gap-1">
                            <Activity
                              size={10}
                              className={
                                client.status === "Healthy"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }
                            />
                            Días promedio: {client.avgPayDays}d
                          </span>
                          <span>ID: {client.id}</span>
                        </div>
                      </div>

                      {/* Barra de Progreso de Crédito */}
                      <div className="flex-1">
                        <div className="flex justify-between items-end mb-2">
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            Utilización de Crédito
                          </p>
                          <p className="text-xs font-mono text-gray-400">
                            <span className="text-white font-bold">
                              ${client.usedCredit.toLocaleString()}
                            </span>{" "}
                            / ${client.totalCredit.toLocaleString()}
                          </p>
                        </div>
                        <div className="w-full h-2 bg-gray-900 rounded-full border border-gray-800 overflow-hidden p-[1px]">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              percentage > 85
                                ? "bg-gradient-to-r from-red-600 to-red-400"
                                : percentage > 60
                                  ? "bg-gradient-to-r from-orange-600 to-orange-400"
                                  : "bg-gradient-to-r from-green-600 to-green-400"
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Acciones de Límite */}
                      <div className="flex items-center gap-3 xl:ml-6">
                        <button
                          title="Reducir Crédito"
                          className="p-2.5 bg-[#121212] hover:bg-red-500/10 border border-gray-800 hover:border-red-500/30 rounded-xl text-gray-500 hover:text-red-500 transition-all"
                        >
                          <Minus size={16} />
                        </button>
                        <button
                          title="Aumentar Crédito"
                          className="p-2.5 bg-[#121212] hover:bg-green-500/10 border border-gray-800 hover:border-green-500/30 rounded-xl text-gray-500 hover:text-green-500 transition-all"
                        >
                          <Plus size={16} />
                        </button>
                        <button className="p-2.5 bg-[#121212] hover:bg-gray-800 border border-gray-800 rounded-xl text-gray-500 hover:text-white transition-all">
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 bg-gray-900/20 text-center">
              <button className="text-xs font-bold text-orange-500 hover:text-orange-400 uppercase tracking-widest transition-colors">
                Ver reporte completo de cartera
              </button>
            </div>
          </section>

          {/* Quick Info Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-gray-800/50 flex items-center gap-5">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Wallet size={20} className="text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">
                  Crédito Total Disp.
                </p>
                <p className="text-xl font-bold text-white">
                  $2.4M{" "}
                  <span className="text-[10px] text-green-500 font-normal ml-1">
                    MXN
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-gray-800/50 flex items-center gap-5">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                <TrendingDown size={20} className="text-red-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">
                  Tasa de Morosidad
                </p>
                <p className="text-xl font-bold text-white">
                  3.8%{" "}
                  <span className="text-[10px] text-red-500 font-normal ml-1">
                    +0.2%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
