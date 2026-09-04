export function Footer() {
    return (
        <footer className="mt-16 border-t border-blush-200/70 dark:border-wine-800">
            <div className="max-w-6xl mx-auto px-5 py-10">
                <div className="flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center mb-8">
                    <span className="font-display italic text-2xl text-plum-900 dark:text-sand-100">Glowrie</span>
                    <div className="flex gap-6 text-sm text-plum-400 dark:text-sand-400">
                        <span>Eyes</span>
                        <span>Face</span>
                        <span>Lips</span>
                        <span>Tools</span>
                    </div>
                </div>
                <p className="text-xs text-plum-400/80 dark:text-sand-400/80 leading-relaxed max-w-lg">
                    Just a little design project made for practice — a pretend storefront styled like the
                    real thing, checkout included. It isn't an official brand site, but we had fun putting
                    it together.
                </p>
            </div>
        </footer>
    )
}
