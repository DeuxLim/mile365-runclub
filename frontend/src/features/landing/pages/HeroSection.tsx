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
			if (!video.duration) return;
			const percent = (video.currentTime / video.duration) * 100;
			setProgress(percent);
		};

		video.addEventListener("timeupdate", handleTimeUpdate);
		return () => {
			video.removeEventListener("timeupdate", handleTimeUpdate);
		};
	}, []);

	return (
		<section
			id="home"
			data-theme="dark"
			className="relative h-screen overflow-hidden snap-start"
		>
			{/* Background Video */}
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

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/70" />

			{/* Content */}
			<div className="relative z-10 h-full flex items-center px-6 md:px-24">
				<div className="max-w-6xl mx-auto w-full text-center text-white flex flex-col items-center">
					<h1 className="text-5xl md:text-7xl font-heading uppercase font-black tracking-tight leading-[1.05]">
						<DecryptedText
							text="MILE 365 RUN CLUB"
							animateOn="view"
							revealDirection="start"
							sequential
							useOriginalCharsOnly={false}
						/>
					</h1>

					<p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-300 leading-relaxed">
						More than a run club — it’s a commitment. Show up, stay
						consistent, and move forward with a community that
						trains hard and grows together.
					</p>

					<div className="flex gap-6 mt-12">
						<a href="/#join" className="px-8 py-4 text-xs tracking-widest uppercase border border-white/30 bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300">
							Run With Us
						</a>

						<a
							href="#schedule"
							className="px-8 py-4 text-xs tracking-widest uppercase border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
						>
							View Schedule
						</a>
					</div>
				</div>
			</div>

			{/* Progress Bar */}
			<div
				className={`
					pointer-events-none absolute left-24 right-24 bottom-10 z-20
					transform transition-all duration-700 ease-out
					${barVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
				`}
			>
				<div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
					<div
						className="h-full bg-white transition-[width] duration-700 ease-linear"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
		</section>
	);
}
