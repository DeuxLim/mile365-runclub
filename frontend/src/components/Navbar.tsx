import { useEffect, useRef, useState } from "react";
import logo from "../assets/photos/365_logo.png";
import { TbMenu } from "react-icons/tb";

export default function Navbar() {
	const [showNav, setShowNav] = useState(true);
	const [scrolled, setScrolled] = useState(false);
	const [introDone, setIntroDone] = useState(false);
	const lastScrollY = useRef(0);

	// INTRO SLIDE — synced with hero progress bar motion
	useEffect(() => {
		const timer = setTimeout(() => {
			setIntroDone(true);
		}, 400); // same start timing as hero bar

		return () => clearTimeout(timer);
	}, []);

	// SCROLL BEHAVIOR
	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY;

			if (current > lastScrollY.current && current > 80) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}

			setScrolled(current > window.innerHeight - 100);
			lastScrollY.current = current;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// FINAL POSITION
	const translateClass = !introDone
		? "-translate-y-full"
		: showNav
			? "translate-y-0"
			: "-translate-y-full";

	return (
		<nav
			className={`
				fixed top-0 left-0 right-0 z-50 text-white
				transform transition-transform duration-900
				ease-[cubic-bezier(0.22,1,0.36,1)]
				${translateClass}
				${scrolled ? "bg-black/95 backdrop-blur" : "bg-transparent"}
				py-4 md:py-0
			`}
		>
			<div className="flex items-center px-8 py-4 md:h-16">
				{/* Left desktop menu */}
				<div className="hidden md:flex">
					<ul className="flex gap-4 text-xs font-semibold">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#runs">Runs</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#community">Community</a>
						</li>
					</ul>
				</div>

				{/* Center logo */}
				<a
					className="absolute md:left-1/2 md:-translate-x-1/2"
					href="#home"
				>
					<img src={logo} className="h-10 md:h-14 object-contain" />
				</a>

				{/* Right menu icon */}
				<div className="ml-auto">
					<TbMenu />
				</div>
			</div>
		</nav>
	);
}
