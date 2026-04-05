import {useRef, useEffect} from 'react'

type Props ={
    a:number
    b:number 
    c:number 
    d:number
    roots: (number|string)[]
}

export default function CubicGraph({a,b,c,d,roots}: Props) {
    const canvasRef= useRef<HTMLCanvasElement>(null)
    
    useEffect(() =>{
        const canvas=canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const w = canvas.width
        const h = canvas.height
        const scale = 50
        const cx = w / 2  
        const cy = h / 2  


        ctx.strokeStyle = '#ddd'
        ctx.lineWidth = 1
        for (let i = 0; i < w; i += scale) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke()
        }
        for (let i = 0; i < h; i += scale) {
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke()
        }


        ctx.strokeStyle = '#000'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(cx, 0); ctx.lineTo(cx, h) 
        ctx.moveTo(0, cy); ctx.lineTo(w, cy)  
        ctx.stroke()


        ctx.strokeStyle = '#7f0000'
        ctx.lineWidth = 2
        ctx.beginPath()
        for (let px = 0; px < w; px++) {
            const x = (px - cx) / scale
            const y = a*x**3 + b*x**2 + c*x + d
            const py = cy - y * scale
            if (px === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
        }
        ctx.stroke()


        roots.forEach(root => {
            if (typeof root === 'number') {
                const px = cx + root * scale
                const py = cy  
                ctx.beginPath()
                ctx.arc(px, py, 5, 0, Math.PI * 2)
                ctx.fillStyle = '#00fa1d'
                ctx.fill()
                ctx.strokeStyle = '#000'
                ctx.lineWidth = 1
                ctx.stroke()
            }
        })
                


    },[a,b,c,d])

    return(
        <canvas ref ={canvasRef} width={500} height={400}/>
    )


}