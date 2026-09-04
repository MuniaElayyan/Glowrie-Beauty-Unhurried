import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `relative px-1 py-2 text-[15px] font-medium tracking-wide transition-colors ${
            isActive ? "text-blush-700" : "text-plum-600 hover:text-blush-600"
        } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-blush-400 after:transition-all after:duration-300 ${
            isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
        }`

    return (
        <nav className="sticky top-0 z-40 bg-blush-50/80 backdrop-blur-md border-b border-blush-200/70 mb-2">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-[72px]">
                    <NavLink to="/" className="font-display italic text-2xl text-plum-900 tracking-tight">
                        Glowrie
                    </NavLink>
                    <div className="hidden sm:flex items-center gap-8">
                        <NavLink to="/" className={linkClass} end>
                            Home
                        </NavLink>
                        <NavLink to="/store" className={linkClass}>
                            Shop
                        </NavLink>
                        <NavLink to="/about" className={linkClass}>
                            About
                        </NavLink>
                    </div>
                    <button
                        onClick={openCart}
                        className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white text-blush-600 shadow-sm ring-1 ring-blush-200 hover:ring-blush-400 hover:text-blush-700 transition-all"
                        aria-label="Open cart"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-[18px] h-[18px]">
                            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        {cartQuantity > 0 && (
                            <div className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-blush-600 text-white text-[11px] font-semibold">
                                {cartQuantity}
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}
