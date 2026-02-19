"use client";

import React, { useState } from "react";
import {
  Bell,
  Globe,
  MapPin,
  Palette,
  Save,
  Check,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";

export default function Preferencias() {
  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
    language: "Español (Latinoamérica)",
    region: "México (UTC-6)",
    appearance: "dark",
  });

  const [saveStatus, setSaveStatus] = useState(null);

  const cardClasses =
    "bg-zinc-950 border border-zinc-900 rounded-2xl p-6 mb-6 transition-all hover:border-zinc-800";
  const labelClasses =
    "text-xs font-medium text-zinc-500 mb-4 block uppercase tracking-wider";
  const selectClasses =
    "w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer appearance-none";

  const handleSave = () => {
    setSaveStatus("Guardando...");
    setTimeout(() => {
      setSaveStatus("¡Preferencias actualizadas!");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="text-zinc-300 font-sans">
      <div className="max-w-2xl mx-auto">
        {/* Encabezado */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Preferencias del Sistema
            </h1>
            <p className="text-zinc-500 text-sm">
              Personaliza tu experiencia, idioma y notificaciones.
            </p>
          </div>
          {saveStatus && (
            <span className="text-xs font-medium text-orange-500 animate-pulse bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              {saveStatus}
            </span>
          )}
        </div>

        <div className="space-y-2">
          {/* Sección de Notificaciones */}
          <div className={cardClasses}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                <Bell size={20} />
              </div>
              <h3 className="text-white font-bold">Notificaciones</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "email",
                  label: "Notificaciones por correo",
                  desc: "Recibe alertas de actividad en tu bandeja de entrada.",
                },
                {
                  id: "push",
                  label: "Notificaciones Push",
                  desc: "Alertas en tiempo real en tu navegador o dispositivo.",
                },
                {
                  id: "sms",
                  label: "Mensajes SMS",
                  desc: "Alertas críticas de seguridad vía mensaje de texto.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between group"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      {item.label}
                    </p>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        notifications: {
                          ...preferences.notifications,
                          [item.id]: !preferences.notifications[item.id],
                        },
                      })
                    }
                    className={`w-12 h-6 rounded-full transition-all relative ${preferences.notifications[item.id] ? "bg-orange-500" : "bg-zinc-800"}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.notifications[item.id] ? "right-1" : "left-1"}`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sección de Idioma y Región */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={cardClasses + " mb-0"}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Globe size={20} />
                </div>
                <h3 className="text-white font-bold text-sm">Idioma</h3>
              </div>
              <label className={labelClasses}>Seleccionar Idioma</label>
              <div className="relative">
                <select
                  className={selectClasses}
                  value={preferences.language}
                  onChange={(e) =>
                    setPreferences({ ...preferences, language: e.target.value })
                  }
                >
                  <option>Español (Latinoamérica)</option>
                  <option>English (US)</option>
                  <option>Português (Brasil)</option>
                </select>
              </div>
            </div>

            <div className={cardClasses + " mb-0"}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                  <MapPin size={20} />
                </div>
                <h3 className="text-white font-bold text-sm">Región</h3>
              </div>
              <label className={labelClasses}>Zona Horaria</label>
              <div className="relative">
                <select
                  className={selectClasses}
                  value={preferences.region}
                  onChange={(e) =>
                    setPreferences({ ...preferences, region: e.target.value })
                  }
                >
                  <option>México (UTC-6)</option>
                  <option>Colombia (UTC-5)</option>
                  <option>Argentina (UTC-3)</option>
                  <option>España (UTC+1)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sección de Apariencia */}
          <div className={cardClasses}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <Palette size={20} />
              </div>
              <h3 className="text-white font-bold">Apariencia</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "light", icon: Sun, label: "Claro" },
                { id: "dark", icon: Moon, label: "Oscuro" },
                { id: "system", icon: Monitor, label: "Sistema" },
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() =>
                    setPreferences({ ...preferences, appearance: theme.id })
                  }
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
                    preferences.appearance === theme.id
                      ? "border-orange-500 bg-orange-500/5 text-orange-500"
                      : "border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700"
                  }`}
                >
                  <theme.icon size={24} />
                  <span className="text-xs font-bold uppercase tracking-tighter">
                    {theme.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Botón de Acción */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleSave}
              className="bg-white text-black px-10 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <Save size={18} />
              Actualizar Preferencias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
