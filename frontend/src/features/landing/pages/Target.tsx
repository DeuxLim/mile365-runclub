import { motion } from "framer-motion";

const levels = [
	"Beginners welcome.",
	"Walk-run friendly.",
	"Intermediate runners.",
	"Performance focused athletes.",
];

export default function Target() {
	return (
		<motion.section
			id="target"
			className="relative h-screen bg-black text-white flex items-center px-6 md:px-24 snap-start overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="relative max-w-6xl mx-auto w-full flex flex-col justify-center space-y-16">
				{/* Header */}
				<div className="space-y-6">
					<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
						Who Can Join
					</p>

					<h2 className="text-5xl md:text-7xl font-heading leading-[1.05] tracking-tight">
						If you’re willing
						<br />
						to show up —
						<br />
						you belong here.
					</h2>

					<p className="text-neutral-400 text-lg max-w-xl">
						No membership fee. No ego. Just discipline, consistency,
						and support.
					</p>
				</div>

				{/* Levels */}
				<div className="grid md:grid-cols-2 gap-8 text-xl md:text-2xl text-neutral-300">
					{levels.map((level, i) => (
						<motion.div
							key={level}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.15 }}
							className="border-l border-white/20 pl-6"
						>
							{level}
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
