export type HistoryEntry = {
    a: number
    b: number
    c: number
    d: number
}

type Props = {
    history: HistoryEntry[]
    onSelect: (entry: HistoryEntry) => void
}

export default function CubicHistory({history, onSelect}: Props){
    return(
        <div className="bg-white rounded-xl shadow p-4 w-fit h-fit">
            <h2 className="font-light mb-2">History</h2>
            <table className="text-sm">
                <thead>
                    <tr style={{backgroundColor: 'rgb(0, 142, 61)'}} className="text-white">
                        <th className="px-4 py-1">a</th>
                        <th className="px-4 py-1">b</th>
                        <th className="px-4 py-1">c</th>
                        <th className="px-4 py-1">d</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((entry, index) => (
                        <tr key={index} onClick={() => onSelect(entry)} className="cursor-pointer hover:bg-gray-100 border-b border-gray-100">
                            <td className="px-4 py-1 text-center">{entry.a}</td>
                            <td className="px-4 py-1 text-center">{entry.b}</td>
                            <td className="px-4 py-1 text-center">{entry.c}</td>
                            <td className="px-4 py-1 text-center">{entry.d}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}