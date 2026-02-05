export default function Recientes() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-6">
      {/* 1. Card: Facturas Recientes */}
      <div className="bg-[#222222] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
        <h3 className="text-white font-semibold text-lg mb-6">
          Facturas Recientes
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-[10px] uppercase tracking-widest border-b border-white/5">
                <th className="pb-4 font-bold">Emisor</th>
                <th className="pb-4 font-bold">Empresa</th>
                <th className="pb-4 font-bold text-right">Importe</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs">
                      JD
                    </div>
                    Juan Delgado
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-xs italic">
                  Tech Solutions S.A.
                </td>
                <td className="py-4 text-white font-medium text-right">
                  $1,200.40
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 text-xs">
                      MA
                    </div>
                    Maria Arias
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-xs italic">
                  Global Logistics
                </td>
                <td className="py-4 text-white font-medium text-right">
                  $3,450.00
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs">
                      RC
                    </div>
                    Raúl Castro
                  </div>
                </td>
                <td className="py-4 text-gray-500 text-xs italic">
                  Importadora X
                </td>
                <td className="py-4 text-white font-medium text-right">
                  $890.15
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Card: Alertas de Vencimiento */}
      <div className="bg-[#222222] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
        <h3 className="text-white font-semibold text-lg mb-6">
          Alertas de Vencimiento
        </h3>

        <div className="space-y-4">
          {/* Alerta 1 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
            <div className="flex items-center gap-4">
              <div className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Factura #F85-001
                </p>
                <p className="text-red-400 text-[10px] uppercase font-bold tracking-tight">
                  Venció ayer
                </p>
              </div>
            </div>
            <span className="text-white font-bold">$2,300</span>
          </div>

          {/* Alerta 2 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10">
            <div className="flex items-center gap-4">
              <div className="text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Servicio Cloud Mensual
                </p>
                <p className="text-orange-400 text-[10px] uppercase font-bold tracking-tight">
                  Vence en 2 días
                </p>
              </div>
            </div>
            <span className="text-white font-bold">$450</span>
          </div>

          {/* Alerta 3 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 opacity-60">
            <div className="flex items-center gap-4">
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Mantenimiento Web
                </p>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-tight">
                  Vence en 10 días
                </p>
              </div>
            </div>
            <span className="text-white font-bold">$120</span>
          </div>
        </div>
      </div>
    </div>
  );
}
