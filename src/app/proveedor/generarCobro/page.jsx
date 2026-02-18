"use client";

import React, { useState, useMemo } from "react";
import {
  Plus,
  Trash2,
  Search,
  Calendar as CalendarIcon,
  Upload,
  FileText,
  ChevronRight,
  Building2,
  DollarSign,
  AlertCircle,
  X,
  Check,
} from "lucide-react";

export default function GenerarCobro() {
  // 1. Estado para el Selector de Cliente (Autocomplete)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const clients = [
    { id: 1, name: "TechSolutions Inc.", logo: "TS", color: "bg-blue-500" },
    { id: 2, name: "Creative Labs", logo: "CL", color: "bg-purple-500" },
    { id: 3, name: "Global Logistics", logo: "GL", color: "bg-emerald-500" },
    { id: 4, name: "Nexa Retail", logo: "NR", color: "bg-orange-500" },
  ];

  const filteredClients = useMemo(
    () =>
      clients.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  // 2. Estado para Detalle de Conceptos (Tabla Dinámica)
  const [items, setItems] = useState([
    { id: Date.now(), description: "", quantity: 1, price: 0 },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), description: "", quantity: 1, price: 0 },
    ]);
  };

  const removeItem = (id) => {
    if (items.length > 1) setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, field, value) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  // Cálculos automáticos
  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  const tax = subtotal * 0.16; // IVA 16%
  const total = subtotal + tax;

  return (
    <div className="text-gray-300 font-sans">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>

      <header className="max-w-5xl mx-auto mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
            Crear Solicitud
          </h2>
          <p className="text-gray-500 mt-2 text-sm italic font-medium">
            Completa los detalles para emitir un nuevo requerimiento de pago.
          </p>
        </div>
        <button className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-[0.2em] transition-all flex items-center gap-2">
          <X size={14} /> Cancelar Borrador
        </button>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
        {/* LADO IZQUIERDO: Formulario Principal */}
        <div className="lg:col-span-8 space-y-8">
          {/* 1. Selector de Cliente (Autocomplete) */}
          <section className="bg-[#121212] border border-gray-800/50 rounded-[30px] p-8 shadow-xl">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic mb-6 flex items-center gap-2 text-orange-500">
              <Building2 size={14} /> Información del Cliente
            </h4>

            <div className="relative">
              {!selectedClient ? (
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Escribe el nombre del cliente..."
                    className="w-full bg-black/40 border border-gray-800/60 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-orange-500/50 transition-all"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                  />

                  {showSuggestions && searchTerm && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
                      {filteredClients.map((client) => (
                        <button
                          key={client.id}
                          onClick={() => {
                            setSelectedClient(client);
                            setShowSuggestions(false);
                          }}
                          className="w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-colors border-b border-gray-800/50 last:border-none"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg ${client.color} flex items-center justify-center text-[10px] font-black text-white`}
                          >
                            {client.logo}
                          </div>
                          <span className="text-sm font-bold text-gray-300">
                            {client.name}
                          </span>
                        </button>
                      ))}
                      {filteredClients.length === 0 && (
                        <div className="p-4 text-xs text-gray-500 italic">
                          No se encontraron clientes.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-between items-center p-4 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${selectedClient.color} flex items-center justify-center text-xs font-black text-white shadow-lg`}
                    >
                      {selectedClient.logo}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white italic">
                        {selectedClient.name}
                      </p>
                      <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                        Cliente Seleccionado
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedClient(null);
                      setSearchTerm("");
                    }}
                    className="p-2 hover:bg-white/5 rounded-lg text-gray-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* 2. Detalle de Conceptos (Tabla Dinámica) */}
          <section className="bg-[#121212] border border-gray-800/50 rounded-[30px] p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-2 text-orange-500">
                <FileText size={14} /> Conceptos del Servicio
              </h4>
              <button
                onClick={addItem}
                className="text-[9px] font-black text-orange-500 uppercase tracking-widest flex items-center gap-2 hover:bg-orange-500/10 px-3 py-1.5 rounded-lg transition-all"
              >
                <Plus size={14} /> Añadir Fila
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-4 items-end"
                >
                  <div className="col-span-6">
                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1 ml-2">
                      Descripción
                    </p>
                    <input
                      type="text"
                      placeholder="Ej. Desarrollo de Software"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(item.id, "description", e.target.value)
                      }
                      className="w-full bg-black/40 border border-gray-800/60 rounded-xl p-3 text-xs font-bold text-white focus:outline-none focus:border-orange-500/30"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1 ml-2">
                      Cant.
                    </p>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "quantity",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      className="w-full bg-black/40 border border-gray-800/60 rounded-xl p-3 text-xs font-bold text-white focus:outline-none focus:border-orange-500/30"
                    />
                  </div>
                  <div className="col-span-3">
                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1 ml-2">
                      P. Unitario
                    </p>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
                        $
                      </span>
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "price",
                            parseFloat(e.target.value) || 0,
                          )
                        }
                        className="w-full bg-black/40 border border-gray-800/60 rounded-xl p-3 pl-6 text-xs font-bold text-white focus:outline-none focus:border-orange-500/30"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center pb-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-700 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Totales */}
            <div className="mt-8 pt-8 border-t border-gray-800/50 flex flex-col items-end space-y-2">
              <div className="flex justify-between w-full max-w-[200px] text-[10px] font-bold text-gray-500 uppercase">
                <span>Subtotal:</span>
                <span>
                  $
                  {subtotal.toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex justify-between w-full max-w-[200px] text-[10px] font-bold text-gray-500 uppercase">
                <span>IVA (16%):</span>
                <span>
                  ${tax.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between w-full max-w-[200px] text-lg font-black text-white italic pt-2 border-t border-gray-800/30">
                <span>Total:</span>
                <span className="text-orange-500">
                  ${total.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* LADO DERECHO: Configuración y Archivos */}
        <aside className="lg:col-span-4 space-y-8">
          {/* 4. Configuración de Pago */}
          <section className="bg-[#121212] border border-gray-800/50 rounded-[30px] p-8 shadow-xl">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic mb-6 flex items-center gap-2 text-orange-500">
              <CalendarIcon size={14} /> Ajustes de Pago
            </h4>

            <div className="space-y-6">
              <div>
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2 italic">
                  Fecha de Vencimiento
                </p>
                <div className="relative">
                  <CalendarIcon
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                    size={16}
                  />
                  <input
                    type="date"
                    className="w-full bg-black/40 border border-gray-800/60 rounded-xl py-3 pl-12 pr-4 text-xs font-bold text-white focus:outline-none focus:border-orange-500/50"
                  />
                </div>
              </div>

              <div>
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2 italic">
                  Método Preferido
                </p>
                <select className="w-full bg-black/40 border border-gray-800/60 rounded-xl p-3 text-xs font-bold text-white focus:outline-none appearance-none cursor-pointer">
                  <option>Transferencia (SPEI)</option>
                  <option>Depósito Bancario</option>
                  <option>Efectivo / Cheque</option>
                </select>
              </div>

              <div>
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2 italic">
                  Instrucciones Especiales
                </p>
                <textarea
                  placeholder="Ej. Referencia de proyecto A-10..."
                  className="w-full bg-black/40 border border-gray-800/60 rounded-xl p-4 text-xs font-bold text-white focus:outline-none focus:border-orange-500/50 min-h-[100px] resize-none placeholder:text-gray-800"
                />
              </div>
            </div>
          </section>

          {/* 3. Carga de Documentos de Soporte (Drag & Drop) */}
          <section className="bg-[#121212] border border-gray-800/50 rounded-[30px] p-8 shadow-xl">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic mb-6 flex items-center gap-2 text-orange-500">
              <Upload size={14} /> Soporte Documental
            </h4>

            <div className="border-2 border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-orange-500/30 transition-all cursor-pointer bg-black/20">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload
                  size={20}
                  className="text-gray-600 group-hover:text-orange-500"
                />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-center">
                Arrastra PDF, XML o fotos <br />{" "}
                <span className="text-gray-700 font-bold lowercase italic text-[8px]">
                  (Máx. 10MB)
                </span>
              </p>
            </div>

            <div className="mt-4 p-3 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3">
              <FileText size={16} className="text-gray-700" />
              <div className="flex-1 overflow-hidden">
                <p className="text-[9px] font-bold text-gray-500 truncate uppercase tracking-tighter italic">
                  orden_compra_772.pdf
                </p>
                <p className="text-[7px] text-gray-700 font-bold uppercase">
                  450 KB • Listo
                </p>
              </div>
              <Check size={14} className="text-green-500" />
            </div>
          </section>
        </aside>
      </main>

      {/* Footer de Acción Fijo */}
      <footer className="fixed bottom-0 bg-[#0d0d0d]/80 backdrop-blur-xl border-t border-gray-800/50 p-6 ">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-2xl">
              <AlertCircle size={20} className="text-orange-500" />
            </div>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed max-w-sm italic">
              Al enviar esta solicitud, el cliente recibirá una notificación
              inmediata con los métodos de pago habilitados.
            </p>
          </div>

          <div className=" ">
            <button className="flex-1 md:flex-none px-10 py-4 bg-orange-500 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-orange-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-500/10">
              Emitir Solicitud de Cobro{" "}
              <ChevronRight size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
