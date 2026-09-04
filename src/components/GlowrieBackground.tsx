const strips = Array.from({ length: 9 }, (_, i) => `/imgs/hero-bg/strip-${i + 1}.jpg`)

/**
 * خلفية متحركة: أعمدة صور تتحرك بشكل متواصل (فردية للأعلى، زوجية للأسفل)
 * لتحل محل صورة الهيرو الثابتة.
 */
export function GlowrieBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-plum-900">
            <div className="flex h-full w-full">
                {strips.map((src, i) => (
                    <div key={i} className="relative h-full flex-1 overflow-hidden">
                        <div
                            className={i % 2 === 0 ? "strip-track strip-up" : "strip-track strip-down"}
                        >
                            <img src={src} alt="" aria-hidden="true" className="strip-img" />
                            <img src={src} alt="" aria-hidden="true" className="strip-img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
