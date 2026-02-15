import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
	{
		question: "Is there a membership fee?",
		answer: "No. MILE 365 is free to join.",
	},
	{
		question: "Do I need to be fast to join?",
		answer: "Not at all. Beginners, walk-run friendly runners, and performance athletes are all welcome.",
	},
	{
		question: "Where are the runs held?",
		answer: "Sessions are held around Bulacan. Final locations are posted weekly inside the group.",
	},
	{
		question: "Do I need to attend every session?",
		answer: "No. But consistency is encouraged for better progress.",
	},
	{
		question: "Can I join if I have an upcoming race?",
		answer: "Yes. Training blocks can adjust to support race preparation.",
	},
	{
		question: "How do I officially join?",
		answer: "Follow our social pages, sign up on the website, attend at least 2 sessions, and you're in.",
	},
];

export default function FAQ() {
	const [active, setActive] = useState<number | null>(null);

	return (
		<motion.section
			id="faq"
			className="h-screen bg-black text-white flex items-center px-6 md:px-24 snap-start"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-4xl mx-auto w-full flex flex-col justify-center">
				{/* Header */}
				<div className="mb-16">
					<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
						FAQ
					</p>

					<h2 className="text-4xl md:text-6xl font-heading leading-tight tracking-tight mt-6">
						Clear answers.
						<br />
						No confusion.
					</h2>
				</div>

				{/* Questions */}
				<div className="space-y-6">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border-b border-white/20 pb-6"
						>
							<button
								onClick={() =>
									setActive(active === index ? null : index)
								}
								className="w-full text-left text-xl font-semibold flex justify-between items-center"
							>
								{faq.question}
								<span className="text-neutral-400">
									{active === index ? "−" : "+"}
								</span>
							</button>

							{active === index && (
								<p className="mt-4 text-neutral-400 leading-relaxed">
									{faq.answer}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
