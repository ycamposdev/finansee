"use client";

import React, { useState } from "react";
import {
  LifeBuoy,
  AlertCircle,
  ChevronDown,
  MessageCircle,
  Clock,
  FileSearch,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldQuestion,
  ArrowRight,
  Send,
} from "lucide-react";

export default function SoportePago() {
  // Estado para los acordeones de FAQ
  const [activeFaq, setActiveFaq] = useState(null);

  // Estado para el seguimiento de tickets (Stepper)
  const [activeTicket] = useState({
    id: "TKT-99201",
    subject: "Cargo duplicado - AWS",
    status: 2, // 1: Recibido, 2: En Revisión, 3: Resolución
    date: "15 Feb, 2024",
  });

  const faqs = [
    {
      question: "¿Por qué se rechazó mi tarjeta de crédito?",
      answer:
        "Los rechazos suelen deberse a límites de seguridad bancarios, fondos insuficientes o bloqueos temporales por transacciones internacionales. Te recomendamos verificar con tu banco el código de error específico.",
    },
    {
      question: "¿Cuánto tarda en reflejarse mi transferencia?",
      answer:
        "Las transferencias SPEI/ACH suelen ser inmediatas, pero pueden tardar hasta 24 horas hábiles dependiendo del horario bancario y la cámara de compensación.",
    },
    {
      question: "¿Cómo solicito una factura fiscal?",
      answer:
        "Puedes descargar tu comprobante desde el Historial de Pagos. Si necesitas una factura con datos fiscales específicos (RFC/Tax ID), ve a la sección de Perfil Fiscal.",
    },
  ];

  return (
    <div className=" text-gray-300 font-sans ">
      {/* Decoración ambiental */}
      <div className="absolute top-[-5%] right-[-5%] w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>

      <header className="mb-12 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic flex items-center gap-3">
            Centro de Ayuda
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md italic">
            ¿Tienes dudas con un pago? Reporta problemas con transacciones o
            contacta a un especialista.
          </p>
        </div>

        {/* 3. Botón de Chat en Vivo (Widget flotante/destacado) */}
        <div className="bg-orange-500 p-6 rounded-[28px] shadow-2xl shadow-orange-500/10 group cursor-pointer hover:scale-[1.02] transition-all flex items-center gap-5">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-orange-500">
            <MessageCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-black uppercase tracking-widest mb-1 italic">
              Asistencia Humana
            </p>
            <p className="text-sm font-black text-black italic leading-none">
              Hablar con un Especialista
            </p>
            <p className="text-[9px] text-black/60 font-bold uppercase mt-1 flex items-center gap-1">
              <Clock size={10} /> Respuesta en &lt; 5 min
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* COLUMNA IZQUIERDA: Disputas y FAQ */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. Sistema de Tickets de Disputa (Caso de Uso) */}
          <section className="bg-[#121212] border border-gray-800/50 rounded-[35px] p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/10">
                <ShieldQuestion size={24} className="text-red-500" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">
                  Reportar una Disputa
                </h4>
                <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                  Inicia un reclamo sobre un cargo específico
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2 block italic">
                    Seleccionar Transacción
                  </span>
                  <select className="w-full bg-black/40 border border-gray-800/60 rounded-2xl p-4 text-xs font-bold text-white focus:outline-none focus:border-orange-500/50 appearance-none">
                    <option>FAC-001 - AWS ($1,250.00)</option>
                    <option>FAC-042 - Google Cloud ($840.50)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2 block italic">
                    Motivo de la Disputa
                  </span>
                  <select className="w-full bg-black/40 border border-gray-800/60 rounded-2xl p-4 text-xs font-bold text-white focus:outline-none focus:border-orange-500/50 appearance-none">
                    <option>Cargo no reconocido</option>
                    <option>Monto incorrecto / duplicado</option>
                    <option>El pago falló pero se descontó</option>
                    <option>Otro motivo técnico</option>
                  </select>
                </label>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2 block italic">
                    Detalles adicionales
                  </span>
                  <textarea
                    placeholder="Describe brevemente lo ocurrido para agilizar la revisión..."
                    className="w-full bg-black/40 border border-gray-800/60 rounded-2xl p-4 text-xs font-bold text-white focus:outline-none focus:border-orange-500/50 min-h-[125px] placeholder:text-gray-800"
                  />
                </label>
              </div>
            </div>

            <button className="w-full mt-6 py-4 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2 group">
              Enviar Reporte de Disputa{" "}
              <Send
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </section>

          {/* 2. Base de Conocimientos (FAQ Dinámico) */}
          <section>
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic mb-6 flex items-center gap-2">
              <HelpCircle size={14} className="text-orange-500" />
              Preguntas Frecuentes
            </h4>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#121212] border border-gray-800/40 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-white/[0.02]"
                  >
                    <span className="text-xs font-black text-gray-300 uppercase tracking-tight italic">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-600 transition-transform ${activeFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 pt-0 text-[11px] text-gray-500 leading-relaxed border-t border-gray-800/20 italic">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: Status Tracker */}
        <aside className="lg:col-span-4 space-y-6">
          {/* 4. Seguimiento de Solicitudes (Status Tracker) */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[35px] border border-gray-800/50 p-8 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-2 text-orange-500">
                <FileSearch size={14} /> Ticket Activo
              </h4>
              <span className="text-[8px] font-black bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-widest">
                En Curso
              </span>
            </div>

            <div className="mb-8">
              <p className="text-xs font-black text-white italic tracking-tight mb-1">
                {activeTicket.subject}
              </p>
              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                ID: {activeTicket.id} • {activeTicket.date}
              </p>
            </div>

            {/* Stepper Visual */}
            <div className="space-y-8 relative">
              {/* Línea del Stepper */}
              <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-gray-800"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${activeTicket.status >= 1 ? "bg-orange-500 border-orange-500" : "bg-[#0a0a0a] border-gray-800"}`}
                >
                  <CheckCircle2
                    size={12}
                    className={
                      activeTicket.status >= 1
                        ? "text-black stroke-[3px]"
                        : "text-gray-800"
                    }
                  />
                </div>
                <div>
                  <p
                    className={`text-[10px] font-black uppercase tracking-widest ${activeTicket.status >= 1 ? "text-white" : "text-gray-600"}`}
                  >
                    Solicitud Recibida
                  </p>
                  <p className="text-[8px] text-gray-600 font-bold uppercase">
                    15 Feb - 10:30 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative z-10">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${activeTicket.status >= 2 ? "bg-orange-500 border-orange-500" : "bg-[#0a0a0a] border-gray-800"}`}
                >
                  <Clock
                    size={12}
                    className={
                      activeTicket.status >= 2
                        ? "text-black stroke-[3px]"
                        : "text-gray-800"
                    }
                  />
                </div>
                <div>
                  <p
                    className={`text-[10px] font-black uppercase tracking-widest ${activeTicket.status >= 2 ? "text-white" : "text-gray-600"}`}
                  >
                    En Revisión
                  </p>
                  <p className="text-[8px] text-gray-600 font-bold uppercase">
                    Validando con procesador
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative z-10 opacity-40">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${activeTicket.status >= 3 ? "bg-orange-500 border-orange-500" : "bg-[#0a0a0a] border-gray-800"}`}
                >
                  <ArrowRight size={12} className="text-gray-800" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                    Resolución Enviada
                  </p>
                  <p className="text-[8px] text-gray-600 font-bold uppercase italic">
                    Pendiente
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 py-3 bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all">
              Ver Detalles del Ticket
            </button>
          </div>

          <div className="p-8 bg-blue-500/5 rounded-[30px] border border-blue-500/10">
            <h6 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <LifeBuoy size={14} /> ¿Duda Técnica?
            </h6>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed italic mb-4">
              Si tu problema está relacionado con la integración de API o
              webhooks, consulta nuestra documentación para desarrolladores.
            </p>
            <button className="text-[9px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2 hover:underline">
              Ir a Documentación <ExternalLink size={12} />
            </button>
          </div>
        </aside>
      </main>

      {/* Alerta de Seguridad Inferior */}
      <footer className="max-w-6xl mx-auto mt-12 flex items-center gap-4 p-5 bg-black/40 border border-gray-800/40 rounded-[24px]">
        <AlertCircle size={18} className="text-gray-600" />
        <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
          Nunca te pediremos tus claves bancarias o CVV por chat o correo
          electrónico. Protege tu información.
        </p>
      </footer>
    </div>
  );
}
