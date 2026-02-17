"use client";

import Card from "@/components/card";
import Grafico from "@/components/Grafico";
import Recientes from "@/components/Recientes";
import { obtenerDatosUsuario } from "@/lib/userData";
import { useState, useEffect } from "react";

export default function Home() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const nombreRaw = nombreUsuario?.nombre || "";

  const nombreFormateado =
    nombreRaw.length > 0
      ? nombreRaw.charAt(0).toUpperCase() + nombreRaw.slice(1).toLowerCase()
      : "";

  useEffect(() => {
    const cargarInfo = async () => {
      const info = await obtenerDatosUsuario();
      setNombreUsuario(info);
    };
    cargarInfo();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Bienvenido, {nombreFormateado || "No encontrado"}
        </h1>
        <p className="text-gray-500 mt-1">Aquí tienes el resumen de hoy.</p>
      </div>

      <Card />
      <Grafico />
      <Recientes />
    </div>
  );
}
