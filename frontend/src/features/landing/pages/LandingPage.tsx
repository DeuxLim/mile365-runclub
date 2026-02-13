import About from "./About";
import Benefits from "./Benefits";
import HeroSection from "./HeroSection";
import Schedule from "./Schedule";
import Target from "./Target";

export default function LandingPage() {
	return (
		<div className="overflow-hidden">
			{/* Hero Section */}
			<HeroSection />

			{/* About (Who we are) */}
			<About />

			{/* Target (Who can join) */}
			<Target />

			{/* Schedule */}
			<Schedule />

			{/* Benefits */}
			<Benefits />

			{/* <FontTester/> */}
		</div>
	);
}
