import { motion } from "framer-motion";

export default function Gallery() {
	return (
		<motion.section
			id="gallery"
			data-theme="dark"
			className="
				min-h-screen bg-black text-white snap-start
				flex flex-col justify-center lg:justify-start
				px-5 sm:px-8 md:px-16 lg:px-24
				py-16 md:py-20 lg:py-28 xl:py-32
			"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ amount: 0.3, once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="max-w-6xl mx-auto w-full flex flex-col">
				{/* Header */}
				<div className="mb-10 md:mb-12">
					<p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.3em] text-neutral-500">
						In Motion
					</p>

					<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading tracking-tight mt-4 max-w-xl">
						MILE 365 Community
					</h2>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
					<div className="sm:col-span-2 md:row-span-2 rounded-xl bg-neutral-800 animate-pulse aspect-[4/3] md:aspect-auto md:h-full" />

					<div className="rounded-xl bg-neutral-700 animate-pulse aspect-[4/3]" />
					<div className="rounded-xl bg-neutral-700 animate-pulse aspect-[4/3]" />
					<div className="rounded-xl bg-neutral-700 animate-pulse aspect-[4/3]" />
					<div className="rounded-xl bg-neutral-700 animate-pulse aspect-[4/3]" />
				</div>
			</div>
		</motion.section>
	);
}
