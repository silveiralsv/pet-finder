import React from "react";

export default function Levi() {
  return (
    <div className="flex items-center justify-center bg-slate-900 w-full h-full">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="border-cyan-100 w-24 h-24 border-2">Foto</div>
        </div>
        <h1 className="text-gray-600 text-2xl">Obrigado por me achar!</h1>
        <p className="text-gray-500">Entre em contato com meus tutores:</p>
        <p className="text-gray-500">Lucas: (11) 96434-3284</p>
        <p className="text-gray-500">Gabriela: (11) 95285-1294 </p>
      </div>
    </div>
  );
}
