import { useState, type FormEvent } from "react"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CheckoutModalProps = {
    isOpen: boolean
    onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const { cartItems, clearCart } = useShoppingCart()
    const [step, setStep] = useState<"form" | "success">("form")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [notes, setNotes] = useState("")

    const detailedItems = cartItems
        .map(cartItem => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return item ? { ...item, quantity: cartItem.quantity } : null
        })
        .filter((i): i is NonNullable<typeof i> => i != null)

    const total = detailedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    function handleClose() {
        onClose()
        // Reset for next time, after the close transition
        setTimeout(() => {
            setStep("form")
            setName("")
            setPhone("")
            setCity("")
            setAddress("")
            setNotes("")
        }, 300)
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (!name.trim() || !phone.trim() || !city.trim() || !address.trim()) return
        setStep("success")
        clearCart()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-plum-900/50 backdrop-blur-sm" onClick={handleClose} />

            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-blush-50 rounded-3xl shadow-2xl animate-popIn ring-1 ring-blush-200/70">
                {step === "form" ? (
                    <>
                        <div className="sticky top-0 bg-blush-50/95 backdrop-blur-sm flex items-center justify-between px-6 py-5 border-b border-blush-200 z-10">
                            <h3 className="font-display italic text-2xl text-plum-900">Complete your order</h3>
                            <button
                                onClick={handleClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blush-100 text-plum-600 text-xl leading-none transition-colors"
                                aria-label="Close checkout"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="px-6 py-6">
                            <div className="mb-6">
                                <p className="text-xs tracking-[0.15em] uppercase text-blush-600 font-medium mb-3">
                                    Order summary
                                </p>
                                <div className="rounded-2xl bg-white ring-1 ring-blush-200/70 p-4 flex flex-col gap-3 mb-2">
                                    {detailedItems.map(item => (
                                        <div key={item.id} className="flex items-center gap-3">
                                            <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-[#FDEFE9]">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="mr-auto text-sm text-plum-900">
                                                {item.name} <span className="text-plum-400">×{item.quantity}</span>
                                            </div>
                                            <div className="text-sm text-plum-900 font-medium">
                                                {formatCurrency(item.price * item.quantity)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-baseline px-1">
                                    <span className="text-sm text-plum-400">Total</span>
                                    <span className="font-display text-xl text-plum-900">{formatCurrency(total)}</span>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-xs tracking-[0.15em] uppercase text-blush-600 font-medium mb-2">
                                    Full name
                                </label>
                                <input
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Your name"
                                    className="w-full rounded-xl px-4 py-3 bg-white ring-1 ring-blush-200/70 focus:ring-blush-400 outline-none text-sm text-plum-900 placeholder:text-plum-400/70 transition-shadow"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-xs tracking-[0.15em] uppercase text-blush-600 font-medium mb-2">
                                    Phone number
                                </label>
                                <input
                                    required
                                    type="tel"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder="e.g. 07xx xxx xxx"
                                    className="w-full rounded-xl px-4 py-3 bg-white ring-1 ring-blush-200/70 focus:ring-blush-400 outline-none text-sm text-plum-900 placeholder:text-plum-400/70 transition-shadow"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-xs tracking-[0.15em] uppercase text-blush-600 font-medium mb-2">
                                    City / Area
                                </label>
                                <input
                                    required
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                    placeholder="Your city or area"
                                    className="w-full rounded-xl px-4 py-3 bg-white ring-1 ring-blush-200/70 focus:ring-blush-400 outline-none text-sm text-plum-900 placeholder:text-plum-400/70 transition-shadow"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-xs tracking-[0.15em] uppercase text-blush-600 font-medium mb-2">
                                    Home address / nearby landmark
                                </label>
                                <textarea
                                    required
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    placeholder="Street, building, floor, or a nearby landmark to help the courier find you"
                                    rows={3}
                                    className="w-full rounded-xl px-4 py-3 bg-white ring-1 ring-blush-200/70 focus:ring-blush-400 outline-none text-sm text-plum-900 placeholder:text-plum-400/70 resize-none transition-shadow"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs tracking-[0.15em] uppercase text-blush-600 font-medium mb-2">
                                    Delivery notes <span className="normal-case text-plum-400">(optional)</span>
                                </label>
                                <textarea
                                    value={notes}
                                    onChange={e => setNotes(e.target.value)}
                                    placeholder="Best time to deliver, gift wrap, anything else?"
                                    rows={2}
                                    className="w-full rounded-xl px-4 py-3 bg-white ring-1 ring-blush-200/70 focus:ring-blush-400 outline-none text-sm text-plum-900 placeholder:text-plum-400/70 resize-none transition-shadow"
                                />
                            </div>

                            <div className="flex items-center gap-3 mb-6 rounded-2xl bg-butter-100 ring-1 ring-butter-200 px-4 py-3">
                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-blush-600">
                                        <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H4v-6h16v6zm0-8H4V8h16v.01z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-plum-900 font-medium">Cash on delivery</p>
                                    <p className="text-xs text-plum-400">Pay in cash when your order arrives</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-full bg-plum-900 text-white text-sm font-medium tracking-wide hover:bg-blush-600 transition-colors duration-300"
                            >
                                Place order — {formatCurrency(total)}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="px-8 py-14 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blush-100 flex items-center justify-center animate-popIn">
                            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-blush-600">
                                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                            </svg>
                        </div>
                        <h3 className="font-display italic text-2xl text-plum-900 mb-3">Order placed!</h3>
                        <p className="text-sm text-plum-400 max-w-xs mx-auto leading-relaxed mb-8">
                            Thank you, {name.split(" ")[0] || "friend"}. We'll give you a quick call at {phone} to
                            confirm before it heads your way — pay in cash when it arrives.
                        </p>
                        <button
                            onClick={handleClose}
                            className="px-8 py-3 rounded-full bg-plum-900 text-white text-sm font-medium tracking-wide hover:bg-blush-600 transition-colors duration-300"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
