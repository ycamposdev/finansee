"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Download,
  XCircle,
  Mail,
  Calendar,
  DollarSign,
  FileSpreadsheet,
  Snowflake,
  History,
  Clock,
  X,
  CreditCard,
  Globe,
  Users,
  ChevronRight,
  ShieldAlert,
  FileCheck,
} from "lucide-react";

export default function Facturas() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Mock de datos simulando respuesta de Firestore
  const transactions = [
    {
      id: "fh73_k92L",
      provider: "Amazon Web Services",
      client: "empresa_a@tech.com",
      amount: 4500.0,
      currency: "MXN",
      date: "16 Feb 2024, 10:30 AM",
      status: "Pagado",
    },
    {
      id: "zq91_mP5k",
      provider: "Stripe Inc.",
      client: "billing@startup.io",
      amount: 120.5,
      currency: "USD",
      date: "15 Feb 2024, 04:15 PM",
      status: "Pendiente",
    },
    {
      id: "vN3m_bXz2",
      provider: "Héctor García",
      client: "juan.perez@gmail.com",
      amount: 8500.0,
      currency: "MXN",
      date: "12 Feb 2024, 09:00 AM",
      status: "Vencido",
    },
    {
      id: "kL9p_qW2e",
      provider: "Google Cloud",
      client: "admin@devs.mx",
      amount: 3200.0,
      currency: "USD",
      date: "10 Feb 2024, 11:20 AM",
      status: "Disputado",
    },
  ];

  const handleOpenDetail = (invoice) => {
    setSelectedInvoice(invoice);
    setIsDrawerOpen(true);
  };

  return (
    <div className="text-gray-300">
      {/* 5. Acciones de Control Superior */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            Auditoría de Transacciones
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Monitoreo de flujo Firestore y control de fraude.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all group">
            <FileSpreadsheet
              size={18}
              className="text-green-500 group-hover:scale-110 transition-transform"
            />
            Exportar a Excel
          </button>
        </div>
      </div>

      {/* 3. Sistema de Filtrado Avanzado (Server-side compatible) */}
      <section className="bg-[#1a1a1a] p-6 rounded-[28px] border border-gray-800/50 mb-8 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <label className="text-[10px] uppercase font-bold text-gray-600 ml-1 mb-1 block">
              Buscador Global
            </label>
            <Search
              className="absolute left-3 top-[34px] text-gray-600"
              size={16}
            />
            <input
              type="text"
              placeholder="ID o Email del cliente..."
              className="w-full bg-[#121212] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-700"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-gray-600 ml-1 mb-1 block">
              Rango de Fechas
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                size={16}
              />
              <select className="w-full bg-[#121212] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none cursor-pointer appearance-none text-gray-400">
                <option>Mes Actual (Auditoría)</option>
                <option>Últimos 7 días</option>
                <option>Trimestre anterior</option>
                <option>Personalizado...</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-gray-600 ml-1 mb-1 block">
              Filtro por Rol
            </label>
            <div className="relative">
              <Users
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                size={16}
              />
              <select className="w-full bg-[#121212] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none cursor-pointer appearance-none text-gray-400">
                <option>Todos los actores</option>
                <option>Proveedores (Emisores)</option>
                <option>Clientes (Receptores)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-gray-600 ml-1 mb-1 block">
              Monto (Rango)
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-xs">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full bg-[#121212] border border-gray-800 rounded-xl py-2.5 pl-7 pr-2 text-sm focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
              <span className="text-gray-700">-</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-xs">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full bg-[#121212] border border-gray-800 rounded-xl py-2.5 pl-7 pr-2 text-sm focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grilla de Datos de Alto Rendimiento */}
      <section className="bg-[#1a1a1a] rounded-[28px] border border-gray-800/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] uppercase text-gray-500 tracking-widest bg-gray-900/40">
                <th className="px-6 py-5 font-bold">ID Factura</th>
                <th className="px-6 py-5 font-bold">Proveedor / Emisor</th>
                <th className="px-6 py-5 font-bold">Cliente / Receptor</th>
                <th className="px-6 py-5 font-bold text-center">Estado</th>
                <th className="px-6 py-5 font-bold text-right">
                  Monto y Moneda
                </th>
                <th className="px-6 py-5 font-bold">Fecha Creación</th>
                <th className="px-6 py-5 font-bold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {transactions.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-orange-500/[0.03] transition-all group broder-l-2 cursor-pointer border-none"
                  onClick={() => handleOpenDetail(item)}
                >
                  <td className="px-6 py-5 border-l-2 border-transparent group-hover:border-orange-500 transition-all">
                    <span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 font-bold">
                      {item.id}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-white font-semibold">
                      {item.provider}
                    </div>
                    <div className="text-[10px] text-gray-600 uppercase font-bold">
                      Verified Provider
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-gray-300">{item.client}</div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter ${
                        item.status === "Pagado"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : item.status === "Pendiente"
                            ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                            : item.status === "Vencido"
                              ? "bg-red-500/10 text-red-400 border border-red-500/20"
                              : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-right text-white">
                    $
                    {item.amount.toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                    })}
                    <span className="text-[10px] text-gray-500 font-normal ml-1 tracking-widest">
                      {item.currency}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-xs text-gray-500 font-mono italic">
                    {item.date}
                  </td>
                  <td className="px-6 py-5">
                    <div
                      className="flex justify-center items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        title="Ver Detalle"
                        className="p-2 hover:bg-gray-800 rounded-lg text-gray-500 hover:text-white transition-colors"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        title="Reenviar Recibo"
                        className="p-2 hover:bg-gray-800 rounded-lg text-gray-500 hover:text-white transition-colors"
                      >
                        <Mail size={16} />
                      </button>
                      <button
                        title="Reembolso"
                        className="p-2 hover:bg-red-500/10 rounded-lg text-red-500/50 hover:text-red-500 transition-colors"
                      >
                        <XCircle size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Panel de Detalle de Factura (Side Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-[#141414] shadow-[-20px_0_50px_rgba(0,0,0,0.7)] border-l border-gray-800/50 transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {selectedInvoice && (
          <div className="h-full flex flex-col p-8 overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Expediente de Factura
                </h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
                  Internal Audit Report
                </p>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-full text-gray-500 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Resumen Monetario */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-gray-800 p-8 rounded-[32px] mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <FileCheck className="text-orange-500/10 w-24 h-24 rotate-12" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">
                  Importe Neto
                </span>
                <div className="text-5xl font-black text-white mt-2 mb-4">
                  ${selectedInvoice.amount.toLocaleString()}
                  <span className="text-sm text-orange-500 font-bold ml-2">
                    {selectedInvoice.currency}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Transacción Verificada vía Hash Firestore
                </div>
              </div>
            </div>

            {/* Acciones de Auditoría Premium */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <button className="flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] border border-red-500/20 hover:border-red-500/50 text-red-500 p-4 rounded-2xl transition-all group">
                <Snowflake size={24} className="group-hover:animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Freeze Fraud
                </span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 hover:border-orange-500/50 text-white p-4 rounded-2xl transition-all group">
                <Download
                  size={24}
                  className="group-hover:translate-y-1 transition-transform"
                />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Master PDF
                </span>
              </button>
            </div>

            {/* Timeline de la Transacción */}
            <div className="mb-10 bg-[#0d0d0d] p-6 rounded-2xl border border-gray-800/30">
              <h4 className="text-xs font-bold text-white mb-8 flex items-center gap-2 uppercase tracking-widest">
                <Clock size={16} className="text-orange-500" />
                Timeline del Evento
              </h4>
              <div className="space-y-8 relative ml-4 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[1px] before:bg-gray-800">
                <div className="relative pl-8">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  <p className="text-sm text-white font-bold">
                    Factura Generada
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-1">
                    {selectedInvoice.date}
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  <p className="text-sm text-white font-bold">
                    Email de Cobro Enviado
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 italic italic">
                    Destinatario: {selectedInvoice.client}
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                  <p className="text-sm text-gray-400 font-medium">
                    Intento de Pago #1
                  </p>
                  <p className="text-[10px] text-red-500/70 mt-1 font-mono uppercase tracking-tighter">
                    Error: Card_Declined (Insufficient Funds)
                  </p>
                </div>
              </div>
            </div>

            {/* Metadatos Técnicos */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={14} className="text-gray-600" />
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Huella Digital (Network)
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0d0d0d] p-4 rounded-xl border border-gray-800/50">
                  <p className="text-[10px] text-gray-600 mb-1">IP Origen</p>
                  <p className="text-xs text-gray-400 font-mono">
                    187.162.90.104
                  </p>
                </div>
                <div className="bg-[#0d0d0d] p-4 rounded-xl border border-gray-800/50">
                  <p className="text-[10px] text-gray-600 mb-1">Auth UID</p>
                  <p className="text-xs text-gray-400 font-mono">
                    auth_882j_ql
                  </p>
                </div>
              </div>
            </div>

            {/* Log de Auditoría Interna */}
            <div className="mt-auto pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert size={14} className="text-orange-500" />
                <h4 className="text-[10px] font-bold text-white uppercase tracking-widest italic">
                  Trazabilidad Interna
                </h4>
              </div>
              <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/10">
                <ul className="text-[10px] text-gray-500 space-y-2 leading-relaxed italic">
                  <li>
                    • El Admin{" "}
                    <span className="text-orange-500 font-bold">
                      "Ytalo_Main"
                    </span>{" "}
                    accedió a este registro hace 4 minutos.
                  </li>
                  <li>• Re-intento de cobro programado para: 18 Feb 2024.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay Blur para el Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all animate-in fade-in duration-300"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Estilos para Scrollbar Personalizada */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #141414;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f97316;
        }
      `}</style>
    </div>
  );
}
