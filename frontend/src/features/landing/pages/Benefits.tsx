import { motion } from "framer-motion";

const benefits = [
	{
		title: "Structured Weekly Programs",
		desc: "Speed, recovery, and long-distance sessions designed and adjusted by Coach Daniel.",
	},
	{
		title: "Race Preparation Support",
		desc: "Training blocks adapted for upcoming races, with full community support on race day.",
	},
	{
		title: "Injury Prevention Awareness",
		desc: "We train hard — but smart. Recovery and pacing matter.",
	},
	{
		title: "Community & Accountability",
		desc: "Progress is easier when you don’t run alone.",
	},
	{
		title: "Monthly Challenges",
		desc: "Mileage goals, streaks, and friendly competition to stay consistent.",
	},
	{
		title: "Exclusive Member Perks",
		desc: "Future access to club merch, race postcards, and featured media content.",
	},
];

export default function Benefits() {
	return (
		<motion.section
			id="benefits"
			className="min-h-[100svh] md:h-screen bg-black text-white flex items-center px-6 md:px-24 snap-start"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
				{/* Header */}
				<div className="mb-10 md:mb-20">
					<p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500">
						Why Join
					</p>

					<h2 className="text-3xl md:text-6xl font-heading leading-tight tracking-tight mt-4 md:mt-6">
						More than just
						<br />a weekly run.
					</h2>
				</div>

				{/* Benefits Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-12">
					{benefits.map((benefit, i) => (
						<motion.div
							key={benefit.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="space-y-3 border-l border-white/20 pl-6 md:pl-8"
						>
							<h3 className="text-xl md:text-2xl font-semibold">
								{benefit.title}
							</h3>
							<p className="text-neutral-400 text-sm md:text-base leading-relaxed">
								{benefit.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
