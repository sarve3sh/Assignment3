type Input = {
    a: number
    b: number
    c: number
    d: number
    setA: (value: number) => void
    setB: (value: number) => void
    setC: (value: number) => void
    setD: (value: number) => void
    onSave: () => void
}

export default function CubicInput({a, b, c, d, setA, setB, setC, setD, onSave}: Input){
    return(
        <div className="flex flex-row items-end gap-4">
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">a-value:</label>
                <input className="border border-gray-300 rounded-md p-2 w-28 text-center" type="number" value={a} onChange={(e) => setA(Number(e.target.value))}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">b-value:</label>
                <input className="border border-gray-300 rounded-md p-2 w-28 text-center" type="number" value={b} onChange={(e) => setB(Number(e.target.value))}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">c-value:</label>
                <input className="border border-gray-300 rounded-md p-2 w-28 text-center" type="number" value={c} onChange={(e) => setC(Number(e.target.value))}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">d-value:</label>
                <input className="border border-gray-300 rounded-md p-2 w-28 text-center" type="number" value={d} onChange={(e) => setD(Number(e.target.value))}/>
            </div>
            <button 
                className="px-6 py-2 rounded-lg text-white font-light transition-all hover:opacity-80"
                style={{backgroundColor: 'rgb(0, 142, 61)'}}
                onClick={onSave}>
                Save
            </button>
        </div>
    ) 
}