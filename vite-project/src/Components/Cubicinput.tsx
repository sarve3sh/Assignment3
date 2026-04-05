type Input = {
    a: number
    b: number
    c: number
    d: number
    setA: (value:number)=> void
    setB: (value:number)=> void
    setC: (value:number)=> void
    setD: (value:number)=> void
    onSave: () => void
}

export default function CubicInput({a,b,c,d, setA, setB, setC, setD}:Input){
    return(
        <div>
        <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))}/>
        <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))}/>
        <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))}/>
        <input type="number" value={d} onChange={(e) => setD(Number(e.target.value))}/>
        </div>
    ) 
}