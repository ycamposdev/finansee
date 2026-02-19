"use client";
import React, { useState } from "react";
import { User, Mail, Lock, Camera, Save, Phone, X } from "lucide-react";

export default function Perfil() {
  const [formData, setFormData] = useState({
    name: "Julian Dash",
    email: "julian.d@quickpay.io",
    phone: "+52 55 1234 5678",
    role: "Administrador",
  });

  // Estados para la interactividad
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const inputClasses =
    "w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all";
  const labelClasses = "text-xs font-medium text-zinc-400 mb-1.5 block";

  const handleSave = () => {
    setSaveStatus("Guardando...");
    setTimeout(() => {
      setSaveStatus("¡Cambios guardados!");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="text-zinc-300  font-sans">
      <div className="max-w-2xl mx-auto">
        {/* Encabezado */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Configuración de Perfil
            </h1>
            <p className="text-zinc-500 text-sm">
              Actualiza tu información personal y mantén tu cuenta segura.
            </p>
          </div>
          {saveStatus && (
            <span className="text-xs font-medium text-orange-500 animate-pulse bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              {saveStatus}
            </span>
          )}
        </div>

        <div className="space-y-6">
          {/* Tarjeta de Información Personal */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 overflow-hidden">
                  {/* Placeholder de imagen de perfil */}
                  <User size={40} className="text-zinc-500" />
                </div>
                <button
                  title="Cambiar foto"
                  className="absolute -bottom-1 -right-1 bg-orange-500 text-black p-2 rounded-full border-2 border-zinc-950 hover:bg-orange-400 transition-colors shadow-lg"
                >
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {formData.name}
                </h2>
                <p className="text-sm text-zinc-500">{formData.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className={labelClasses}>Nombre Completo</label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                    size={16}
                  />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`${inputClasses} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Correo Electrónico</label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                    size={16}
                  />
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className={`${inputClasses} pl-11 opacity-60 bg-zinc-950 cursor-not-allowed text-zinc-500`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Teléfono de Contacto</label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                    size={16}
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`${inputClasses} pl-11`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Seguridad y Acciones */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                <Lock size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Seguridad de la Cuenta
                </h3>
                <p className="text-xs text-zinc-500 italic">
                  Actualiza tu contraseña regularmente.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="w-full md:w-auto px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg border border-zinc-800 transition-all active:scale-95"
            >
              Cambiar Contraseña
            </button>
          </div>

          {/* Botón de Guardar General */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              className="bg-white text-black px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-500 transition-all shadow-xl active:scale-95"
            >
              <Save size={18} />
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Cambio de Contraseña */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsPasswordModalOpen(false)}
          ></div>
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-md rounded-2xl p-8 relative z-10 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight italic">
                Nueva Contraseña
              </h3>
              <button
                onClick={() => setIsPasswordModalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className={labelClasses}>Contraseña Actual</label>
                <input
                  type="password"
                  className={inputClasses}
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className={labelClasses}>Nueva Contraseña</label>
                <input
                  type="password"
                  className={inputClasses}
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Confirmar Nueva Contraseña
                </label>
                <input
                  type="password"
                  className={inputClasses}
                  placeholder="••••••••"
                />
              </div>
              <button
                onClick={() => setIsPasswordModalOpen(false)}
                className="w-full bg-orange-500 text-black font-black py-3 rounded-xl mt-4 hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/10"
              >
                CONFIRMAR ACTUALIZACIÓN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
