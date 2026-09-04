import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
    return (
        <ShoppingCartProvider>
            <div className="min-h-screen flex flex-col font-body text-plum-600">
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
    )
}

export default App
