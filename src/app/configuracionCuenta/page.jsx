"use client";

import React, { useState } from "react";
import {
  Building2,
  CreditCard,
  Palette,
  Users,
  Plus,
  Trash2,
  Upload,
  Save,
  Globe,
  FileText,
  Banknote,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function ConfiguracionCuenta() {
  const [saveStatus, setSaveStatus] = useState(null);
  const [bankAccounts, setBankAccounts] = useState([
    { id: 1, bank: "BBVA", account: "**** 4590", type: "CLABE" },
  ]);

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Carlos Mendoza",
      email: "carlos@tech.com",
      role: "Administrador",
    },
    { id: 2, name: "Ana Silva", email: "ana.s@tech.com", role: "Contador" },
  ]);

  const cardClasses =
    "bg-[#0d0d0d] border border-zinc-900 rounded-[24px] p-8 mb-8";
  const inputClasses =
    "w-full bg-[#141414] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-all placeholder:text-zinc-700";
  const labelClasses =
    "text-[10px] uppercase font-bold text-zinc-500 mb-2 block tracking-widest";

  const handleSave = () => {
    setSaveStatus("Sincronizando con el servidor...");
    setTimeout(() => {
      setSaveStatus("Configuración guardada exitosamente");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="text-zinc-300 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header con Estado de Guardado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter flex items-center gap-3 italic">
              BUSINESS PROFILE
              <span className="text-[10px] not-italic bg-orange-500/10 text-orange-500 border border-orange-500/20 px-2 py-1 rounded uppercase tracking-widest">
                Core Config
              </span>
            </h1>
            <p className="text-zinc-500 text-sm mt-1">
              Configura la identidad legal y financiera de tu organización.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {saveStatus && (
              <span className="text-[10px] font-bold text-orange-500 animate-fade-in bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
                {saveStatus}
              </span>
            )}
            <button
              onClick={handleSave}
              className="bg-white text-black px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <Save size={18} />
              Guardar Cambios
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMNA IZQUIERDA: Identidad y Finanzas */}
          <div className="lg:col-span-7 space-y-2">
            {/* 1. Información Legal / Fiscal */}
            <section className={cardClasses}>
              <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                  <Building2 size={20} />
                </div>
                <h3 className="text-white font-bold text-lg italic">
                  Información Legal / Fiscal
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelClasses}>
                    Nombre Legal / Razón Social
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Tech Solutions S.A.C."
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>ID Fiscal (RFC / RUC)</label>
                  <input
                    type="text"
                    placeholder="ABC123456XYZ"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Régimen Fiscal</label>
                  <select
                    className={inputClasses + " cursor-pointer appearance-none"}
                  >
                    <option>Persona Moral (Empresa)</option>
                    <option>Persona Física (Sueldos y Salarios)</option>
                    <option>Persona Física (Act. Empresarial)</option>
                    <option>RESICO</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>
                    Dirección Fiscal Completa
                  </label>
                  <textarea
                    placeholder="Calle, Número, Ciudad, CP y País"
                    className={inputClasses + " h-24 resize-none"}
                  ></textarea>
                </div>
              </div>
            </section>

            {/* 2. Configuración de Cobros y Pagos */}
            <section className={cardClasses}>
              <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-6">
                <div className="p-2.5 bg-green-500/10 rounded-xl text-green-500">
                  <Banknote size={20} />
                </div>
                <h3 className="text-white font-bold text-lg italic">
                  Finanzas y Pagos
                </h3>
              </div>

              <div className="mb-8">
                <label className={labelClasses}>
                  Métodos de Pago Aceptados
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Transferencia Bancaria",
                    "Tarjeta de Crédito",
                    "Efectivo",
                    "PayPal",
                  ].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-3 p-4 bg-[#141414] border border-zinc-800 rounded-xl cursor-pointer hover:border-zinc-600 transition-all"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-orange-500 rounded"
                        defaultChecked={method === "Transferencia Bancaria"}
                      />
                      <span className="text-xs font-medium">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <label className={labelClasses}>Cuentas Bancarias</label>
                  <button className="text-[10px] font-bold text-orange-500 flex items-center gap-1 hover:underline">
                    <Plus size={12} /> Añadir Cuenta
                  </button>
                </div>
                {bankAccounts.map((acc) => (
                  <div
                    key={acc.id}
                    className="flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <CreditCard size={18} className="text-zinc-600" />
                      <div>
                        <p className="text-sm font-bold text-white">
                          {acc.bank}
                        </p>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase">
                          {acc.type}: {acc.account}
                        </p>
                      </div>
                    </div>
                    <button className="text-zinc-700 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <label className={labelClasses}>Moneda Base del Sistema</label>
                <div className="relative">
                  <Globe
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />
                  <select
                    className={
                      inputClasses + " pl-10 cursor-pointer appearance-none"
                    }
                  >
                    <option>Dólar Estadounidense (USD)</option>
                    <option defaultValue={"peso Mexicano"}>
                      Peso Mexicano (MXN)
                    </option>
                    <option>Euro (EUR)</option>
                    <option>Sol Peruano (PEN)</option>
                  </select>
                </div>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA: Branding y Equipo */}
          <div className="lg:col-span-5 space-y-2">
            {/* 3. Personalización de Marca */}
            <section className={cardClasses}>
              <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-6">
                <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-500">
                  <Palette size={20} />
                </div>
                <h3 className="text-white font-bold text-lg italic">
                  Personalización
                </h3>
              </div>

              <div className="mb-8">
                <label className={labelClasses}>
                  Logo Corporativo (PDF ready)
                </label>
                <div className="border-2 border-dashed border-zinc-800 rounded-[24px] p-8 flex flex-col items-center justify-center gap-3 hover:border-orange-500/50 transition-all group cursor-pointer">
                  <div className="p-4 bg-zinc-900 rounded-full text-zinc-600 group-hover:text-orange-500 transition-colors">
                    <Upload size={24} />
                  </div>
                  <p className="text-xs font-medium text-zinc-500 text-center">
                    Arrastra tu logo aquí o haz clic para subir
                    <br />
                    <span className="text-[10px] text-zinc-700 uppercase">
                      PNG o SVG (Max 2MB)
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className={labelClasses}>Color Primario</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      defaultValue="#f97316"
                      className="w-10 h-10 bg-transparent border-none cursor-pointer"
                    />
                    <span className="text-xs font-mono text-zinc-500">
                      #F97316
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>
                  Nota Legal Predeterminada (T&C)
                </label>
                <textarea
                  className={inputClasses + " h-32 text-xs leading-relaxed"}
                  placeholder="Estos términos aparecerán en el pie de página de cada factura generada..."
                  defaultValue="El pago de esta factura debe realizarse en un plazo de 15 días naturales. Favor de enviar comprobante de pago al correo corporativo."
                ></textarea>
              </div>
            </section>

            {/* 4. Equipo / Colaboradores */}
            <section className={cardClasses}>
              <div className="flex items-center justify-between mb-8 border-b border-zinc-900 pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-500/10 rounded-xl text-orange-500">
                    <Users size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg italic">
                    Equipo
                  </h3>
                </div>
                <button className="bg-zinc-900 p-2 rounded-lg text-zinc-400 hover:text-white transition-colors">
                  <Plus size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {team.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 font-bold text-xs text-zinc-400 group-hover:border-orange-500 transition-colors">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-none">
                          {member.name}
                        </p>
                        <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-zinc-700 hover:text-zinc-400">
                        <Mail size={14} />
                      </button>
                      <button className="p-2 text-zinc-700 hover:text-red-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900">
                <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/10 flex gap-3">
                  <ShieldCheck size={18} className="text-orange-500 shrink-0" />
                  <p className="text-[10px] text-zinc-500 italic">
                    Los colaboradores solo tienen acceso a los módulos asignados
                    por su Rol.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
