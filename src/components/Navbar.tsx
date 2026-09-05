import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useTheme } from "../context/ThemeContext"

const NAV_LINKS = [
    { to: "/", label: "Home", end: true },
    { to: "/store", label: "Product", end: false },
    { to: "/looks", label: "Looks", end: false },
    { to: "/about", label: "Story", end: false },
]

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    const { theme, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `relative px-1 py-2 text-[15px] font-medium tracking-wide transition-colors ${
            isActive ? "text-blush-700 dark:text-sand-100" : "text-plum-600 hover:text-blush-600 dark:text-sand-300 dark:hover:text-sand-100"
        } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-blush-400 dark:after:bg-sand-300 after:transition-all after:duration-300 ${
            isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
        }`

    const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block px-4 py-3 rounded-xl text-[15px] font-medium tracking-wide transition-colors ${
            isActive
                ? "bg-blush-100 text-blush-700 dark:bg-wine-800 dark:text-sand-100"
                : "text-plum-600 hover:bg-blush-50 hover:text-blush-600 dark:text-sand-300 dark:hover:bg-wine-800 dark:hover:text-sand-100"
        }`

    const CartButton = (
        <button
            onClick={openCart}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white text-blush-600 shadow-sm ring-1 ring-blush-200 hover:ring-blush-400 hover:text-blush-700 transition-all dark:bg-wine-900 dark:text-sand-200 dark:ring-wine-700 dark:hover:ring-sand-400 dark:hover:text-sand-100"
            aria-label="Open cart"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            {cartQuantity > 0 && (
                <div className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-blush-600 text-white text-[11px] font-semibold dark:bg-sand-300 dark:text-wine-900">
                    {cartQuantity}
                </div>
            )}
        </button>
    )

    const ThemeToggle = (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white text-plum-700 shadow-sm ring-1 ring-blush-200 hover:ring-blush-400 transition-all dark:bg-wine-900 dark:text-sand-200 dark:ring-wine-700 dark:hover:ring-sand-400"
            aria-label="Toggle dark mode"
        >
            {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm9-6a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM6 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm12.36-6.36a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0zM7.76 17.54a1 1 0 0 1 0 1.42l-.7.7a1 1 0 0 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0zm10.6 1.42a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42zM7.06 6.76a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 6.36 4.64l.7.7a1 1 0 0 1 0 1.42zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 13.9 13.9 1 1 0 0 0-.26-3.26z" />
                </svg>
            )}
        </button>
    )

    return (
        <nav className="sticky top-0 z-40 bg-blush-50/80 backdrop-blur-md border-b border-blush-200/70 mb-2 dark:bg-wine-950/85 dark:border-wine-800/70">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-[72px]">
                    <NavLink to="/" className="font-display italic text-2xl text-plum-900 dark:text-sand-100 tracking-tight">
                        Glowrie
                    </NavLink>

                    {/* Desktop center links */}
                    <div className="hidden sm:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.to} to={link.to} className={linkClass} end={link.end}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop cart + theme toggle */}
                    <div className="hidden sm:flex items-center gap-3">
                        {ThemeToggle}
                        {CartButton}
                    </div>

                    {/* Mobile: cart + menu button + theme toggle, right side */}
                    <div className="flex sm:hidden items-center gap-3">
                        {CartButton}
                        <button
                            onClick={() => setMenuOpen((open) => !open)}
                            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white text-plum-700 shadow-sm ring-1 ring-blush-200 hover:ring-blush-400 transition-all dark:bg-wine-900 dark:text-sand-200 dark:ring-wine-700 dark:hover:ring-sand-400"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[18px] h-[18px]">
                                {menuOpen ? (
                                    <path d="M6 6L18 18M6 18L18 6" />
                                ) : (
                                    <path d="M4 7H20M4 12H20M4 17H20" />
                                )}
                            </svg>
                        </button>
                        {ThemeToggle}
                    </div>
                </div>

                {/* Mobile dropdown links */}
                {menuOpen && (
                    <div className="sm:hidden pb-4 -mt-1 animate-riseIn">
                        <div className="flex flex-col gap-1 bg-white rounded-2xl ring-1 ring-blush-200/70 shadow-sm p-2 dark:bg-wine-900 dark:ring-wine-700/70">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.end}
                                    className={mobileLinkClass}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
