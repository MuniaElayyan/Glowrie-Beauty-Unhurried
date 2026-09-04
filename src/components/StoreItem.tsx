import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    price: number
    category: string
    tagline: string
    image: string
    description?: string
    usage?: string
}

export function StoreItem({ id, name, price, category, tagline, image }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <div className="group h-full flex flex-col rounded-2xl bg-white ring-1 ring-blush-200/70 overflow-hidden transition-all duration-300 hover:ring-blush-400 hover:-translate-y-1 hover:shadow-[0_18px_38px_-18px_rgba(198,64,122,0.35)]">
            <div
                className="h-48 sm:h-52 flex items-center justify-center overflow-hidden relative bg-[#FDEFE9]"
                aria-label={name}
            >
                <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/85 text-lilac-500 backdrop-blur-sm capitalize">
                    {category}
                </span>
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="max-w-[68%] max-h-[74%] w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col flex-1 p-5">
                <div className="mb-3">
                    <div className="flex justify-between items-start gap-2">
                        <span className="font-display text-lg text-plum-900 leading-snug">{name}</span>
                        <span className="shrink-0 text-plum-600 font-semibold">{formatCurrency(price)}</span>
                    </div>
                    <p className="text-sm text-plum-400 mt-1">{tagline}</p>
                </div>

                <div className="mt-auto pt-2">
                    {quantity === 0 ? (
                        <button
                            className="w-full py-2.5 rounded-full bg-plum-900 text-white text-sm font-medium tracking-wide hover:bg-blush-600 transition-colors duration-300"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            Add to bag
                        </button>
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center gap-3 w-full">
                                <button
                                    className="w-8 h-8 rounded-full bg-blush-100 text-plum-900 hover:bg-blush-200 transition-colors"
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    −
                                </button>
                                <div className="text-sm text-plum-600">
                                    <span className="font-semibold text-plum-900">{quantity}</span> in bag
                                </div>
                                <button
                                    className="w-8 h-8 rounded-full bg-blush-100 text-plum-900 hover:bg-blush-200 transition-colors"
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="text-xs text-plum-400 hover:text-blush-600 underline underline-offset-2 transition-colors"
                                onClick={() => removeFromCart(id)}
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
