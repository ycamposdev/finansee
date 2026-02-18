"use client";

import React, { useState, useMemo } from "react";
import {
  CreditCard,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Plus,
  AlertCircle,
  ChevronRight,
  FileText,
  Building2,
  Wallet,
  Calendar,
  CreditCard as CardIcon,
} from "lucide-react";

export default function RealizarPago() {
  // 1. Datos Mock de Facturas Pendientes
  const [pendingInvoices, setPendingInvoices] = useState([
    {
      id: "FAC-001",
      provider: "Amazon Web Services",
      amount: 1250.0,
      dueDate: "2024-05-15",
      status: "Pending",
    },
    {
      id: "FAC-042",
      provider: "Google Cloud Platform",
      amount: 840.5,
      dueDate: "2024-05-10",
      status: "Urgent",
    },
    {
      id: "FAC-099",
      provider: "Adobe Creative Cloud",
      amount: 55.99,
      dueDate: "2024-06-01",
      status: "Upcoming",
    },
    {
      id: "FAC-105",
      provider: "Slack Technologies",
      amount: 320.0,
      dueDate: "2024-05-20",
      status: "Pending",
    },
  ]);

  // Estado para las facturas seleccionadas
  const [selectedInvoices, setSelectedInvoices] = useState([]);

  // 3. Métodos de Pago Guardados
  const [paymentMethods] = useState([
    { id: "pm_1", type: "Visa", last4: "4242", expiry: "12/26", brand: "visa" },
    {
      id: "pm_2",
      type: "Mastercard",
      last4: "8890",
      expiry: "10/25",
      brand: "mastercard",
    },
  ]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("pm_1");

  // Lógica de selección de facturas
  const toggleInvoice = (id) => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // 2. Cálculos del Resumen (Checkout Logic)
  const subtotal = useMemo(() => {
    return pendingInvoices
      .filter((inv) => selectedInvoices.includes(inv.id))
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [selectedInvoices, pendingInvoices]);

  const serviceFee = subtotal > 0 ? 4.99 : 0;
  const totalFinal = subtotal + serviceFee;

  return (
    <div className="text-gray-300 font-sans ">
      {/* Cabecera */}
      <header className="mb-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
          Liquidación de Facturas
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Selecciona las facturas pendientes para procesar tu pago de forma
          segura.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
        {/* COLUMNA IZQUIERDA: Facturas y Métodos de Pago */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. Selector de Facturas Pendientes */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic flex items-center gap-2">
                <FileText size={14} className="text-orange-500" />
                Facturas Pendientes ({pendingInvoices.length})
              </h4>
              <button
                onClick={() =>
                  setSelectedInvoices(pendingInvoices.map((i) => i.id))
                }
                className="text-[10px] font-bold text-orange-500 hover:text-orange-400 uppercase tracking-widest transition-colors"
              >
                Seleccionar Todas
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pendingInvoices.map((inv) => (
                <div
                  key={inv.id}
                  onClick={() => toggleInvoice(inv.id)}
                  className={`relative group cursor-pointer transition-all duration-300 rounded-[24px] border p-5 ${
                    selectedInvoices.includes(inv.id)
                      ? "bg-orange-500/[0.03] border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.05)]"
                      : "bg-[#121212] border-gray-800/50 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Checkbox personalizado */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedInvoices.includes(inv.id)
                          ? "bg-orange-500 border-orange-500"
                          : "border-gray-700 group-hover:border-gray-500"
                      }`}
                    >
                      {selectedInvoices.includes(inv.id) && (
                        <CheckCircle2
                          size={16}
                          className="text-black stroke-[3px]"
                        />
                      )}
                    </div>

                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">
                          Factura
                        </p>
                        <p className="text-sm font-bold text-white tracking-tight">
                          {inv.id}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">
                          Proveedor
                        </p>
                        <p className="text-sm font-bold text-gray-300 flex items-center gap-1.5 uppercase tracking-tighter italic">
                          <Building2 size={12} className="text-gray-600" />
                          {inv.provider}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">
                          Vencimiento
                        </p>
                        <p
                          className={`text-xs font-mono font-bold ${inv.status === "Urgent" ? "text-red-500" : "text-gray-500"}`}
                        >
                          {inv.dueDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">
                          Monto
                        </p>
                        <p className="text-lg font-black text-white italic">
                          ${inv.amount.toLocaleString("en-US")}
                        </p>
                      </div>
                    </div>
                  </div>
                  {inv.status === "Urgent" && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-red-600 text-[8px] font-black text-white px-2 py-0.5 rounded uppercase tracking-widest shadow-lg shadow-red-900/20">
                      Vencida
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 3. Métodos de Pago Guardados */}
          <section className="bg-[#121212] p-8 rounded-[32px] border border-gray-800/50 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-2">
                <CreditCard size={16} className="text-orange-500" />
                Método de Pago
              </h4>
              <button className="flex items-center gap-2 text-[10px] font-black text-orange-500 hover:text-orange-400 uppercase tracking-widest transition-all">
                <Plus size={14} /> Agregar Nuevo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedPaymentMethod === method.id
                      ? "bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] scale-[1.02]"
                      : "bg-[#0a0a0a] border-gray-800 text-gray-400 hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${selectedPaymentMethod === method.id ? "bg-black/5" : "bg-white/5"}`}
                    >
                      <CardIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-tighter tracking-widest">
                        •••• {method.last4}
                      </p>
                      <p
                        className={`text-[9px] font-bold uppercase ${selectedPaymentMethod === method.id ? "text-gray-700" : "text-gray-600"}`}
                      >
                        Expira {method.expiry}
                      </p>
                    </div>
                  </div>
                  {selectedPaymentMethod === method.id && (
                    <CheckCircle2 size={18} />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: 2. Resumen del Checkout (Sticky) */}
        <aside className="lg:col-span-4 sticky top-10">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[35px] border border-gray-800/50 p-8 shadow-2xl relative overflow-hidden">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 italic flex items-center gap-2">
              <Wallet size={16} className="text-orange-500" />
              Resumen de Operación
            </h4>

            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                  Subtotal ({selectedInvoices.length} Fac.)
                </span>
                <span className="text-sm font-mono text-white">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest italic">
                  Cargo de Servicio
                </span>
                <span className="text-sm font-mono text-white">
                  ${serviceFee.toLocaleString()}
                </span>
              </div>

              <div className="pt-6 border-t border-gray-800/50 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-orange-500 font-black uppercase tracking-[0.2em] mb-1 italic underline underline-offset-4">
                    Total a Pagar
                  </p>
                  <p className="text-3xl font-black text-white italic tracking-tighter">
                    ${totalFinal.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-gray-600 font-bold uppercase">
                    Divisa
                  </p>
                  <p className="text-xs font-black text-gray-400">USD</p>
                </div>
              </div>
            </div>

            {/* 4. Garantía de Seguridad */}
            <div className="space-y-4">
              <button
                disabled={selectedInvoices.length === 0}
                className={`w-full py-5 rounded-[20px] font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl flex items-center justify-center gap-3 ${
                  selectedInvoices.length > 0
                    ? "bg-orange-500 text-black hover:bg-orange-400 hover:scale-[1.02] active:scale-95"
                    : "bg-gray-800 text-gray-600 cursor-not-allowed"
                }`}
              >
                {selectedInvoices.length > 0 ? (
                  <>
                    Confirmar y Pagar <ChevronRight size={16} />
                  </>
                ) : (
                  "Seleccione Facturas"
                )}
              </button>

              <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-800/30">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-green-500/50" />
                    Pago Encriptado
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    <Lock size={12} className="text-green-500/50" />
                    SSL Secure
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-30 grayscale">
                  <span className="text-[10px] font-black text-gray-400">
                    POWERED BY
                  </span>
                  <div className="h-4 w-12 bg-white rounded-sm"></div>{" "}
                  {/* Placeholder para logo Stripe */}
                </div>
              </div>
            </div>

            {/* Decoración fondo */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
          </div>

          {/* Info Adicional */}
          <div className="mt-6 p-6 bg-orange-500/5 rounded-[24px] border border-orange-500/10 flex gap-4">
            <AlertCircle size={20} className="text-orange-500 shrink-0" />
            <p className="text-[10px] text-orange-500/80 leading-relaxed font-bold uppercase tracking-tight">
              Las facturas seleccionadas serán marcadas como "En Proceso"
              inmediatamente. El tiempo de acreditación depende de tu banco.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
