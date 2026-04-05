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
export default function CubicHistory({ history, onSelect }: Props) {
    return (
        <table>
            <tr><th>a</th><th>b</th><th>c</th><th>d</th></tr>
            {history.map((entry, index) => (
                <tr key={index} onClick={() => onSelect(entry)}>
                    <td>{entry.a}</td>
                    <td>{entry.b}</td>
                    <td>{entry.c}</td>
                    <td>{entry.d}</td>
                </tr>
            ))}
        </table>
    )
}