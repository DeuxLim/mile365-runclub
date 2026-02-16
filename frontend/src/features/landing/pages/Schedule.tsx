import { motion } from "framer-motion";

const sessions = [
	{
		day: "Wednesday",
		type: "Speed Session",
		desc: "Intervals and pacing work designed to improve speed, efficiency, and race performance.",
	},
	{
		day: "Friday",
		type: "Easy Run + Community",
		desc: "Recovery-focused session followed by hangouts and bonding at Malolos Convention.",
	},
	{
		day: "Sunday",
		type: "Long Slow Distance",
		desc: "Endurance-building runs to develop aerobic strength and prepare for races.",
	},
];

export default function Schedule() {
	return (
		<motion.section
			id="schedule"
			className="min-h-svh md:h-screen bg-white text-black flex items-center px-6 md:px-24 snap-start"
			data-theme="light"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ amount : 0.5 }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
				{/* Header */}
				<div className="mb-10 md:mb-20">
					<p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500">
						Weekly Training
					</p>

					<h2 className="text-3xl md:text-6xl font-heading leading-tight tracking-tight mt-4 md:mt-6">
						A structured rhythm.
						<br />
						Every week.
					</h2>
				</div>

				{/* Timeline */}
				<div className="space-y-8 md:space-y-16">
					{sessions.map((session, i) => (
						<motion.div
							key={session.day}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount : 0.5 }}
							transition={{ duration: 0.5, delay: i * 0.15 }}
							className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12"
						>
							<div>
								<p className="text-xs uppercase tracking-widest text-neutral-400">
									{session.day}
								</p>
							</div>

							<div className="space-y-3 border-l border-black/20 pl-6 md:pl-8">
								<h3 className="text-xl md:text-2xl font-semibold">
									{session.type}
								</h3>
								<p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
									{session.desc}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Footer Note */}
				<div className="mt-10 md:mt-20 text-neutral-500 text-xs md:text-sm">
					Sessions are held around Bulacan. Final times and locations
					are announced weekly inside the group.
				</div>
			</div>
		</motion.section>
	);
}
