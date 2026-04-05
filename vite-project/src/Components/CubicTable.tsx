type CubicResult = {
    p: number
    q: number
    discriminant: number
    roots: (number | string)[]
}

type Props = {
    result: CubicResult
}

export default function CubicTable({result}: Props){
    return(
        <div className="bg-white rounded-xl shadow p-4 w-fit">
            <table className="text-sm">
                <tbody>
                    <tr><td className="text-gray-500 pr-8 py-1">p</td><td className="text-right">{result.p.toFixed(2)}</td></tr>
                    <tr><td className="text-gray-500 pr-8 py-1">q</td><td className="text-right">{result.q.toFixed(2)}</td></tr>
                    <tr><td className="text-gray-500 pr-8 py-1">discriminant</td><td className="text-right">{result.discriminant.toFixed(2)}</td></tr>
                    <tr className="text-white" style={{backgroundColor: 'rgb(0, 142, 61)'}}>
                        <td className="px-4 py-1">Value</td><td className="px-4">x</td><td className="px-4">y</td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 pr-8 py-1">Root 1</td>
                        <td className="text-right">{typeof result.roots[0] === 'number' ? result.roots[0].toFixed(2) : result.roots[0]}</td>
                        <td className="text-right">{typeof result.roots[0] === 'number' ? '0.00' : ''}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 pr-8 py-1">Root 2</td>
                        <td className="text-right">{typeof result.roots[1] === 'number' ? result.roots[1].toFixed(2) : result.roots[1]}</td>
                        <td className="text-right">{typeof result.roots[1] === 'number' ? '0.00' : ''}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 pr-8 py-1">Root 3</td>
                        <td className="text-right">{typeof result.roots[2] === 'number' ? result.roots[2].toFixed(2) : result.roots[2]}</td>
                        <td className="text-right">{typeof result.roots[2] === 'number' ? '0.00' : ''}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}