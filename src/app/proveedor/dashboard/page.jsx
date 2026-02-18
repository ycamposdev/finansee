"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Plus,
  Upload,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  AlertTriangle,
  ChevronRight,
  FileText,
  TrendingUp,
  Users,
  Wallet,
  MoreVertical,
  Download,
} from "lucide-react";

export default function Dashboard() {
  // Datos mock para la tabla de facturas
  const [recentInvoices] = useState([
    {
      id: "F-9021",
      client: "TechSolutions Inc.",
      amount: 4500.0,
      due: "20 Feb",
      status: "Pendiente",
    },
    {
      id: "F-8812",
      client: "Creative Labs",
      amount: 1250.0,
      due: "15 Feb",
      status: "Pagado",
    },
    {
      id: "F-7765",
      client: "Global Logistics",
      amount: 3100.0,
      due: "12 Feb",
      status: "En Disputa",
    },
    {
      id: "F-5520",
      client: "Nexa Retail",
      amount: 980.0,
      due: "24 Feb",
      status: "Pendiente",
    },
  ]);

  // Estados para badges
  const getStatusStyle = (status) => {
    switch (status) {
      case "Pagado":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Pendiente":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "En Disputa":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className=" text-gray-300 font-sans ">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[0%] right-[0%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      {/* 1. KPIs de Rendimiento Financiero (Top Widgets) */}
      <header className="max-w-7xl mx-auto mb-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
              Panel de Control
            </h2>
            <p className="text-gray-500 mt-2 text-sm italic font-medium">
              Resumen estratégico de recaudación y flujo de caja.
            </p>
          </div>

          {/* 3. Widget de Acceso Rápido */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              label: "Balance por Cobrar",
              value: "$24,500.00",
              trend: "+5.2%",
              up: true,
              icon: <Wallet size={16} />,
            },
            {
              label: "Ingresos del Mes",
              value: "$12,840.50",
              trend: "+12%",
              up: true,
              icon: <TrendingUp size={16} />,
            },
            {
              label: "Tiempo Prom. Pago",
              value: "8.4 Días",
              trend: "-2 días",
              up: true,
              icon: <Clock size={16} />,
            },
            {
              label: "Tasa de Rechazo",
              value: "1.2%",
              trend: "+0.1%",
              up: false,
              icon: <AlertTriangle size={16} />,
            },
          ].map((kpi, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-800/50 p-6 rounded-[28px] shadow-xl hover:border-gray-700 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/5 rounded-xl text-orange-500">
                  {kpi.icon}
                </div>
                <span
                  className={`text-[9px] font-black px-2 py-0.5 rounded ${kpi.up ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
                >
                  {kpi.trend}
                </span>
              </div>
              <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1 italic">
                {kpi.label}
              </p>
              <p className="text-2xl font-black text-white italic tracking-tighter">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 2. Gráfico de Flujo de Recaudación (Main Chart) */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-[#121212] border border-gray-800/50 rounded-[35px] p-8 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-2">
                <BarChart3 size={14} className="text-orange-500" /> Flujo de
                Recaudación
              </h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-[9px] font-black text-gray-500 uppercase">
                    Real
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                  <span className="text-[9px] font-black text-gray-500 uppercase">
                    Proyectado
                  </span>
                </div>
              </div>
            </div>

            {/* Visualización Simplificada de Gráfico SVG */}
            <div className="h-64 w-full relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 200"
                preserveAspectRatio="none"
              >
                {/* Proyectado (Gris) */}
                <path
                  d="M0,150 Q100,140 200,160 T400,130 T600,150 T800,110"
                  fill="none"
                  stroke="#262626"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                {/* Real (Naranja) */}
                <path
                  d="M0,180 Q100,170 200,130 T400,145 T600,90 T800,70"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="4"
                  className="drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[8px] font-black text-gray-700 uppercase tracking-widest pt-4 border-t border-gray-800/30">
                <span>Semana 01</span>
                <span>Semana 02</span>
                <span>Semana 03</span>
                <span>Semana 04</span>
              </div>
            </div>
          </section>

          {/* 4. Tabla de Estado de Facturación Reciente */}
          <section className="bg-[#121212] border border-gray-800/50 rounded-[35px] overflow-hidden shadow-xl">
            <div className="p-8 border-b border-gray-800/30 flex justify-between items-center">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic">
                Facturación Reciente
              </h4>
              <button className="text-[9px] font-black text-orange-500 uppercase tracking-widest hover:underline">
                Ver Reporte Completo
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-800/30">
                    <th className="px-8 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                      Cliente
                    </th>
                    <th className="px-8 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                      ID Factura
                    </th>
                    <th className="px-8 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                      Monto
                    </th>
                    <th className="px-8 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest text-center">
                      Estatus
                    </th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/20">
                  {recentInvoices.map((inv) => (
                    <tr
                      key={inv.id}
                      className="group hover:bg-white/[0.02] transition-all"
                    >
                      <td className="px-8 py-5">
                        <p className="text-xs font-black text-white italic tracking-tight uppercase">
                          {inv.client}
                        </p>
                        <p className="text-[9px] text-gray-600 font-bold uppercase">
                          Vence: {inv.due}
                        </p>
                      </td>
                      <td className="px-8 py-5 text-xs font-mono font-bold text-gray-400">
                        {inv.id}
                      </td>
                      <td className="px-8 py-5 text-sm font-black text-white italic">
                        ${inv.amount.toLocaleString()}
                      </td>
                      <td className="px-8 py-5">
                        <div
                          className={`mx-auto w-fit px-3 py-1 rounded-full text-[8px] font-black border uppercase tracking-widest ${getStatusStyle(inv.status)}`}
                        >
                          {inv.status}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="p-2 text-gray-600 hover:text-white transition-colors">
                          <Download size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* 5. Alertas de Vencimiento Próximo (Side Panel) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#121212] border border-gray-800/50 rounded-[35px] p-8 shadow-2xl">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic mb-8 flex items-center gap-2 text-red-500">
              <AlertTriangle size={16} /> Alertas Críticas
            </h4>

            <div className="space-y-4">
              {[
                {
                  title: "Factura #F-500 vencida",
                  desc: "TechSolutions no ha procesado el pago.",
                  time: "Hace 2h",
                  urgent: true,
                },
                {
                  title: "Disputa abierta",
                  desc: "Global Logistics reportó monto duplicado.",
                  time: "Hace 5h",
                  urgent: false,
                },
                {
                  title: "Recordatorio de Cobro",
                  desc: "Nexa Retail vence en 24 horas.",
                  time: "Programado",
                  urgent: false,
                },
              ].map((alert, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-[22px] border ${alert.urgent ? "bg-red-500/5 border-red-500/20" : "bg-white/5 border-white/5"} transition-all hover:translate-x-1 cursor-pointer`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <p
                      className={`text-[10px] font-black uppercase tracking-tight italic ${alert.urgent ? "text-red-400" : "text-gray-300"}`}
                    >
                      {alert.title}
                    </p>
                    <span className="text-[8px] font-bold text-gray-600 uppercase">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-500 font-bold leading-relaxed lowercase italic tracking-tight">
                    {alert.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Gestionar todas las Alertas <ChevronRight size={14} />
            </button>
          </div>

          {/* Widget de Salud del Cliente */}
          <div className="p-8 bg-orange-500/5 rounded-[30px] border border-orange-500/10 relative overflow-hidden group">
            <Users
              size={40}
              className="absolute -right-2 -bottom-2 text-orange-500/10 group-hover:scale-110 transition-transform"
            />
            <h6 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3 italic">
              Retención de Clientes
            </h6>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed italic mb-4">
              El 94% de tus clientes liquidan sus facturas antes de la fecha de
              vencimiento.
            </p>
            <div className="h-1.5 w-full bg-orange-500/10 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[94%]"></div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer de Estado de Sistema */}
      <footer className="max-w-7xl mx-auto mt-12 flex items-center justify-between p-6 bg-black/40 border border-gray-800/40 rounded-[24px]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest">
            Motor de conciliación activo
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FileText size={12} className="text-gray-700" />
            <span className="text-[9px] font-bold text-gray-600 uppercase">
              Exportar logs (.json)
            </span>
          </div>
          <p className="text-[9px] text-gray-700 font-bold uppercase tracking-tighter">
            Sincronizado: Justo ahora
          </p>
        </div>
      </footer>
    </div>
  );
}
