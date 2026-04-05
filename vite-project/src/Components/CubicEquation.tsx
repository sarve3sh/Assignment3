type CubicEquation = {
        a: number
        b: number
        c: number
        d: number
}

export default function CubicEquation({ a, b, c, d }:CubicEquation) {
        return (
                <p>{a}x³+{b}x²+{c}x+{d}=0</p>
        )
}