"use client";

import { useEffect } from "react";
import Ticker from "../components/Ticker";

const rawHtml = `

    <header class="border-b border-gray-800 bg-[#0e1424] sticky top-0 z-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4">
            <img src="https://gestor-de-archivos.vercel.app/assets/logos/logo-RetailMind-fondo-negro-1447x352.png" alt="RetailMind Logo" class="h-10 object-contain">
            <div class="hidden md:block h-6 w-px bg-gray-700"></div>
            <p class="hidden md:block text-xs text-gray-400 tracking-wider uppercase font-semibold">Grafo de Estados Operacionales</p>
        </div>
        <div class="flex items-center gap-3">
            <span class="flex h-3 w-3 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="text-xs text-gray-400 font-medium bg-gray-800/60 px-3 py-1.5 rounded-full border border-gray-700">Motor de IA Activo v2.6</span>
        </div>
    </header>

    <main class="flex-1 p-4 lg:p-8 grid grid-cols-1 xl:grid-cols-4 gap-6 max-w-[1800px] mx-auto w-full">
        
        <div class="xl:col-span-1 flex flex-col gap-6">
            
            <div class="bg-[#121829] border border-gray-800 rounded-xl p-5 shadow-xl">
                <h3 class="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4 flex items-center gap-2">
                    <i data-lucide="sliders-horizontal" class="w-4 h-4 text-blue-400"></i> Control de Simulación
                </h3>
                <p class="text-xs text-gray-400 mb-4">Haz clic en los elementos del grafo central para interactuar y profundizar en el nivel analítico de forma automática.</p>
                <div class="flex flex-col gap-2">
                    <button id="btn-reset" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                        <i data-lucide="refresh-cw" class="w-4 h-4"></i> Restablecer Vista General
                    </button>
                </div>
            </div>




<div class="bg-[#141f30] border border-gray-800 rounded-xl p-5 shadow-xl flex flex-col max-h-[420px]">
    <h3 class="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-2 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bar-chart-3" aria-hidden="true" class="lucide lucide-bar-chart-3 w-4 h-4 text-[#00cfa8]"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg> Glosario de Indicadores (Ticker)
    </h3>
    <div class="overflow-y-auto pr-1 custom-scrollbar space-y-4 text-xs">
        
        <!-- TICKET-PROM -->
        <div>
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">TICKET-PROM</span>
                <span class="font-mono font-bold text-emerald-400">Bs 48.20 <span class="text-[10px] font-normal ml-1">▲ 3.4%</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Ticket Promedio</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Valor monetario medio de cada transacción (Ventas totales / Número de tickets emitidos).</p>
        </div>
        
        <!-- DEMANDA-ARR -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">DEMANDA-ARR</span>
                <span class="font-mono font-bold text-emerald-400">120 u/día <span class="text-[10px] font-normal ml-1">▲ 8.1%</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Ritmo de Demanda</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Tasa o velocidad diaria de unidades vendidas en stock. Mide la aceleración de salida física.</p>
        </div>
        
        <!-- MARGEN-GEN -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">MARGEN-GEN</span>
                <span class="font-mono font-bold text-rose-400">18.2% <span class="text-[10px] font-normal ml-1">▼ 1.5%</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Margen General</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Porcentaje de rentabilidad bruta general obtenido tras descontar el costo de venta del retail.</p>
        </div>
        
        <!-- ROTACION -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">ROTACION</span>
                <span class="font-mono font-bold text-emerald-400">4.7x <span class="text-[10px] font-normal ml-1">▲ 0.3</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Rotación de Inventario</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Velocidad multiplicadora con la que el inventario disponible se vende y se renueva por completo.</p>
        </div>
        
        <!-- COMP-PRECIO -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">COMP-PRECIO</span>
                <span class="font-mono font-bold text-rose-400">ALERTA <span class="text-[10px] font-normal ml-1">▼ 15%</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Competitividad</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Brecha de precios frente al mercado. Alertas indican desalineaciones críticas con competidores.</p>
        </div>
        
        <!-- STOP-LOSS -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">STOP-LOSS</span>
                <span class="font-mono font-bold text-emerald-400">ACTIVADO <span class="text-[10px] text-gray-400 font-normal ml-1">LÁCTEOS</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Límite de Pérdida</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Regla de protección automática activa para forzar la salida física (vencimiento/merma) de un pasillo.</p>
        </div>
        
        <!-- QUINCENA -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">QUINCENA</span>
                <span class="font-mono font-bold text-emerald-400">BULL-MARKET <span class="text-[10px] font-normal ml-1">↑↑</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Fase Bull-Market</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Inyección temporal de liquidez por cobros. Clientes muestran alta disposición de compra y baja sensibilidad al precio.</p>
        </div>
        
        <!-- POST-QUINCE -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">POST-QUINCE</span>
                <span class="font-mono font-bold text-rose-400">BEAR <span class="text-[10px] font-normal ml-1">▼ 22%</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Fase Bear</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Periodo de contracción natural del consumo entre ciclos de pago, requiriendo mitigación de fricción comercial.</p>
        </div>
        
        <!-- RETAILDING -->
        <div class="border-t border-gray-800/60 pt-2">
            <div class="flex justify-between items-baseline">
                <span class="font-mono font-bold text-[#c8d8e8]">RETAILDING</span>
                <span class="font-mono font-bold text-emerald-400">TALLER <span class="text-[10px] text-gray-400 font-normal ml-1">12 CUPOS</span></span>
            </div>
            <p class="text-[10px] font-normal text-gray-500 mt-0.5">Formación Académica</p>
            <p class="text-gray-400 mt-1 leading-relaxed">Estado de disponibilidad para talleres del framework cuantitativo híbrido de la plataforma.</p>
        </div>

    </div>
</div>



        </div>

        <div class="xl:col-span-2 flex flex-col gap-6">
            
            <div class="bg-[#121829] border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[700px]">
                
                <div class="text-center mb-6">
                    <span class="text-[11px] font-bold text-blue-400 bg-blue-950/50 border border-blue-900/50 px-3 py-1 rounded-full uppercase tracking-widest">Representación Visual Activa</span>
                    <h2 class="text-xl font-bold mt-2 text-white">Navegación Dinámica en RetailMind</h2>
                </div>

                <div class="grid grid-cols-2 gap-6 my-auto relative z-10">
                    
                    <div onclick="openDrillDownModal('estado')" class="col-span-2 flex justify-center mb-4 cursor-pointer group">
                        <div id="nodo-central"  class="w-64 bg-gradient-to-b from-[#1e2942] to-[#141b2d] border-2 border-blue-500 rounded-xl p-4 text-center shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <span class="text-[10px] font-bold tracking-wider text-blue-400 uppercase">Estado Operacional</span>
                            <h4 class="text-lg font-black text-white mt-1 tracking-wide">ALTA VOLATILIDAD</h4>
                            <div class="mt-3 space-y-1 text-xs border-t border-gray-800 pt-2 text-gray-300">
                                <p class="flex justify-between"><span>Confianza:</span> <span class="font-mono text-emerald-400 font-bold">0.89</span></p>
                                <p class="flex justify-between"><span>Impacto Económico:</span> <span class="font-bold text-rose-400">ALTO</span></p>
                                <p class="flex justify-between text-gray-400 text-[10px]"><span>Detectado:</span> <span>12/05/2026</span></p>
                            </div>
                        </div>
                    </div>

<div onclick="openDrillDownModal('abc')" class="cursor-pointer group">
                    <div class="bg-[#161f33]/60 border border-gray-800/80 rounded-xl p-4 transition-all duration-200 hover:border-emerald-500/40">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                            <h5 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Productos (ABC)</h5>
                        </div>
                        <div class="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-3 text-center mb-3">
                            <p class="text-xl font-bold text-emerald-400">18</p>
                            <p class="text-[11px] text-gray-400">Productos afectados</p>
                        </div>
                        <div class="flex flex-wrap gap-1.5 justify-center">
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono px-2 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">SKU 1001</span>
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono px-2 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">SKU 1002</span>
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono px-2 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">...</span>
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono px-2 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">SKU 1018</span>
                        </div>
                    </div>
</div>


<div onclick="openDrillDownModal('rfm')" class="cursor-pointer group">
                    <div class="bg-[#161f33]/60 border border-gray-800/80 rounded-xl p-4 transition-all duration-200 hover:border-emerald-500/40">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                            <h5 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Segmentos de Clientes (RFM)</h5>
                        </div>
                        <div class="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-3 text-center mb-3">
                            <p class="text-xl font-bold text-emerald-400">2</p>
                            <p class="text-[11px] text-gray-400">Segmentos afectados</p>
                        </div>
                        <div class="flex flex-wrap gap-1.5 justify-center">
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium px-2.5 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">Champions</span>
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium px-2.5 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">Leales</span>
                        </div>
                    </div>
</div>



<div onclick="openDrillDownModal('sucursales')" class="cursor-pointer group">
                    <div class="bg-[#161f33]/60 border border-gray-800/80 rounded-xl p-4 transition-all duration-200 hover:border-emerald-500/40">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                            <h5 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Sucursales</h5>
                        </div>
                        <div class="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-3 text-center mb-3">
                            <p class="text-xl font-bold text-emerald-400">2</p>
                            <p class="text-[11px] text-gray-400">Sucursales afectadas</p>
                        </div>
                        <div class="flex flex-wrap gap-1.5 justify-center">
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium px-2.5 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">Norte</span>
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium px-2.5 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">Centro</span>
                        </div>
                    </div>
</div>

<div onclick="openDrillDownModal('tiempo')" class="cursor-pointer group">
                    <div class="bg-[#161f33]/60 border border-gray-800/80 rounded-xl p-4 transition-all duration-200 hover:border-emerald-500/40">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                            <h5 class="text-xs font-bold uppercase tracking-wider text-emerald-400">Tiempo</h5>
                        </div>
                        <div class="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-3 text-center mb-3">
                            <p class="text-sm font-bold text-emerald-400 flex items-center justify-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Identificado</p>
                            <p class="text-[11px] text-gray-400 mt-1">Patrón temporal detectado</p>
                        </div>
                        <div class="flex flex-wrap gap-1.5 justify-center">
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium px-2.5 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">Viernes</span>
                            <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium px-2.5 py-0.5 rounded transition hover:bg-amber-500/20 cursor-pointer">Sábado</span>
                        </div>
                    </div>
</div>

                    <div class="col-span-2 mt-2 pt-4 border-t border-gray-800">
                        <h5 class="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-cyan-500"></span> Señales Asociadas (Por qué se detectó)</h5>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-[11px]">
                            <div class="bg-[#0f1524] border border-cyan-900/40 rounded p-2 flex justify-between items-center transition hover:border-cyan-500/30 cursor-pointer">
                                <span class="text-gray-300">Volatilidad ↑</span>
                                <span class="font-mono text-cyan-400 font-medium">+45% vs hist.</span>
                            </div>
                            <div class="bg-[#0f1524] border border-cyan-900/40 rounded p-2 flex justify-between items-center transition hover:border-cyan-500/30 cursor-pointer">
                                <span class="text-gray-300">Rango OHLC ↑</span>
                                <span class="font-mono text-cyan-400 font-medium">3.2x promedio</span>
                            </div>
                            <div class="bg-[#0f1524] border border-cyan-900/40 rounded p-2 flex justify-between items-center transition hover:border-cyan-500/30 cursor-pointer">
                                <span class="text-gray-300">Cambios de demanda</span>
                                <span class="font-mono text-cyan-400 font-medium">Intra-día altos</span>
                            </div>
                            <div class="bg-[#0f1524] border border-cyan-900/40 rounded p-2 flex justify-between items-center transition hover:border-cyan-500/30 cursor-pointer">
                                <span class="text-gray-300">Variabilidad ticket ↑</span>
                                <span class="font-mono text-cyan-400 font-medium">Inestable</span>
                            </div>
                            <div class="bg-[#0f1524] border border-cyan-900/40 rounded p-2 flex justify-between items-center transition hover:border-cyan-500/30 cursor-pointer">
                                <span class="text-gray-300">Abandono de carrito ↑</span>
                                <span class="font-mono text-cyan-400 font-medium">18%</span>
                            </div>
                            <div class="bg-[#0f1524] border border-cyan-900/40 rounded p-2 flex justify-between items-center transition hover:border-cyan-500/30 cursor-pointer">
                                <span class="text-gray-300">Devoluciones ↑</span>
                                <span class="font-mono text-cyan-400 font-medium">12%</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-[#101626] border border-gray-800 rounded-lg p-3.5">
                        <h6 class="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-purple-500"></span> Categorías Afectadas</h6>
                        <div class="grid grid-cols-2 gap-1.5 text-[10px] text-center">
                            <span class="bg-purple-950/20 text-purple-300 border border-purple-900/40 py-1.5 rounded font-medium">Fruver</span>
                            <span class="bg-purple-950/20 text-purple-300 border border-purple-900/40 py-1.5 rounded font-medium">Lácteos</span>
                            <span class="bg-purple-950/20 text-purple-300 border border-purple-900/40 py-1.5 rounded font-medium">Panadería</span>
                            <span class="bg-purple-950/20 text-purple-300 border border-purple-900/40 py-1.5 rounded font-medium">Pescadería</span>
                        </div>
                    </div>

                    <div class="bg-[#101626] border border-gray-800 rounded-lg p-3.5">
                        <h6 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-gray-500"></span> Métricas Clave</h6>
                        <div class="grid grid-cols-2 gap-1.5 text-[10px] text-center text-gray-300 font-mono">
                            <div class="bg-gray-900 border border-gray-800 py-1 rounded">Ventas ($)</div>
                            <div class="bg-gray-900 border border-gray-800 py-1 rounded">Margen Bruto</div>
                            <div class="bg-gray-900 border border-gray-800 py-1 rounded">Unidades Vendidas</div>
                            <div class="bg-gray-900 border border-gray-800 py-1 rounded">Abandono (%)</div>
                        </div>
                    </div>

                </div>

                <div class="mt-6 bg-[#090d16] border border-gray-800/80 rounded-xl p-3 text-center relative z-10">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Flujo de Navegación en el Grafo (Zoom In/Out)</p>
                    <div class="flex items-center justify-center gap-1.5 md:gap-3 text-[10px] text-gray-400 font-medium">
                        <span class="bg-blue-950/40 text-blue-400 border border-blue-900/50 px-2 py-1 rounded">Estado Operacional</span>
                        <i data-lucide="arrow-right" class="w-3 h-3 text-gray-600"></i>
                        <span class="bg-emerald-950/20 text-emerald-400 border border-emerald-900/30 px-2 py-1 rounded">Dim. Relacionadas</span>
                        <i data-lucide="arrow-right" class="w-3 h-3 text-gray-600"></i>
                        <span class="bg-amber-950/20 text-amber-400 border border-amber-900/30 px-2 py-1 rounded">Entidades (Detalle)</span>
                        <i data-lucide="arrow-right" class="w-3 h-3 text-gray-600"></i>
                        <span class="bg-cyan-950/20 text-cyan-400 border border-cyan-900/30 px-2 py-1 rounded">Señales y Métricas</span>
                    </div>
                </div>

            </div>
            
            <div class="bg-gradient-to-r from-[#131a30] to-[#0e1424] border border-blue-900/40 rounded-xl p-5 shadow-xl flex gap-4 items-start">
                <div class="p-3 bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
                    <i data-lucide="bot" class="w-6 h-6"></i>
                </div>
                <div>
                    <h4 class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Narrativa Generada por IA (Ejemplo Contextual)</h4>
                    <p id="narrativa-texto" class="text-sm text-gray-200 leading-relaxed italic">
                        "La alta volatilidad se concentra en las categorías de Fruver y Lácteos durante los días viernes y sábado, impulsada por clientes Champions y Leales. El rango de demanda intra-día es 3.2 veces mayor al promedio histórico y el abandono de carrito aumentó un 18%. Se recomienda revisar disponibilidad en horas pico y ajustar promociones para estabilizar la demanda."
                    </p>
                </div>
            </div>

        </div>

        <div class="xl:col-span-1 flex flex-col gap-6">
            
            <div class="bg-[#121829] border border-gray-800 rounded-xl p-5 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-5 flex items-center gap-2">
                        <i data-lucide="book-open" class="w-4 h-4 text-blue-400"></i> ¿Cómo leer el Grafo?
                    </h3>
                    
                    <div class="space-y-4">
                        <div class="flex gap-3 items-start">
                            <span class="w-5 h-5 rounded-full bg-blue-950 border border-blue-800 text-[11px] font-bold flex items-center justify-center text-blue-400 shrink-0 mt-0.5">1</span>
                            <p class="text-xs text-gray-300"><strong class="text-white">Estado Operacional:</strong> El usuario inicia en un Estado Operacional agregado (Ej.: Alta Volatilidad).</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-800 text-[11px] font-bold flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">2</span>
                            <p class="text-xs text-gray-300"><strong class="text-white">Dimensiones:</strong> El grafo mapea e ilumina automáticamente todas las dimensiones del negocio impactadas.</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="w-5 h-5 rounded-full bg-amber-950 border border-amber-800 text-[11px] font-bold flex items-center justify-center text-amber-400 shrink-0 mt-0.5">3</span>
                            <p class="text-xs text-gray-300"><strong class="text-white">Exploración de Entidades:</strong> Permite explorar el detalle específico (SKUs, Segmentos, Sucursales) dentro de cada dimensión.</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-[11px] font-bold flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">4</span>
                            <p class="text-xs text-gray-300"><strong class="text-white">Señales Analíticas:</strong> Las señales algorítmicas (como los patrones OHLC) explican el porqué matemático detrás de la detección del estado.</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="w-5 h-5 rounded-full bg-gray-900 border border-gray-700 text-[11px] font-bold flex items-center justify-center text-gray-400 shrink-0 mt-0.5">5</span>
                            <p class="text-xs text-gray-300"><strong class="text-white">Métricas de Soporte:</strong> Los KPIs tradicionales cuantifican el comportamiento volumétrico o financiero exacto.</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="w-5 h-5 rounded-full bg-purple-950 border border-purple-800 text-[11px] font-bold flex items-center justify-center text-purple-400 shrink-0 mt-0.5">6</span>
                            <p class="text-xs text-gray-300"><strong class="text-white">Narrativa Contextual:</strong> La IA unifica las relaciones lógicas y genera una explicación en lenguaje natural y recomendaciones de acción.</p>
                        </div>
                    </div>
                </div>




            <div class="bg-[#121829] border border-gray-800 rounded-xl p-5 shadow-xl">
                <h3 class="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4 flex items-center gap-2">
                    <i data-lucide="tag" class="w-4 h-4 text-blue-400"></i> Leyenda de Nodos
                </h3>
                <div class="space-y-3 text-xs">
                    <div class="flex items-center gap-3"><span class="w-3.5 h-3.5 rounded-full bg-blue-600 border border-blue-400 shadow-sm"></span> <span class="text-gray-300 font-medium">Estado Operacional</span></div>
                    <div class="flex items-center gap-3"><span class="w-3.5 h-3.5 rounded-full bg-emerald-600 border border-emerald-400 shadow-sm"></span> <span class="text-gray-300 font-medium">Dimensión Principal</span></div>
                    <div class="flex items-center gap-3"><span class="w-3.5 h-3.5 rounded-full bg-purple-600 border border-purple-400 shadow-sm"></span> <span class="text-gray-300 font-medium">Dimensión Relacionada</span></div>
                    <div class="flex items-center gap-3"><span class="w-3.5 h-3.5 rounded-full bg-amber-500 border border-amber-400 shadow-sm"></span> <span class="text-gray-300 font-medium">Entidades (Detalle)</span></div>
                    <div class="flex items-center gap-3"><span class="w-3.5 h-3.5 rounded-full bg-cyan-600 border border-cyan-400 shadow-sm"></span> <span class="text-gray-300 font-medium">Señales Asociadas</span></div>
                    <div class="flex items-center gap-3"><span class="w-3.5 h-3.5 rounded-full bg-gray-600 border border-gray-400 shadow-sm"></span> <span class="text-gray-300 font-medium">Métricas / KPIs</span></div>
                </div>
            </div>

            <div class="bg-[#121829] border border-gray-800 rounded-xl p-5 shadow-xl">
                <h3 class="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4 flex items-center gap-2">
                    <i data-lucide="navigation" class="w-4 h-4 text-blue-400"></i> Nivel de Navegación
                </h3>
                <div class="relative pl-6 border-l border-gray-800 space-y-4 text-xs">
                    <div id="nav-lvl-1" class="relative border-l-2 border-blue-500 pl-4 transition-all duration-300">
                        <div class="absolute -left-[23px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                        <p class="font-semibold text-blue-400">Estado Operacional</p>
                        <p class="text-gray-400 text-[11px] mt-0.5">Visión agregada del negocio</p>
                    </div>
                    <div id="nav-lvl-2" class="relative pl-4 opacity-50 transition-all duration-300">
                        <div class="absolute -left-[22px] top-0 w-2 h-2 rounded-full bg-gray-600"></div>
                        <p class="font-semibold text-gray-300">Dimensiones Relacionadas</p>
                        <p class="text-gray-500 text-[11px] mt-0.5">Clientes, Productos, Sucursales...</p>
                    </div>
                    <div id="nav-lvl-3" class="relative pl-4 opacity-50 transition-all duration-300">
                        <div class="absolute -left-[22px] top-0 w-2 h-2 rounded-full bg-gray-600"></div>
                        <p class="font-semibold text-gray-300">Entidades (Detalle)</p>
                        <p class="text-gray-500 text-[11px] mt-0.5">SKUs, Segmentos, Tiendas...</p>
                    </div>
                    <div id="nav-lvl-4" class="relative pl-4 opacity-50 transition-all duration-300">
                        <div class="absolute -left-[22px] top-0 w-2 h-2 rounded-full bg-gray-600"></div>
                        <p class="font-semibold text-gray-300">Señales y Métricas</p>
                        <p class="text-gray-500 text-[11px] mt-0.5">Explicación analítica y algorítmica</p>
                    </div>
                    <div id="nav-lvl-5" class="relative pl-4 opacity-50 transition-all duration-300">
                        <div class="absolute -left-[22px] top-0 w-2 h-2 rounded-full bg-gray-600"></div>
                        <p class="font-semibold text-gray-300">Eventos</p>
                        <p class="text-gray-500 text-[11px] mt-0.5">Nivel transaccional (Tickets, Clics)</p>
                    </div>
                </div>
            </div>





                <div class="mt-6 pt-4 border-t border-gray-800 text-[11px] text-gray-400">
                    <p class="font-bold text-gray-300 mb-1">Tipos de Relaciones del Grafo:</p>
                    <ul class="space-y-1">
                        <li class="flex items-center gap-2"><span>---</span> Impacto directo o causalidad</li>
                        <li class="flex items-center gap-2"><span class="text-gray-600">····</span> Correlación / Influencia estadística</li>
                    </ul>
                </div>
            </div>

        </div>

    </main>

    <footer class="border-t border-gray-800 bg-[#090d16] text-center py-4 px-6 text-xs text-gray-500">
        &copy; 2026 RetailMind Platform. Diseñado para la transformación de la analítica de retail cuantitativa y microestructural.
    </footer>


<!-- ==========================================
     CONTENEDOR DE MODALES DE DRILL-DOWN (GLOBAL)
     ========================================== -->
<div id="drillDownModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200" role="dialog" aria-modal="true">
    
    <!-- Tarjeta del Modal -->
    <div class="bg-[#141f30] border border-gray-800 rounded-xl w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] scale-95 transform transition-transform duration-200" id="modalCard">
        
        <!-- Encabezado Dinámico -->
        <div class="p-5 border-b border-gray-800/60 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-2.5">
                <!-- Icono dinámico inyectado por JS -->
                <div id="modalIcon" class="text-[#00cfa8]"></div>
                <div>
                    <h2 id="modalTitle" class="text-sm font-bold uppercase tracking-wider text-white">Título del Modal</h2>
                    <p id="modalSubtitle" class="text-[11px] text-gray-500 mt-0.5">Subtítulo explicativo</p>
                </div>
            </div>
            <!-- Botón Cerrar -->
            <button onclick="closeDrillDownModal()" class="text-gray-400 hover:text-white bg-gray-800/40 hover:bg-gray-800 p-1.5 rounded-lg transition-colors" aria-label="Cerrar modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>

        <!-- Cuerpo Dinámico con Scrollbar personalizado -->
        <div id="modalBody" class="p-5 overflow-y-auto custom-scrollbar text-xs space-y-3 dynamic-modal-content">
            <!-- El contenido simulado de filas se inyectará aquí de forma dinámica -->
        </div>

        <!-- Pie del Modal (Fijo) -->
        <div class="p-4 bg-[#0e1622] border-t border-gray-800/40 rounded-b-xl flex justify-between items-center shrink-0">
            <span class="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Simulación Drill-Down Activa</span>
            <button onclick="closeDrillDownModal()" class="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1.5 rounded-md font-medium text-xs transition-colors">
                Entendido
            </button>
        </div>
    </div>
</div>




<!-- MODAL COMPACTO PARA GLOSARIO DEL TICKER -->
<div id="tickerGlossaryModal"
     class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200"
     role="dialog"
     aria-modal="true">
  <div class="bg-141f30 border border-gray-800 rounded-xl w-full max-w-sm shadow-2xl flex flex-col max-h-[80vh] scale-95 transform transition-transform duration-200">
    <!-- Encabezado -->
    <div class="p-4 border-b border-gray-800/60 flex items-center justify-between">
      <div>
        <p id="tickerGlossaryCategory" class="text-10px uppercase tracking-widest text-blue-400"></p>
        <h2 id="tickerGlossaryTitle" class="text-sm font-bold text-white"></h2>
      </div>
      <button type="button"
              onclick="closeTickerGlossaryModal()"
              class="text-gray-400 hover:text-white bg-gray-800/40 hover:bg-gray-800 px-2 py-1 rounded-md text-xs">
        Cerrar
      </button>
    </div>
    <!-- Cuerpo -->
    <div class="p-4 overflow-y-auto custom-scrollbar text-xs space-y-3">
      <div>
        <p class="text-10px font-semibold text-gray-400 uppercase mb-1">Definición</p>
        <p id="tickerGlossaryDefinition" class="text-gray-300 leading-relaxed"></p>
      </div>
      <div>
        <p class="text-10px font-semibold text-gray-400 uppercase mb-1">Cómo leerlo en el ticker</p>
        <p id="tickerGlossaryHowToRead" class="text-gray-300 leading-relaxed"></p>
      </div>
      <div class="grid grid-cols-2 gap-3 mt-2">
        <div class="bg-101626 border border-gray-800 rounded-lg p-2">
          <p class="text-10px font-semibold text-gray-400 uppercase mb-1">Fórmula base</p>
          <p id="tickerGlossaryFormula" class="font-mono text-c8d8e8 text-11px break-all"></p>
        </div>
        <div class="bg-101626 border border-gray-800 rounded-lg p-2">
          <p class="text-10px font-semibold text-gray-400 uppercase mb-1">Horizonte</p>
          <p id="tickerGlossaryTimeScope" class="text-gray-300 text-11px"></p>
        </div>
      </div>
    </div>
    <!-- Pie -->
    <div class="p-3 bg-0e1622 border-t border-gray-800/40 text-10px text-gray-500 flex justify-between items-center">
      <span class="font-mono uppercase tracking-wider">Glosario del Ticker</span>
      <span class="text-gray-400">Haz clic en cualquier indicador para ver su ficha.</span>
    </div>
  </div>
</div>
	
`;


export default function Page() {
  useEffect(() => {
    // Comprobar que lucide existe en el global
    if (typeof window !== "undefined" && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <>
      <Ticker />
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </>
  );
}
