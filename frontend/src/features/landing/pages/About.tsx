import { motion } from "framer-motion";

export default function About() {
	return (
		<section
			id="about"
			data-theme="light"
			className="min-h-screen bg-white text-black flex items-center snap-start px-5 sm:px-8 md:px-16 lg:px-24 py-16 md:py-0"
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.3, once: true }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center"
			>
				{/* LEFT CONTENT */}
				<div className="space-y-6 md:space-y-8">
					<p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.3em] text-neutral-500">
						About Mile 365
					</p>

					<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading leading-tight tracking-tight max-w-xl">
						Built on consistency.
						<br />
						Driven by community.
					</h2>

					<p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-md md:max-w-lg">
						MILE 365 Run Club is a Bulacan-based running community
						built for runners who believe that showing up
						consistently changes everything.
					</p>

					<p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md md:max-w-lg">
						We combine structured training, coaching guidance, and a
						strong social environment — so runners of all levels can
						improve safely, progressively, and confidently.
					</p>

					<p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md md:max-w-lg">
						The 365 mentality is simple: 1% better every day. Small
						progress compounds.
					</p>
				</div>

				{/* RIGHT VISUAL */}
				<div className="relative w-full h-56 sm:h-64 md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden bg-neutral-200 shadow-sm">
					<div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-[10px] sm:text-xs uppercase tracking-widest">
						Group Run Image
					</div>
				</div>
			</motion.div>
		</section>
	);
}
