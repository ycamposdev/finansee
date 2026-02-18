"use client";

import React, { useState } from "react";
import {
  History,
  Download,
  Eye,
  Mail,
  Filter,
  ChevronRight,
  CheckCircle2,
  Clock,
  XCircle,
  CreditCard,
  Calendar,
  ArrowUpRight,
  TrendingUp,
  Search,
  FileText,
} from "lucide-react";

export default function MisPagos() {
  // Estado para los filtros temporales
  const [activeFilter, setActiveFilter] = useState("Este mes");

  // Datos mock del historial de pagos
  const [paymentHistory] = useState([
    {
      id: "PAY-8821",
      provider: "Amazon Web Services",
      amount: 1250.0,
      date: "24 May, 2024",
      method: "Visa •••• 4242",
      status: "Completado",
    },
    {
      id: "PAY-7712",
      provider: "Google Cloud Platform",
      amount: 840.5,
      date: "22 May, 2024",
      method: "Transferencia",
      status: "Procesando",
    },
    {
      id: "PAY-6605",
      provider: "Adobe Creative Cloud",
      amount: 55.99,
      date: "18 May, 2024",
      method: "Visa •••• 4242",
      status: "Completado",
    },
    {
      id: "PAY-5590",
      provider: "Slack Technologies",
      amount: 320.0,
      date: "15 May, 2024",
      method: "Mastercard •••• 8890",
      status: "Fallido",
    },
    {
      id: "PAY-4432",
      provider: "DigitalOcean Inc",
      amount: 120.0,
      date: "10 May, 2024",
      method: "Visa •••• 4242",
      status: "Completado",
    },
  ]);

  // Estilos para los Badges de Estado
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completado":
        return (
          <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
            <CheckCircle2 size={12} /> Completado
          </span>
        );
      case "Procesando":
        return (
          <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
            <Clock size={12} className="animate-pulse" /> Procesando
          </span>
        );
      case "Fallido":
        return (
          <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
            <XCircle size={12} /> Fallido
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-gray-300 font-sans ">
      {/* Decoración de fondo ambiental */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>

      {/* Cabecera */}
      <header className="mb-12 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
            Historial de Egresos
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md italic">
            Consulta y descarga los comprobantes de tus transacciones realizadas
            y monitorea el estado de tus pagos.
          </p>
        </div>

        {/* 4. Resumen de Gastos (Widget de Analytics) */}
        <div className="flex gap-4 w-full md:w-auto">
          <div className="bg-[#121212] border border-gray-800/50 p-5 rounded-[24px] flex-1 md:w-56 shadow-xl">
            <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-2 italic">
              Total Pagado (Mayo)
            </p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-black text-white italic tracking-tighter">
                $2,146.49
              </p>
              <span className="text-[10px] text-green-500 flex items-center gap-1 font-bold mb-1">
                <TrendingUp size={12} /> +12%
              </span>
            </div>
          </div>
          <div className="bg-orange-500 border border-orange-400 p-5 rounded-[24px] flex-1 md:w-56 shadow-2xl shadow-orange-500/10 group cursor-pointer hover:scale-[1.02] transition-transform">
            <p className="text-[9px] text-black font-black uppercase tracking-widest mb-2 italic opacity-70">
              Próximo Pago
            </p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-black text-black italic tracking-tighter">
                01 JUN
              </p>
              <ArrowUpRight
                size={20}
                className="text-black mb-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto space-y-8">
        {/* Barra de Herramientas e Historial */}
        <section className="bg-[#121212] rounded-[35px] border border-gray-800/50 overflow-hidden shadow-2xl">
          {/* Filtros Rápidos y Búsqueda */}
          <div className="p-8 border-b border-gray-800/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex bg-black/40 p-1 rounded-2xl border border-gray-800/50">
              {["Este mes", "Mes pasado", "Año actual"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter === filter
                      ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20"
                      : "text-gray-600 hover:text-gray-400"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search
                size={14}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
              />
              <input
                type="text"
                placeholder="Buscar por ID o Proveedor..."
                className="w-full bg-black/40 border border-gray-800/60 rounded-2xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-700 font-bold tracking-tight"
              />
            </div>
          </div>

          {/* 1. Historial Cronológico (Timeline de Egresos) */}
          <div className="relative">
            {/* Línea vertical del Timeline */}
            <div className="absolute left-[45px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/20 via-gray-800/20 to-transparent hidden md:block"></div>

            <div className="divide-y divide-gray-800/20">
              {paymentHistory.map((item, index) => (
                <div
                  key={item.id}
                  className="p-8 hover:bg-orange-500/[0.02] transition-all group relative"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                    {/* Indicador de Punto en el Timeline */}
                    <div className="hidden md:flex items-center justify-center relative z-10">
                      <div
                        className={`w-3 h-3 rounded-full border-2 bg-[#121212] ${
                          item.status === "Completado"
                            ? "border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                            : item.status === "Procesando"
                              ? "border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                              : "border-red-500"
                        }`}
                      ></div>
                    </div>

                    {/* Fecha y Método */}
                    <div className="w-full md:w-32">
                      <p className="text-xs font-black text-white italic tracking-tighter mb-1 uppercase">
                        {item.date}
                      </p>
                      <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <CreditCard size={12} className="text-gray-700" />
                        {item.method}
                      </p>
                    </div>

                    {/* 2. Estatus y Proveedor */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h5 className="font-bold text-lg text-gray-200 group-hover:text-white transition-colors tracking-tight italic">
                          {item.provider}
                        </h5>
                        {getStatusBadge(item.status)}
                      </div>
                      <p className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">
                        Transacción ID: {item.id}
                      </p>
                    </div>

                    {/* Monto */}
                    <div className="text-left md:text-right">
                      <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1 italic">
                        Monto Pagado
                      </p>
                      <p className="text-xl font-black text-white italic tracking-tighter">
                        $
                        {item.amount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    {/* 3. Descarga de Comprobantes (Acciones) */}
                    <div className="flex items-center gap-2 md:ml-6">
                      <button
                        title="Vista Rápida"
                        className="p-3 bg-black/40 border border-gray-800/60 rounded-2xl text-gray-600 hover:text-white hover:border-gray-600 transition-all transform active:scale-95"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        title="Descargar PDF"
                        className="p-3 bg-black/40 border border-gray-800/60 rounded-2xl text-gray-600 hover:text-orange-500 hover:border-orange-500/30 transition-all transform active:scale-95"
                      >
                        <Download size={18} />
                      </button>
                      <button
                        title="Enviar por Email"
                        className="p-3 bg-black/40 border border-gray-800/60 rounded-2xl text-gray-600 hover:text-blue-400 hover:border-blue-400/30 transition-all transform active:scale-95"
                      >
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer del Historial */}
          <div className="p-10 bg-black/30 text-center border-t border-gray-800/30">
            <button className="text-[10px] font-black text-gray-500 hover:text-orange-500 uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 mx-auto group">
              <History
                size={16}
                className="text-orange-500 group-hover:rotate-180 transition-transform duration-700"
              />
              Cargar transacciones anteriores
            </button>
          </div>
        </section>

        {/* Sección de Soporte y Certificación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
          <div className="md:col-span-2 bg-gradient-to-r from-blue-500/5 to-transparent p-8 rounded-[30px] border border-blue-500/10 flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/10">
              <FileText size={24} className="text-blue-400" />
            </div>
            <div>
              <h6 className="text-xs font-black text-white uppercase tracking-widest mb-1 italic">
                ¿Necesitas un reporte fiscal?
              </h6>
              <p className="text-[10px] text-gray-500 font-bold leading-relaxed max-w-sm">
                Genera una sábana de movimientos anual lista para procesos
                contables en formato .XLS o .CSV.
              </p>
            </div>
            <button className="ml-auto p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="bg-[#121212] p-8 rounded-[30px] border border-gray-800/40 flex flex-col justify-center items-center text-center space-y-4 shadow-xl">
            <div className="p-3 bg-green-500/10 rounded-full border border-green-500/20">
              <CheckCircle2 size={24} className="text-green-500" />
            </div>
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
              Todos los pagos certificados por el procesador bancario.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
