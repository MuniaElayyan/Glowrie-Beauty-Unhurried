import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
    children: ReactNode
    className?: string
    delay?: number
    as?: "div" | "section"
}

export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const Tag = as
    return (
        <Tag
            ref={ref as any}
            className={`${className} transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        >
            {children}
        </Tag>
    )
}
