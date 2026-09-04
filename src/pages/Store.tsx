import { useMemo, useState } from "react"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import { Reveal } from "../components/Reveal"

const CATEGORIES = [
    { key: "all", label: "All" },
    { key: "eyes", label: "Eyes" },
    { key: "face", label: "Face" },
    { key: "lips", label: "Lips" },
    { key: "tools", label: "Tools" },
]

export function Store() {
    const [active, setActive] = useState("all")

    const filtered = useMemo(
        () => (active === "all" ? storeItems : storeItems.filter(item => item.category === active)),
        [active]
    )

    return (
        <div className="pb-20">
            <div className="pt-10 pb-8 text-center max-w-xl mx-auto">
                <p className="text-xs tracking-[0.2em] text-blush-600 dark:text-sand-300 font-medium mb-2">the full edit</p>
                <h1 className="font-display text-4xl sm:text-5xl text-plum-900 dark:text-sand-100 mb-3">Shop everything</h1>
                <p className="text-plum-400 dark:text-sand-400 text-sm">
                    Thirty-nine pieces, four categories, no filler. Pick a favorite and go.
                </p>
            </div>

            <div className="flex justify-center gap-2 flex-wrap mb-10 sticky top-[72px] z-30 py-3 bg-blush-50/90 dark:bg-wine-950/90 backdrop-blur-sm">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.key}
                        onClick={() => setActive(cat.key)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            active === cat.key
                                ? "bg-plum-900 text-white shadow-md dark:bg-sand-200 dark:text-wine-900"
                                : "bg-white text-plum-600 ring-1 ring-blush-200 hover:ring-blush-400 dark:bg-wine-900 dark:text-sand-300 dark:ring-wine-700 dark:hover:ring-sand-400"
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((item, i) => (
                    <Reveal key={item.id} delay={Math.min(i, 8) * 60}>
                        <StoreItem {...item} />
                    </Reveal>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-center text-plum-400 dark:text-sand-400 mt-16">Nothing here yet — check back soon.</p>
            )}
        </div>
    )
}
