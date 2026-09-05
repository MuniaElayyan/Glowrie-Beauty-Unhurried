import { Reveal } from "../components/Reveal"
import storeItems from "../data/items.json"
import { useShoppingCart } from "../context/ShoppingCartContext"

const LOOKS = [
    {
        id: 5,
        title: "Barely There",
        subtitle: "Soft-focus skin with a peachy finish",
        image: "/imgs/looks/look-05.png",
        products: [3, 44, 49, 24, 23, 19, 12],
    },
    {
        id: 2,
        title: "Rose Glass",
        subtitle: "Fresh skin, rosy eyes, glossy lips",
        image: "/imgs/looks/look-02.png",
        products: [1, 41, 46, 24, 9, 39, 27],
    },
    {
        id: 3,
        title: "Soft Blush",
        subtitle: "Warm, delicate & effortlessly polished",
        image: "/imgs/looks/look-03.png",
        products: [2, 42, 47, 24, 23, 19, 25],
    },
    {
        id: 4,
        title: "Golden Night",
        subtitle: "Deep glow, luminous lids & berry lips",
        image: "/imgs/looks/look-04.png",
        products: [6, 43, 48, 10, 8, 39, 15],
    },
    {
        id: 1,
        title: "Midnight Siren",
        subtitle: "Smoky, sculpted & unapologetic",
        image: "/imgs/looks/look-01.png",
        products: [5, 40, 45, 10, 8, 19, 28],
    },
]

const STEP_LABELS = ["Primer", "Foundation", "Blush", "Eyeshadow", "Mascara", "Beauty blender", "Lips"]

export function Looks() {
    const { increaseCartQuantity } = useShoppingCart()

    const getItem = (id: number) => storeItems.find(item => item.id === id)

    const addFullLook = (ids: number[]) => ids.forEach(id => increaseCartQuantity(id))

    return (
        <div className="pb-24">
            <section className="pt-12 pb-12 text-center max-w-2xl mx-auto">
                <Reveal>
                    <p className="text-xs tracking-[0.25em] text-blush-600 dark:text-sand-300 font-medium mb-3 uppercase">the glowrie lookbook</p>
                    <h1 className="font-display text-4xl sm:text-6xl text-plum-900 dark:text-sand-100 mb-5">One face. Seven little decisions.</h1>
                </Reveal>
            </section>

            <div className="space-y-16">
                {LOOKS.map((look, index) => {
                    const products = look.products.map(getItem).filter(Boolean)
                    const total = products.reduce((sum, item) => sum + (item?.price ?? 0), 0)

                    return (
                        <Reveal key={look.id} delay={index * 70} className="rounded-[2rem] overflow-hidden bg-white dark:bg-sand-100 ring-1 ring-blush-200/70 dark:ring-wine-700/60 shadow-sm">
                            <div className="grid lg:grid-cols-[minmax(320px,0.9fr)_1.1fr]">
                                <div className="relative min-h-[430px] lg:min-h-[620px] bg-[#FDEFE9] dark:bg-sand-200 overflow-hidden">
                                    <img src={look.image} alt={look.title} className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-plum-900/65 via-transparent to-transparent" />
                                    <div className="absolute left-6 right-6 bottom-6 text-white">
                                        <p className="text-[10px] tracking-[0.25em] uppercase text-blush-200 mb-2">look {String(look.id).padStart(2, "0")}</p>
                                        <h2 className="font-display text-3xl sm:text-4xl">{look.title}</h2>
                                        <p className="text-white/80 text-sm mt-1">{look.subtitle}</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 lg:p-10">
                                    <div className="flex items-start justify-between gap-4 mb-7">
                                        <div>
                                            <p className="text-xs tracking-[0.2em] text-blush-600 dark:text-wine-600 uppercase font-semibold">complete edit</p>
                                            <h3 className="font-display text-2xl text-plum-900 mt-1">Everything for this look</h3>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-xs text-plum-400">full look</p>
                                            <p className="text-lg font-semibold text-plum-900">${total.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {products.map((product, productIndex) => product && (
                                            <div key={product.id} className="rounded-2xl bg-blush-50/70 dark:bg-wine-900/50 ring-1 ring-blush-200/60 dark:ring-wine-700/50 p-3 flex items-center gap-3">
                                                <div className="w-16 h-16 shrink-0 rounded-xl bg-white dark:bg-sand-200 flex items-center justify-center overflow-hidden ring-1 ring-blush-100 dark:ring-wine-700">
                                                    <img src={product.image} alt={product.name} className="max-w-[82%] max-h-[82%] object-contain" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] uppercase tracking-wider text-blush-600 dark:text-sand-300 font-semibold">{STEP_LABELS[productIndex]}</p>
                                                    <p className="text-sm font-medium text-plum-900 dark:text-wine-950 leading-snug mt-0.5">{product.name}</p>
                                                    <p className="text-xs text-plum-400 mt-0.5">${product.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => addFullLook(look.products)}
                                        className="w-full mt-6 py-3.5 rounded-full bg-plum-900 text-white text-sm font-medium tracking-wide hover:bg-blush-600 transition-colors duration-300 dark:bg-wine-600 dark:hover:bg-wine-500"
                                    >
                                        Add this full look to bag
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </div>
    )
}
