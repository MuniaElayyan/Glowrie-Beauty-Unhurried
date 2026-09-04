import { Link } from "react-router-dom"
import { Reveal } from "../components/Reveal"
import { GlowrieBackground } from "../components/GlowrieBackground"
import storeItems from "../data/items.json"

const CATEGORY_CARDS = [
    { key: "eyes", label: "Eyes", blurb: "Liners, shadow, mascara", shade: "#8F63C9", image: "/imgs/categories/eyes-collection.jpg" },
    { key: "face", label: "Face", blurb: "Primer, base, glow", shade: "#EFA8C8", image: "/imgs/categories/face-collection.jpg" },
    { key: "lips", label: "Lips", blurb: "Gloss, stain, matte", shade: "#C6407A", image: "/imgs/categories/lips-collection.jpg" },
    { key: "tools", label: "Tools", blurb: "Brushes and sponges", shade: "#FBDE87", image: "/imgs/categories/tools-collection.jpg" },
]

const LIFE_STRIP = storeItems.map(item => ({
    src: item.image,
    alt: item.name,
}))

const HERO_BADGES = [
    { label: "39 products to explore", position: "top-6 left-6 sm:left-10", delay: "0s" },
    { label: "Cruelty-free always", position: "bottom-24 sm:bottom-28 left-6 sm:left-10", delay: "1s" },
]

export function Home() {
    const featured = storeItems.slice(0, 4)

    return (
        <div>
            {/* Hero — full-bleed image with layered animated text */}
            <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden min-h-[560px] sm:min-h-[680px] flex items-end">
                <div className="absolute inset-0 overflow-hidden">
                    <GlowrieBackground />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-900/85 via-plum-900/25 to-plum-900/10 dark:from-wine-950/90 dark:via-wine-950/35 dark:to-wine-950/10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-plum-900/30 via-transparent to-transparent dark:from-wine-950/40" />
                </div>

                {HERO_BADGES.map(badge => (
                    <div
                        key={badge.label}
                        className={`hidden sm:flex absolute ${badge.position} items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-sand-100/95 backdrop-blur-sm shadow-lg animate-floaty`}
                        style={{ animationDelay: badge.delay }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blush-500 dark:bg-wine-600" />
                        <span className="text-xs font-medium text-plum-900 tracking-wide">{badge.label}</span>
                    </div>
                ))}

                <div className="relative max-w-6xl mx-auto px-5 pb-14 sm:pb-20 pt-32 w-full">
                    <div className="max-w-xl">
                        <Reveal>
                            <p className="text-xs tracking-[0.25em] text-blush-200 font-medium mb-4 uppercase">
                                makeup, made unserious
                            </p>
                        </Reveal>
                        <Reveal delay={120}>
                            <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-white mb-6 drop-shadow-sm">
                                Color that feels like <span className="italic text-blush-200">you</span> on a good day.
                            </h1>
                        </Reveal>
                        <Reveal delay={240}>
                            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                                Thirty-nine products, four categories, and not one thing here takes itself too seriously.
                                Pick your shade, build your bag, glow accordingly.
                            </p>
                        </Reveal>
                        <Reveal delay={360}>
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/store"
                                    className="px-7 py-3.5 rounded-full bg-white text-plum-900 text-sm font-medium tracking-wide hover:bg-blush-100 dark:hover:bg-sand-200 transition-colors duration-300 shadow-lg"
                                >
                                    Shop the edit
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-sm text-white/90 hover:text-white transition-colors underline underline-offset-4 decoration-white/40"
                                >
                                    Our story
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-white/70 animate-floaty">
                    <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/70">
                        <path d="M12 16.5 4.5 9l1.4-1.4L12 13.7l6.1-6.1L19.5 9z" />
                    </svg>
                </div>
            </section>

            {/* Category strip */}
            <section className="pt-14 pb-16">
                <Reveal as="div" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {CATEGORY_CARDS.map((cat, i) => (
                        <Link
                            key={cat.key}
                            to="/store"
                            className="group relative rounded-2xl h-40 flex flex-col justify-end overflow-hidden ring-1 ring-blush-200/70 hover:ring-blush-400 dark:ring-wine-700/70 dark:hover:ring-sand-400 transition-all duration-300 hover:-translate-y-1"
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            <img
                                src={cat.image}
                                alt={cat.label}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 transition-opacity duration-300"
                                style={{ background: `linear-gradient(180deg, ${cat.shade}00 30%, rgba(52,31,48,0.78) 100%)` }}
                            />
                            <div className="relative p-5">
                                <span className="font-display text-xl text-white drop-shadow-sm">{cat.label}</span>
                                <span className="block text-xs text-white/80">{cat.blurb}</span>
                            </div>
                        </Link>
                    ))}
                </Reveal>
            </section>

            {/* Life strip — real product texture in motion */}
            <section className="pb-16 -mx-5 px-5 overflow-hidden">
                <Reveal>
                    <p className="text-xs tracking-[0.2em] text-blush-600 dark:text-sand-300 font-medium mb-4 text-center">
                        a peek behind the products
                    </p>
                </Reveal>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-blush-50 dark:from-wine-950 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-blush-50 dark:from-wine-950 to-transparent z-10" />
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...LIFE_STRIP, ...LIFE_STRIP].map((item, i) => (
                            <div
                                key={i}
                                className="w-40 h-52 sm:w-48 sm:h-60 mx-2.5 rounded-2xl overflow-hidden ring-1 ring-blush-200/70 dark:ring-wine-700/60 shrink-0 shadow-sm"
                            >
                                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-contain bg-[#FDEFE9] dark:bg-sand-200 p-3 transition-transform duration-500 hover:scale-105" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaser */}
            <section className="pb-20">
                <Reveal className="rounded-3xl overflow-hidden ring-1 ring-blush-200/70 dark:ring-wine-700/60 relative">
                    <div className="aspect-video relative overflow-hidden bg-plum-900 dark:bg-wine-950">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                            poster="/imgs/story/story-framed-glosses.jpg"
                            aria-label="Glowrie beauty collection teaser"
                        >
                            <source src="/video/beauty-teaser.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-900/55 dark:from-wine-950/65 via-transparent to-transparent" />
                        <p className="pointer-events-none absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto font-display italic text-xl sm:text-2xl text-white drop-shadow-md">
                            Watch the full collection in motion
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* Featured products */}
            <section className="pb-20">
                <Reveal className="flex items-end justify-between mb-6">
                    <h2 className="font-display text-3xl text-plum-900 dark:text-sand-100">A few favorites</h2>
                    <Link to="/store" className="text-sm text-blush-600 hover:text-blush-700 dark:text-sand-300 dark:hover:text-sand-100 transition-colors">
                        View all →
                    </Link>
                </Reveal>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {featured.map((item, i) => (
                        <Reveal key={item.id} delay={i * 80}>
                            <Link
                                to="/store"
                                className="group block rounded-2xl bg-white dark:bg-sand-100 ring-1 ring-blush-200/70 dark:ring-wine-700/60 overflow-hidden hover:-translate-y-1 hover:ring-blush-400 dark:hover:ring-sand-400 hover:shadow-[0_18px_38px_-18px_rgba(198,64,122,0.35)] transition-all duration-300"
                            >
                                <div className="h-40 flex items-center justify-center overflow-hidden bg-[#FDEFE9] dark:bg-sand-200">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="max-w-[76%] max-h-[80%] w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-plum-900 font-medium leading-snug">{item.name}</p>
                                    <p className="text-xs text-plum-400 mt-0.5">${item.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    )
}
