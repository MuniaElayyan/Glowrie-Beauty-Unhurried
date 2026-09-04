import { useState } from "react"
import { CartItem } from "./CartItem"
import { CheckoutModal } from "./CheckoutModal"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

    const total = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)

    return (
        <>
            <div
                onClick={closeCart}
                className={`fixed inset-0 bg-plum-900/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-blush-50 z-50 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] flex flex-col ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-blush-200">
                    <h5 className="font-display italic text-xl text-plum-900">Your bag</h5>
                    <button
                        onClick={closeCart}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blush-100 text-plum-600 text-xl leading-none transition-colors"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-5 overflow-y-auto flex-1">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-plum-400 text-sm mt-16">
                            Your bag is empty for now.
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {cartItems.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="px-5 py-4 border-t border-blush-200">
                        <div className="flex justify-between items-baseline mb-4">
                            <span className="text-sm text-plum-400">Total</span>
                            <span className="font-display text-xl text-plum-900">{formatCurrency(total)}</span>
                        </div>
                        <button
                            onClick={() => setIsCheckoutOpen(true)}
                            className="w-full py-3 rounded-full bg-plum-900 text-white text-sm font-medium tracking-wide hover:bg-blush-600 transition-colors duration-300"
                        >
                            Place order
                        </button>
                    </div>
                )}
            </div>

            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </>
    )
}
