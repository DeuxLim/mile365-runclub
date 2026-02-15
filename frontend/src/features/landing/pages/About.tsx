import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			id="about"
			className="min-h-[100svh] md:h-screen bg-white text-black flex items-center px-6 md:px-24 snap-start"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			data-theme="light"
		>
			<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center">
				{/* LEFT CONTENT */}
				<div className="space-y-8">
					<p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500">
						About Mile 365
					</p>

					<h2 className="text-3xl md:text-6xl font-heading leading-tight tracking-tight">
						Built on consistency.
						<br />
						Driven by community.
					</h2>

					<p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-lg">
						MILE 365 Run Club is a Bulacan-based running community
						built for runners who believe that showing up
						consistently changes everything.
					</p>

					<p className="text-neutral-600 leading-relaxed max-w-lg">
						We combine structured training, coaching guidance, and a
						strong social environment — so runners of all levels can
						improve safely, progressively, and confidently.
					</p>

					<p className="text-neutral-600 leading-relaxed max-w-lg">
						The 365 mentality is simple: 1% better every day. Small
						progress compounds.
					</p>
				</div>

				{/* RIGHT VISUAL PLACEHOLDER */}
				<div className="relative h-64 md:h-[500px] rounded-2xl overflow-hidden bg-neutral-200 shadow-sm">
					<div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs uppercase tracking-widest">
						Group Run Image
					</div>
				</div>
			</div>
		</motion.section>
	);
}
