export default function Grafico() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-6">
      {/* 1. Card: Flujo de Efectivo Mensual (Gráfico de Barras) */}
      <div className="bg-[#222222] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white font-semibold text-lg">
            Flujo de Efectivo Mensual
          </h3>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2 text-orange-500">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
              Ingresos
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Egresos
            </div>
          </div>
        </div>

        {/* Simulación visual de barras con HTML/Tailwind */}
        <div className="h-48 flex items-end justify-between gap-2 px-2 border-b border-white/10 pb-2">
          {/* Grupo de Barras 1 */}
          <div className="flex flex-col items-center gap-2 flex-1 group">
            <div className="flex items-end gap-1 w-full h-full">
              <div className="bg-orange-500/80 w-1/2 h-[30%] rounded-t-sm"></div>
              <div className="bg-cyan-400/80 w-1/2 h-[50%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase">Ene</span>
          </div>
          {/* Grupo de Barras 2 */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-end gap-1 w-full h-full">
              <div className="bg-orange-500/80 w-1/2 h-[70%] rounded-t-sm"></div>
              <div className="bg-cyan-400/80 w-1/2 h-[40%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase">Feb</span>
          </div>
          {/* Grupo de Barras 3 */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-end gap-1 w-full h-full">
              <div className="bg-orange-500/80 w-1/2 h-[45%] rounded-t-sm"></div>
              <div className="bg-cyan-400/80 w-1/2 h-[60%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase">Mar</span>
          </div>
          {/* Grupo de Barras 4 */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-end gap-1 w-full h-full">
              <div className="bg-orange-500/80 w-1/2 h-[90%] rounded-t-sm"></div>
              <div className="bg-cyan-400/80 w-1/2 h-[35%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase">Abr</span>
          </div>
        </div>
      </div>

      {/* 2. Card: Estado de Pagos (Gráfico de Líneas / Áreas) */}
      <div className="bg-[#222222] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white font-semibold text-lg">Estado de Pagos</h3>
          <button className="text-[10px] bg-white/5 text-gray-400 px-3 py-1 rounded-full hover:bg-white/10 transition-all uppercase tracking-widest font-bold">
            Exportar
          </button>
        </div>

        {/* Simulación visual de gráfico de líneas con SVG */}
        <div className="relative h-48 w-full border-b border-white/10">
          <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
            {/* Línea de fondo (Guías) */}
            <line
              x1="0"
              y1="0"
              x2="400"
              y2="0"
              stroke="white"
              strokeWidth="0.1"
              strokeDasharray="4"
            />
            <line
              x1="0"
              y1="50"
              x2="400"
              y2="50"
              stroke="white"
              strokeWidth="0.1"
              strokeDasharray="4"
            />
            <line
              x1="0"
              y1="100"
              x2="400"
              y2="100"
              stroke="white"
              strokeWidth="0.1"
              strokeDasharray="4"
            />

            {/* Línea Cyan */}
            <path
              d="M0,120 Q50,80 100,100 T200,50 T300,80 T400,20"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Línea Naranja */}
            <path
              d="M0,140 Q50,130 100,110 T200,90 T300,40 T400,30"
              fill="none"
              stroke="#f97316"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Puntos de datos */}
            <circle cx="200" cy="50" r="4" fill="#22d3ee" />
            <circle cx="300" cy="40" r="4" fill="#f97316" />
          </svg>

          <div className="flex justify-between mt-4">
            <span className="text-[10px] text-gray-500 uppercase">Sem 1</span>
            <span className="text-[10px] text-gray-500 uppercase">Sem 2</span>
            <span className="text-[10px] text-gray-500 uppercase">Sem 3</span>
            <span className="text-[10px] text-gray-500 uppercase">Sem 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
