import { Reveal } from "../components/Reveal"

const STUDIO_STRIP = [
    { src: "/imgs/studio/studio-01.png", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-02.png", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-03.jpeg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-04.jpeg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-05.jpeg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-06.jpeg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-07.jpeg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-08.jpg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-09.jpg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-10.jpg", alt: "Glowrie studio beauty arrangement" },
    { src: "/imgs/studio/studio-11.jpg", alt: "Glowrie studio beauty arrangement" },
]

export function About() {
    return (
        <div className="pb-24">
            <section className="pt-12 pb-14 grid md:grid-cols-2 gap-10 items-center">
                <Reveal>
                    <p className="text-xs tracking-[0.2em] text-blush-600 font-medium mb-3">our story</p>
                    <h1 className="font-display text-4xl sm:text-5xl text-plum-900 mb-6 leading-tight">
                        We built Glowrie for the ten minutes before you leave the house.
                    </h1>
                    <p className="text-plum-400 text-base sm:text-lg leading-relaxed">
                        Not the two-hour routine. Not the fifteen-step one. Just the version where you
                        grab three things, they all work together, and you actually like what you see
                        in the mirror. That's the whole idea.
                    </p>
                </Reveal>
                <Reveal delay={120} className="relative h-72 sm:h-80">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blush-300/30 via-lilac-300/25 to-butter-200/30 blur-2xl rounded-full" />
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden ring-1 ring-white/60 shadow-[0_24px_50px_-18px_rgba(198,64,122,0.35)] animate-tiltFloat">
                        <img
                            src="/imgs/story/story-vanity-roses.jpg"
                            alt="Glowrie skincare and lip products styled with roses"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Reveal>
            </section>

            <section className="grid sm:grid-cols-3 gap-6 pb-16">
                {[
                    { title: "Shades that mix", body: "Every color in the lineup was picked to sit next to the others without a fight." },
                    { title: "Small kit, no filler", body: "Thirty-nine products. Nothing here is on the shelf just to take up space." },
                    { title: "Made to actually wear", body: "Textures and finishes built for a full day, not just the first ten minutes." },
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 100} className="rounded-2xl bg-white ring-1 ring-blush-200/70 p-6 hover:-translate-y-1 hover:shadow-[0_18px_38px_-18px_rgba(198,64,122,0.3)] transition-all duration-300">
                        <div className="w-9 h-9 rounded-full bg-blush-100 flex items-center justify-center mb-4">
                            <div className="w-3 h-3 rounded-full bg-blush-500 animate-pulseSoft" />
                        </div>
                        <h3 className="font-display text-lg text-plum-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-plum-400 leading-relaxed">{item.body}</p>
                    </Reveal>
                ))}
            </section>

            <section className="rounded-3xl overflow-hidden mb-16 relative">
                <Reveal className="grid md:grid-cols-2">
                    <div className="p-8 sm:p-12 bg-gradient-to-br from-lilac-100 via-blush-100 to-butter-100 flex items-center">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl text-plum-900 mb-4">How we pick colors</h2>
                            <p className="text-plum-600 leading-relaxed mb-4">
                                Every shade starts as a swatch on paper before it goes anywhere near a product.
                                We hold it up against skin in different light, live with it for a while, and only
                                add it to the lineup once it earns a place next to everything else already there.
                            </p>
                            <p className="text-plum-600 leading-relaxed">
                                It's a slower way to build a color range, but it's why nothing in the kit feels
                                like a leftover.
                            </p>
                        </div>
                    </div>
                    <div className="h-64 md:h-auto overflow-hidden">
                        <img
                            src="/imgs/story/story-flatlay-pink.jpg"
                            alt="Glowrie products laid out with brushes and roses"
                            className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                        />
                    </div>
                </Reveal>
            </section>

            {/* Studio gallery — styled multi-product images in a moving strip */}
            <section className="pb-16 -mx-5 px-5 overflow-hidden">
                <Reveal>
                    <p className="text-xs tracking-[0.2em] text-blush-600 font-medium mb-6 text-center">
                        from the studio
                    </p>
                </Reveal>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-blush-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-blush-50 to-transparent z-10" />
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...STUDIO_STRIP, ...STUDIO_STRIP].map((img, i) => (
                            <div
                                key={`${img.src}-${i}`}
                                className="w-56 h-64 sm:w-72 sm:h-80 mx-2.5 rounded-2xl overflow-hidden ring-1 ring-blush-200/70 shrink-0 shadow-sm"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Reveal as="section" className="max-w-2xl">
                <p className="text-sm text-plum-400 leading-relaxed border-t border-blush-200 pt-6">
                    A small note: Glowrie is a concept project, put together just for fun to practice
                    building a pretty, feel-good storefront — right down to a working checkout. It isn't
                    an official brand site, so think of it as a design exercise inspired by the kind of
                    playful, pastel beauty stores we like looking at.
                </p>
            </Reveal>
        </div>
    )
}
