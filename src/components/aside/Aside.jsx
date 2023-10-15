

export const Aside = ()=> {

    return (
        <aside className="flex flex-col gap-5 p-2 mt-10">

                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="font-semibold text-sm">Modelo</h4>
                        <strong className="text-xs font-medium text-slate-700">
                            Slim <span>(152)</span>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Wii <span className="tex text-slate-400">(2)</span>
                        </strong> 
                        <strong className="text-xs font-medium text-slate-700">
                            Switc <span className="tex text-slate-400">(1)</span>
                        </strong>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="font-semibold text-sm">Submodelo</h4>
                        <strong className="text-xs font-medium text-slate-700">
                            Slim <span className="tex text-slate-400">(140)</span>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Wii <span className="tex text-slate-400">(25)</span>
                        </strong> 
                        <strong className="text-xs font-medium text-slate-700">
                            Switc <span className="tex text-slate-400">(13)</span>
                        </strong>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="font-semibold text-sm">Condición</h4>
                        <strong className="text-xs font-medium text-slate-700">
                            Nuevo <span>(15)</span>
                        </strong>
                        <strong  className="text-xs font-medium text-slate-700">
                            Usado <span className="tex text-slate-400">(289)</span>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Reacondicionado <span>(6)</span>
                        </strong>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="font-semibold text-sm">Ubicación</h4>
                        <strong className="text-xs font-medium text-slate-700">
                            Capital Federal <sapan>(65)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Bs.As. G.B.A. Sur <sapan className="tex text-slate-400">(46)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Bs.As. G.B.A. Norte <sapan className="tex text-slate-400">(31)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Bs.As. G.B.A. Oeste <sapan className="tex text-slate-400">(30)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Córdoba <sapan className="tex text-slate-400">(27)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Santa Fe <sapan>(26)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Buenos Aires Interior <sapan>(20)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Mendoza <sapan className="tex text-slate-400">(7)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Bs.As. Costa Atlántica <sapan>(7)</sapan>
                        </strong>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="font-semibold text-sm">Costo de envío</h4>
                        <strong className="text-xs font-medium text-slate-700">
                            Hasta $40.000 <span className="tex text-slate-400">(82)</span>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            $400.000 a $65.000 <sapan className="tex text-slate-400">(116)</sapan>
                        </strong>
                        <strong className="text-xs font-medium text-slate-700">
                            Más de $65.000 <sapan className="tex text-slate-400">(112)</sapan>
                        </strong>
                    </div>
                </aside>
    )
}