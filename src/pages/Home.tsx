import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
    children: ReactNode
    className?: string
    delay?: number
    as?: keyof JSX.IntrinsicElements
}

export function Reveal({
    children,
    className = "",
    delay = 0,
    as: Tag = "div",
}: RevealProps) {
    const ref = useRef<HTMLElement | null>(null)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const element = ref.current

        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(element)
                }
            },
            {
                threshold: 0.08,
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <Tag
            ref={ref as any}
            className={`transition-all duration-700 ease-out ${
                visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
            } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </Tag>
    )
}
