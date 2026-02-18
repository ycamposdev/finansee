"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Download,
  Mail,
  AlertTriangle,
  Calendar,
  Clock,
  X,
  FileText,
  History,
  TrendingUp,
  ChevronRight,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  CheckCircle2,
  Wallet,
} from "lucide-react";

export default function RecibosEmitidos() {
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "F-9021",
      client: "TechSolutions Inc.",
      date: "10 Feb",
      amount: 45000.0,
      status: "Pagado",
      priority: "low",
    },
    {
      id: "F-8812",
      client: "Creative Labs",
      date: "15 Feb",
      amount: 12500.0,
      status: "Pendiente",
      priority: "medium",
    },
    {
      id: "F-7765",
      client: "Global Logistics",
      date: "20 Jan",
      amount: 8900.0,
      status: "Vencido",
      priority: "high",
    },
    {
      id: "F-5520",
      client: "Nexa Retail",
      date: "17 Feb",
      amount: 22000.0,
      status: "En Disputa",
      priority: "medium",
    },
  ];

  const filteredInvoices = useMemo(() => {
    return invoices.filter((inv) => {
      const matchesSearch =
        inv.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "Todos" || inv.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, filterStatus]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pagado":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Pendiente":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "Vencido":
        return "bg-red-500/10 text-red-400 border-red-500/20 animate-pulse";
      case "En Disputa":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className=" text-gray-300 font-sans ">
      {/* Efectos de Brillo (Glows) del Dashboard anterior */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[0%] right-[0%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header - Estilo Dashboard */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
              Gestión de{" "}
              <span className="text-orange-500 not-italic">Recibos</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm italic font-medium">
              Administración y trazabilidad de comprobantes emitidos.
            </p>
          </div>

          <div className="flex gap-3 bg-[#121212] p-1.5 rounded-2xl border border-gray-800/50 shadow-xl">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
              <Calendar size={14} className="text-orange-500" />
              <span className="text-[10px] font-black uppercase text-gray-400">
                Feb 2026
              </span>
            </div>
          </div>
        </header>

        {/* 2. Mini-KPIs (Resumen de Flujo Mensual) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Total Emitido",
              value: "$88,400.00",
              icon: <FileText size={16} />,
              color: "orange",
            },
            {
              label: "Total Recaudado",
              value: "$45,000.00",
              icon: <TrendingUp size={16} />,
              color: "green",
            },
            {
              label: "Cuentas por Cobrar",
              value: "$43,400.00",
              icon: <Wallet size={16} />,
              color: "blue",
            },
          ].map((kpi, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-800/50 p-6 rounded-[28px] shadow-xl group hover:border-gray-700 transition-all relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`p-2 bg-white/5 rounded-xl text-white/40 group-hover:text-orange-500 transition-colors`}
                >
                  {kpi.icon}
                </div>
                <ArrowUpRight size={14} className="text-gray-700" />
              </div>
              <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1 italic">
                {kpi.label}
              </p>
              <p className="text-2xl font-black text-white italic tracking-tighter">
                {kpi.value}
              </p>
            </div>
          ))}
        </section>

        {/* 1. Barra de Filtros Inteligente */}
        <section className="bg-[#121212] border border-gray-800/50 rounded-[30px] p-6 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="flex gap-2 bg-black/20 p-1.5 rounded-2xl w-full lg:w-auto overflow-x-auto">
              {["Todos", "Pagados", "Pendientes", "Vencidos", "En Disputa"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                      filterStatus === status
                        ? "bg-orange-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {status}
                  </button>
                ),
              )}
            </div>

            <div className="relative w-full lg:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700"
                size={16}
              />
              <input
                type="text"
                placeholder="BUSCAR FOLIO O CLIENTE..."
                className="w-full bg-white/[0.03] border border-gray-800/50 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-bold text-white focus:outline-none focus:border-orange-500/30 transition-all uppercase tracking-widest"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* 3. Tabla de Gestión de Comprobantes */}
        <section className="bg-[#121212] border border-gray-800/50 rounded-[35px] overflow-hidden shadow-2xl mb-12">
          <div className="p-8 border-b border-gray-800/30">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic flex items-center gap-2">
              <Filter size={14} className="text-orange-500" /> Registro de
              Transacciones
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800/30">
                  <th className="px-10 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    Identificación
                  </th>
                  <th className="px-10 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    Receptor
                  </th>
                  <th className="px-10 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    Monto Operación
                  </th>
                  <th className="px-10 py-5 text-[9px] font-black text-gray-600 uppercase tracking-widest text-center">
                    Estatus
                  </th>
                  <th className="px-10 py-5 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/20">
                {filteredInvoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="group hover:bg-white/[0.02] transition-all cursor-pointer"
                    onClick={() => setSelectedInvoice(inv)}
                  >
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        {inv.priority === "high" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                        )}
                        <div>
                          <p className="text-xs font-black text-white italic tracking-tight uppercase">
                            {inv.id}
                          </p>
                          <p className="text-[9px] text-gray-600 font-bold uppercase">
                            Emitido: {inv.date}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">
                        {inv.client}
                      </p>
                    </td>
                    <td className="px-10 py-6">
                      <p className="text-sm font-black text-white italic">
                        ${inv.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-10 py-6">
                      <div
                        className={`mx-auto w-fit px-4 py-1.5 rounded-full text-[8px] font-black border uppercase tracking-widest ${getStatusStyle(inv.status)}`}
                      >
                        {inv.status}
                      </div>
                    </td>
                    <td
                      className="px-10 py-6 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-500 hover:text-orange-500 transition-all">
                          <Download size={14} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-orange-500 transition-all">
                          <Mail size={14} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-white transition-all">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer de Estado (Consistente con Dashboard) */}
        <footer className="flex items-center justify-between p-6 bg-black/40 border border-gray-800/40 rounded-[24px]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest">
              Nodo de cobranza activo
            </p>
          </div>
          <p className="text-[9px] text-gray-700 font-bold uppercase italic tracking-tighter">
            QuickPay Terminal v4.0 // Sincronizado
          </p>
        </footer>
      </div>

      {/* 4. Vista de Detalle (Slide-over / Panel Lateral) */}
      {selectedInvoice && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity"
            onClick={() => setSelectedInvoice(null)}
          />
          <aside className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0a] border-l border-gray-800/50 z-50 p-10 flex flex-col animate-in slide-in-from-right duration-500 shadow-[-50px_0_100px_rgba(0,0,0,0.8)] rounded-l-[40px]">
            <header className="flex justify-between items-start mb-12">
              <div>
                <div
                  className={`text-[8px] font-black px-2 py-0.5 rounded border mb-2 w-fit uppercase tracking-widest ${getStatusStyle(selectedInvoice.status)}`}
                >
                  {selectedInvoice.status}
                </div>
                <h2 className="text-3xl font-black italic text-white tracking-tighter uppercase">
                  {selectedInvoice.id}
                </h2>
                <p className="text-gray-600 text-[10px] font-bold mt-1 uppercase">
                  Folio Fiscal Validado
                </p>
              </div>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto space-y-12 pr-2 custom-scrollbar">
              {/* Card de Monto */}
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent p-8 rounded-[30px] border border-white/5 shadow-inner">
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest italic mb-4">
                  Monto total a liquidar
                </p>
                <h3 className="text-5xl font-black italic tracking-tighter text-white">
                  ${selectedInvoice.amount.toLocaleString()}
                </h3>
                <div className="flex items-center gap-2 mt-4 text-[9px] font-bold text-gray-500 uppercase italic">
                  <CheckCircle2 size={12} className="text-orange-500" />{" "}
                  Verificado por QuickPay Terminal
                </div>
              </div>

              {/* Items Desglosados */}
              <section>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3 italic">
                  <FileText size={14} className="text-orange-500" /> Desglose de
                  Operación
                </h4>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4 border-b border-gray-800/30 group"
                    >
                      <div>
                        <p className="text-xs font-black text-gray-300 uppercase italic tracking-tight">
                          Servicios de Soporte Enterprise
                        </p>
                        <p className="text-[9px] text-gray-600 font-mono mt-1">
                          REF: SUP-220-0{i}
                        </p>
                      </div>
                      <p className="text-xs font-black text-white italic">
                        ${(selectedInvoice.amount / 2).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Trazabilidad / Historial */}
              <section>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3 italic">
                  <History size={14} className="text-orange-500" /> Trazabilidad
                  de Eventos
                </h4>
                <div className="space-y-8 relative ml-3 border-l border-gray-800/50 pl-6">
                  {[
                    { date: "10 Feb", event: "Recibo emitido y enviado" },
                    { date: "11 Feb", event: "Cliente abrió el comprobante" },
                    {
                      date: "15 Feb",
                      event: "Recordatorio programado enviado",
                    },
                  ].map((e, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-orange-500/20 border border-orange-500 transition-all group-hover:scale-150" />
                      <p className="text-[8px] font-black text-gray-600 uppercase mb-1 tracking-tighter italic">
                        {e.date} — 09:00 AM
                      </p>
                      <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase italic">
                        {e.event}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-800/50 grid grid-cols-2 gap-4">
              <button className="bg-white text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all flex items-center justify-center gap-2 shadow-lg">
                <Download size={14} /> Descargar
              </button>
              <button className="border border-white/10 text-gray-400 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <Mail size={14} /> Re-enviar
              </button>
            </footer>
          </aside>
        </>
      )}
    </div>
  );
}
