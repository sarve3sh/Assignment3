type CubicResult= {
    p:number 
    q:number 
    discriminant: number
    roots: (number|string)[]
}
type Props = {
    result: CubicResult
}
export default function CubicTable({result}:Props){
    return(
        <table>
            <tr><td>p</td><td>{result.p.toFixed(2)}</td></tr>
            <tr><td>q</td><td>{result.q.toFixed(2)}</td></tr>
            <tr><td>discriminant</td><td>{result.discriminant.toFixed(2)}</td></tr>
            <tr><td>Root 1</td><td>{typeof result.roots[0] === 'number' ? result.roots[0].toFixed(2) : result.roots[0]}</td></tr>
            <tr><td>Root 2</td><td>{typeof result.roots[1] === 'number' ? result.roots[1].toFixed(2) : result.roots[1]}</td></tr>
            <tr><td>Root 3</td><td>{typeof result.roots[2] === 'number' ? result.roots[2].toFixed(2) : result.roots[2]}</td></tr>
        </table>
    )
}