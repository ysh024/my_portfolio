import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090A0F]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-400 animate-pulse flex items-center justify-center font-bold text-white shadow-xl shadow-indigo-500/20">
          Y
        </div>
        <span className="text-xs font-mono text-zinc-500 animate-pulse">
          Loading Yash.dev...
        </span>
      </div>
    </div>
  );
}
