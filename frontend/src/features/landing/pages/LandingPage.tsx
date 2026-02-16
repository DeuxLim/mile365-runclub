import FloatingMusic from "../../../components/LandingMusic";
import About from "./About";
import Benefits from "./Benefits";
import FAQ from "./Faq";
import FinalCTA from "./FinalCTA";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Schedule from "./Schedule";
import SocialProof from "./SocialProof";
import Target from "./Target";

export default function LandingPage() {
	return (
		<div
			className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
			id="scroll-container"
		>
			<HeroSection />
			<About />
			<Target />
			<Schedule />
			<Gallery />
			<Benefits />
			<SocialProof />
			<FAQ />
			<FinalCTA />
			<FloatingMusic />
		</div>
	);
}
