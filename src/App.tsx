import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
    return (
        <ThemeProvider>
            <ShoppingCartProvider>
                <div className="min-h-screen flex flex-col font-body text-plum-600 bg-white dark:bg-wine-950 dark:text-sand-200 transition-colors duration-300">
                    <Navbar />
                    <div className="max-w-6xl mx-auto px-5 w-full flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/store" element={<Store />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </ShoppingCartProvider>
        </ThemeProvider>
    )
}

export default App
