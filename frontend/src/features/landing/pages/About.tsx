import { useState } from "react";
import { motion } from "framer-motion";

type Pillar = {
	title: string;
	description: string;
};

const pillars: Pillar[] = [
	{
		title: "CONSISTENCY",
		description:
			"MILE 365 was built on showing up daily. Not when motivated. Not when convenient. Every day builds identity.",
	},
	{
		title: "COMMUNITY",
		description:
			"From first 1KM to long runs, we grow together. No egos. No gatekeeping. Just runners pushing runners.",
	},
	{
		title: "DISCIPLINE",
		description:
			"365 is a mentality. Progress isn’t seasonal. It’s built mile by mile, all year long.",
	},
];

export default function Identity() {
	const [active, setActive] = useState(0);

	return (
		<motion.section
			id="identity"
			className="min-h-screen bg-white text-black flex items-center px-6 md:px-24"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
				{/* LEFT */}
				<div className="space-y-8">
					<p className="font-body text-sm uppercase tracking-[0.3em] text-neutral-500">
						Our Identity
					</p>

					<h2 className="font-heading text-3xl md:text-5xl leading-tight tracking-tight">
						We’re not built on hype.
						<br />
						We’re built on what happens
						<br />
						every single day.
					</h2>

					<p className="font-body text-lg text-neutral-600 leading-relaxed">
						MILE 365 exists for runners who choose discipline over
						excuses. Whether it’s your first kilometer or your
						longest run — you belong here.
					</p>
				</div>

				{/* RIGHT */}
				<div className="space-y-10">
					{pillars.map((pillar, index) => {
						const isActive = active === index;

						return (
							<div
								key={pillar.title}
								onMouseEnter={() => setActive(index)}
								onClick={() => setActive(index)}
								className="cursor-pointer"
							>
								<motion.h3
									animate={{
										opacity: isActive ? 1 : 0.4,
										scale: isActive ? 1.03 : 1,
									}}
									transition={{ duration: 0.3 }}
									className="font-heading text-2xl md:text-3xl"
								>
									{pillar.title}
								</motion.h3>

								{/* Keep mounted — just animate visibility */}
								<motion.p
									animate={{
										opacity: isActive ? 1 : 0,
										height: isActive ? "auto" : 0,
									}}
									transition={{ duration: 0.3 }}
									className="font-body mt-4 text-neutral-600 leading-relaxed overflow-hidden"
								>
									{pillar.description}
								</motion.p>
							</div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
