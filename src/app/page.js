import Card from "@/components/card";
import Grafico from "@/components/Grafico";
import Recientes from "@/components/Recientes";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, Daniel</h1>
        <p className="text-gray-500 mt-1">Aquí tienes el resumen de hoy.</p>
      </div>

      <Card />
      <Grafico />
      <Recientes />
    </div>
  );
}
