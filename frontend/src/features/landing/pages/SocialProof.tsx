import { motion } from "framer-motion";

const testimonials = [
	{
		quote: "I couldn’t even run 1KM before. Now I’m finishing long runs strong.",
		name: "M365 Member",
	},
	{
		quote: "The structure and community changed how I train.",
		name: "M365 Member",
	},
	{
		quote: "Best decision I made this year.",
		name: "M365 Member",
	},
];

export default function SocialProof() {
	return (
		<motion.section
			id="social-proof"
			data-theme="light"
			className="min-h-svh md:h-screen bg-white text-black flex items-center px-6 md:px-24 snap-start"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ amount: 0.5 }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
				{/* Header */}
				<div className="mb-20">
					<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
						Community
					</p>

					<h2 className="text-4xl md:text-6xl font-heading leading-tight tracking-tight mt-6">
						Real runners.
						<br />
						Real progress.
					</h2>
				</div>

				{/* Testimonials */}
				<div className="grid md:grid-cols-3 gap-16">
					{testimonials.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.5 }}
							transition={{ duration: 0.5, delay: i * 0.2 }}
							className="space-y-6 border-l border-black/20 pl-6"
						>
							<p className="text-xl leading-relaxed">
								“{item.quote}”
							</p>
							<p className="text-sm text-neutral-500">
								— {item.name}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
