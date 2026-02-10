import { useEffect, useRef, useState } from "react";
import DecryptedText from "../../../components/imports/DecryptedText";
import hero_video from "../../../assets/videos/hero_video.mp4";

export default function HeroSection() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [barVisible, setBarVisible] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setBarVisible(true), 400);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handleTimeUpdate = () => {
			if (!video.duration || video.duration === 0) return;

			const percent = (video.currentTime / video.duration) * 100;
			setProgress(percent);
		};

		video.addEventListener("timeupdate", handleTimeUpdate);

		return () => {
			video.removeEventListener("timeupdate", handleTimeUpdate);
		};
	}, []);

	return (
		<section id="home" className="relative h-screen overflow-hidden">
			{/* Video background */}
			<video
				ref={videoRef}
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover scale-125"
			>
				<source src={hero_video} type="video/mp4" />
			</video>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/65" />

			{/* Content */}
			<div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6">
				<h1 className="text-4xl md:text-7xl font-heading uppercase font-black tracking-tighter">
					<DecryptedText
						text="MILE 365 RUN CLUB"
						animateOn="view"
						revealDirection="start"
						sequential
						useOriginalCharsOnly={false}
					/>
				</h1>

				<p className="font-body text-sm md:text-lg mt-4 max-w-xl md:max-w-2xl mx-8 px-3 leading-relaxed">
					More than a run club - it's a commitment. To show up, stay
					consistent, and move forward with a group that keeps pushing
					no matter the pace, weather, or distance.
				</p>

				<div className="flex gap-4 font-semibold mt-8">
					<button className="px-6 py-4 text-xs tracking-widest border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition">
						RUN WITH US
					</button>

					<button className="px-6 py-4 text-xs tracking-widest border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition">
						VIEW SCHEDULE
					</button>
				</div>
			</div>

			{/* Floating progress bar inside hero */}
			<div
				className={`
					pointer-events-none absolute left-6 right-6 bottom-8 z-20
					transform transition-all duration-700 ease-out
					${barVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
				`}
			>
				<div className="w-full h-0.75 bg-white/20 rounded-full overflow-hidden">
					<div
						className="h-full bg-white transition-[width] duration-900 ease-linear"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
		</section>
	);
}
