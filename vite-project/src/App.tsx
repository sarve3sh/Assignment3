import {useState} from 'react'
import CubicInput from './Components/CubicInput'
import CubicEquation from './Components/CubicEquation'
import CubicTable from './Components/CubicTable'
import CubicGraph from './Components/CubicGraph'
import CubicHistory, {type HistoryEntry} from './Components/CubicHistory'

function solveCubic(a: number, b: number, c: number, d: number){
    const p = ((3 * a * c - b ** 2) / (3 * a ** 2))
    const q = ((27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3))
    const discriminant = (q / 2) ** 2 + (p / 3) ** 3    
    let roots:(number|string)[]=[]
    if (discriminant < 0) { //case A Trignometric method
        const k = 2*Math.sqrt(-p/3)
        const theta = (1/3)*Math.acos(-q/(k/2)**3)

        const y1 = k*Math.cos(theta)
        const y2 = k*Math.cos(theta+(2*Math.PI/3))
        const y3 = k*Math.cos(theta+(4*Math.PI/3))

        const x1 = y1-(b/(3*a))
        const x2 = y2-(b/(3*a))
        const x3 = y3-(b/(3*a))
        return { p, q, discriminant, roots: [x1, x2, x3] }
     }
    else if (discriminant === 0) {
        if(p==0&&q==0){
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a))
        return {p,q, discriminant, roots:[x1,x1,x1]}
        }
        else{
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a)) //finds both x1 and x3
        const x2 = Math.cbrt(q/2)-(b/(3*a))
        return {p,q, discriminant, roots:[x1,x1,x2]}
        }
     }
    else { 
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a))
        return {p,q, discriminant, roots:[x1,"Complex Number","Complex Number"]}    
    }
}
function App(){
  const[a, setA] = useState<number>(0)
  const[b, setB] = useState<number>(0)
  const[c, setC] = useState<number>(0)
  const[d, setD] = useState<number>(0)
  const[history, setHistory] = useState<HistoryEntry[]>([])
  const handleSelect= (entry:HistoryEntry) =>{
    setA(entry.a)
    setB(entry.b)
    setC(entry.c)
    setD(entry.d)
  }
  const Save= () => {
    setHistory([...history,{a,b,c,d}])
  console.log(a,b,c,d)
}
  const result=solveCubic(a,b,c,d)
  return(
   <div>
    <h1>Cubic Solver</h1>
    <CubicInput a={a} b={b} c={c} d={d} setA={setA} setB={setB} setC={setC} setD={setD}
    onSave={Save} />
    <CubicEquation a={a} b = {b} c={c} d={d}/>
    <CubicTable result={result}/>
    <CubicGraph a={a} b={b} c={c} d={d} roots={result.roots}/>
    <CubicHistory history ={history} onSelect={handleSelect}/>
   </div>
  )
}
export default App
