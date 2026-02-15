import { motion } from "framer-motion";

export default function FinalCTA() {
	return (
		<motion.section
			id="join"
			data-theme="light"
			className="h-screen bg-white text-black flex items-center px-6 md:px-24 snap-start"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-4xl mx-auto w-full flex flex-col justify-center text-center">
				<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
					Join Mile 365
				</p>

				<h2 className="text-4xl md:text-6xl font-heading leading-tight tracking-tight mt-8">
					Show up.
					<br />
					Stay consistent.
					<br />
					Run with us.
				</h2>

				<p className="text-neutral-600 text-lg mt-8 leading-relaxed max-w-2xl mx-auto">
					If you're ready to train with structure, grow with a
					community, and commit to the 365 mindset — it starts with
					showing up.
				</p>

				<div className="flex justify-center gap-6 mt-12">
					<button className="px-10 py-4 text-xs tracking-widest uppercase bg-black text-white hover:bg-neutral-800 transition-all duration-300">
						Apply to Join
					</button>

					<button className="px-10 py-4 text-xs tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-all duration-300">
						View Weekly Schedule
					</button>
				</div>
			</div>
		</motion.section>
	);
}
