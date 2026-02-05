export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Tarjeta 1 */}
      <div className="bg-[#222222] rounded-[2rem] p-7 border border-white/5 shadow-2xl">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Total Cuentas por Cobrar
          </p>
          <div className="flex items-baseline gap-2 mt-2">
            <h2 className="text-white text-3xl font-bold tracking-tight">
              $85,000
            </h2>
            <span className="text-gray-500 text-sm font-semibold uppercase">
              USD
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-[#222222] bg-gray-600"></div>
              <div className="w-6 h-6 rounded-full border-2 border-[#222222] bg-gray-500"></div>
            </div>
            <p className="text-xs text-gray-500 font-medium ml-1">
              Client members
            </p>
          </div>
          <button className="mt-4 text-xs text-gray-400 font-bold flex items-center gap-1 hover:text-white transition-colors uppercase tracking-widest text-left">
            Ver detalles <span className="text-[10px]">→</span>
          </button>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="bg-[#222222] rounded-[2rem] p-7 border border-white/5 shadow-2xl">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Total Cuentas por Pagar
          </p>
          <div className="flex items-baseline gap-2 mt-2">
            <h2 className="text-white text-3xl font-bold tracking-tight">
              $42,000
            </h2>
            <span className="text-gray-500 text-sm font-semibold uppercase">
              USD
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-xs text-gray-500 font-medium italic">
              Vence en 5 días
            </p>
          </div>
          <button className="mt-4 text-xs text-gray-400 font-bold flex items-center gap-1 hover:text-white transition-colors uppercase tracking-widest text-left">
            Gestionar pagos <span className="text-[10px]">→</span>
          </button>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="bg-[#222222] rounded-[2rem] p-7 border border-white/5 shadow-2xl">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Documentos Pendientes
          </p>
          <div className="flex items-baseline gap-2 mt-2">
            <h2 className="text-white text-4xl font-black tracking-tight">
              17
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[65%]"></div>
            </div>
            <p className="text-[10px] text-orange-500 font-bold uppercase">
              Urgente
            </p>
          </div>
          <button className="mt-4 text-xs text-gray-400 font-bold flex items-center gap-1 hover:text-white transition-colors uppercase tracking-widest text-left">
            Ir a revisión <span className="text-[10px]">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
