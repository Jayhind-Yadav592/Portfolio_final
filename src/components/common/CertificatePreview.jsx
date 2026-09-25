import React from 'react'

export default function CertificatePreview({ type }) {
  switch (type) {
    // 1. TCS iON Career Edge
    case 'tcs-career-edge':
      return (
        <div className="w-full h-full bg-amber-50/60 p-2.5 sm:p-3 flex items-center justify-center select-none font-serif">
          {/* Framed Certificate Document */}
          <div className="w-full h-full bg-white rounded-md border-2 border-slate-900 shadow-sm p-3 flex flex-col justify-between relative overflow-hidden text-center">
            {/* Inner Border */}
            <div className="absolute inset-1 border border-slate-300 pointer-events-none rounded-xs" />

            {/* Certificate Header */}
            <div className="flex items-center justify-between z-10 border-b border-slate-100 pb-1">
              <div className="flex items-center gap-1 font-sans">
                <span className="text-rose-600 font-extrabold text-[11px] tracking-tight">tcs</span>
                <span className="text-blue-950 font-bold text-[11px]">iON</span>
              </div>
              <span className="text-[8px] font-sans font-semibold text-slate-400 uppercase tracking-widest">
                CERTIFICATE OF COMPLETION
              </span>
            </div>

            {/* Certificate Body */}
            <div className="my-auto z-10 py-1">
              <div className="text-[8px] font-sans text-slate-400 uppercase tracking-wider mb-0.5">
                This is to certify that
              </div>
              <div className="text-xs font-bold text-slate-900 font-sans tracking-wide">
                Jayhind Yadav
              </div>
              <div className="text-[8px] text-slate-500 my-0.5">
                has successfully achieved
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-blue-900 font-serif leading-tight">
                Career Edge – Young Professional
              </div>
            </div>

            {/* Footer Signatures & Gold Seal */}
            <div className="flex items-end justify-between z-10 pt-1 border-t border-slate-100">
              <div className="text-left">
                <div className="w-10 h-0.5 bg-slate-400 mb-0.5" />
                <div className="text-[7px] font-sans text-slate-400">Authorized Signatory</div>
              </div>

              {/* Gold Ribbon Seal */}
              <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center text-[7px] font-bold text-amber-950 shadow-2xs">
                ★
              </div>

              <div className="text-right">
                <div className="w-10 h-0.5 bg-slate-400 mb-0.5 ml-auto" />
                <div className="text-[7px] font-sans text-slate-400">TCS iON Verified</div>
              </div>
            </div>
          </div>
        </div>
      )

    // 2. TCS NQT
    case 'tcs-nqt':
      return (
        <div className="w-full h-full bg-sky-50/50 p-2.5 sm:p-3 flex items-center justify-center select-none font-sans">
          <div className="w-full h-full bg-white rounded-md border-2 border-slate-900 shadow-sm p-3 flex flex-col justify-between relative overflow-hidden text-center">
            <div className="absolute inset-1 border border-blue-200 pointer-events-none rounded-xs" />

            {/* Header */}
            <div className="flex items-center justify-between z-10 border-b border-slate-100 pb-1">
              <div className="flex items-center gap-1">
                <span className="text-blue-950 font-black text-xs tracking-wider">NQT</span>
                <span className="text-[8px] font-mono text-slate-400">Scorecard</span>
              </div>
              <span className="text-[8px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                Cognitive Verified
              </span>
            </div>

            {/* Body */}
            <div className="my-auto z-10 py-1">
              <div className="text-[8px] text-slate-400 uppercase tracking-wider mb-0.5">
                National Qualifier Test
              </div>
              <div className="text-xs font-bold text-slate-900 tracking-wide">
                Jayhind Yadav
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-indigo-900 mt-0.5">
                Cognitive Skills Assessment
              </div>
              <div className="text-[8px] text-slate-500 font-mono mt-0.5">
                Numerical · Verbal · Reasoning
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between z-10 pt-1 border-t border-slate-100">
              <div className="text-left">
                <div className="text-[7px] text-slate-400">Assessment ID: NQT-2025</div>
              </div>
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[7px] font-bold">
                ✓
              </div>
              <div className="text-right">
                <div className="text-[7px] text-slate-400">TCS National Qualifier</div>
              </div>
            </div>
          </div>
        </div>
      )

    // 3. iON Digital Hub
    case 'ion-digital-hub':
      return (
        <div className="w-full h-full bg-amber-100/40 p-2.5 sm:p-3 flex items-center justify-center select-none font-sans">
          <div className="w-full h-full bg-white rounded-md border-2 border-slate-900 shadow-sm p-3 flex flex-col justify-between relative overflow-hidden text-center">
            <div className="absolute inset-1 border border-amber-300 pointer-events-none rounded-xs" />

            {/* Header */}
            <div className="flex items-center justify-between z-10 border-b border-slate-100 pb-1">
              <span className="text-amber-600 font-black text-xs font-mono">iON</span>
              <span className="text-[8px] font-semibold text-amber-900 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                Digital Learning Hub
              </span>
            </div>

            {/* Body */}
            <div className="my-auto z-10 py-1">
              <div className="text-[8px] text-slate-400 uppercase tracking-wider mb-0.5">
                Professional Certificate
              </div>
              <div className="text-xs font-bold text-slate-900">
                Jayhind Yadav
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 mt-0.5">
                iON Digital Hub Certification
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between z-10 pt-1 border-t border-slate-100">
              <div className="text-left text-[7px] text-slate-400">TCS iON Hub</div>
              <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[7px] font-bold shadow-2xs">
                ★
              </div>
              <div className="text-right text-[7px] text-slate-400">Official Credential</div>
            </div>
          </div>
        </div>
      )

    // 4. IBM Web Development Fundamentals
    case 'ibm-web-dev':
    default:
      return (
        <div className="w-full h-full bg-blue-50/60 p-2.5 sm:p-3 flex items-center justify-center select-none font-sans">
          <div className="w-full h-full bg-white rounded-md border-2 border-slate-900 shadow-sm p-3 flex flex-col justify-between relative overflow-hidden text-center">
            <div className="absolute inset-1 border border-blue-300 pointer-events-none rounded-xs" />

            {/* Header */}
            <div className="flex items-center justify-between z-10 border-b border-slate-100 pb-1">
              <div className="font-mono font-black text-blue-700 tracking-tighter text-xs">
                IBM
              </div>
              <span className="text-[8px] font-semibold text-blue-800 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">
                Official Certification
              </span>
            </div>

            {/* Body */}
            <div className="my-auto z-10 py-1">
              <div className="text-[8px] text-slate-400 uppercase tracking-wider mb-0.5">
                Course Certificate
              </div>
              <div className="text-xs font-bold text-slate-900">
                Jayhind Yadav
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-blue-950 mt-0.5 leading-tight">
                Web Development Fundamentals
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between z-10 pt-1 border-t border-slate-100">
              <div className="text-left text-[7px] text-slate-400">IBM SkillsBuild</div>
              <div className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-[7px] font-bold">
                IBM
              </div>
              <div className="text-right text-[7px] text-slate-400">Verified Badge</div>
            </div>
          </div>
        </div>
      )
  }
}
