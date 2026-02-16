import { motion } from "framer-motion";

export default function Gallery() {
	return (
		<motion.section
			id="gallery"
			data-theme="dark"
			className="h-screen bg-black text-white flex items-center px-6 md:px-24 snap-start"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ amount : 0.5 }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
				{/* Header */}
				<div className="mb-12">
					<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
						In Motion
					</p>

					<h2 className="text-4xl md:text-6xl font-heading tracking-tight mt-4">
						MILE 365 Community
					</h2>
				</div>

				{/* Skeleton Grid */}
				<div className="grid grid-cols-3 gap-6 h-[65%]">
					{/* Large Placeholder */}
					<div className="col-span-2 row-span-2 rounded-xl bg-neutral-800 animate-pulse" />

					{/* Small Placeholders */}
					<div className="rounded-xl bg-neutral-700 animate-pulse" />
					<div className="rounded-xl bg-neutral-700 animate-pulse" />
					<div className="rounded-xl bg-neutral-700 animate-pulse" />
					<div className="rounded-xl bg-neutral-700 animate-pulse" />
				</div>
			</div>
		</motion.section>
	);
}
