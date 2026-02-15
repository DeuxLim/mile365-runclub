import JoinForm from "../../../components/JoinForm";

export default function JoinPage() {
	return (
		<section
			data-theme="light"
			className="min-h-screen bg-white text-black px-6 md:px-24 pt-24 pb-20"
		>
			<div className="max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-6xl text-center font-heading mb-12">
					Apply to Join MILE 365
				</h1>

				<JoinForm />
			</div>
		</section>
	);
}
