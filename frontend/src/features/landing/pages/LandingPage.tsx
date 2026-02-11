import About from "./About";
import HeroSection from "./HeroSection";

export default function LandingPage() {
	return (
		<div className="overflow-hidden">
			{/* Hero Section */}
			<HeroSection />

			{/* About */}
			<About />

			{/* Runs */}
			<section
				id="runs"
				className="h-screen border flex justify-center items-center text-9xl font-extrabold"
			>
				Runs
			</section>

			{/* Community */}
			<section
				id="community"
				className="h-screen border flex justify-center items-center text-9xl font-extrabold"
			>
				Community
			</section>

			{/* <FontTester/> */}
		</div>
	);
}
