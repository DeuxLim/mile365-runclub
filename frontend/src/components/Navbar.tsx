import { useEffect, useRef, useState } from "react";
import logo from "../assets/photos/365_logo.png";
import { TbMenu, TbX } from "react-icons/tb";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router";

export default function Navbar() {
	const [showNav, setShowNav] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);
	const lastScrollY = useRef(0);

	// Scroll logic (works with snap container)
	useEffect(() => {
		const container = document.getElementById("scroll-container");
		if (!container) return;

		const sections = Array.from(
			container.querySelectorAll("section[data-theme]"),
		);

		const handleScroll = () => {
			const scrollTop = container.scrollTop;
			const containerHeight = container.clientHeight;

			// Hide on scroll down
			if (scrollTop > lastScrollY.current && scrollTop > 80) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}
			lastScrollY.current = scrollTop;

			// Determine active section
			for (const section of sections) {
				const offsetTop = section.offsetTop;
				const offsetHeight = section.offsetHeight;

				if (
					scrollTop >= offsetTop - containerHeight / 2 &&
					scrollTop < offsetTop + offsetHeight - containerHeight / 2
				) {
					const theme = section.getAttribute("data-theme");
					setDarkMode(theme === "dark");
					break;
				}
			}
		};

		container.addEventListener("scroll", handleScroll);
		handleScroll(); // run once on mount

		return () => container.removeEventListener("scroll", handleScroll);
	}, []);

	// Lock body scroll when mobile menu open
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
	}, [menuOpen]);

	return (
		<>
			<nav
				className={`
				fixed top-0 left-0 right-0 z-50
				transition-all duration-500 ease-in-out
				${showNav ? "translate-y-0" : "-translate-y-full"}
				${darkMode ? "text-white" : "text-black bg-white/90 backdrop-blur-md"}
			`}
			>
				<div className="flex items-center px-8 h-16">
					{/* LEFT LINKS */}
					<div className="hidden md:flex">
						<ul className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#schedule">Schedule</a>
							</li>
							<li>
								<a href="#benefits">Why Join</a>
							</li>
							<li>
								<a href="#faq">FAQ</a>
							</li>
						</ul>
					</div>

					{/* CENTER LOGO */}
					<a
						className="absolute left-1/2 -translate-x-1/2"
						href="#home"
					>
						<img
							src={logo}
							className="h-10 md:h-12 object-contain"
							alt="Mile 365 Logo"
						/>
					</a>

					{/* RIGHT CTA */}
					<div className="ml-auto hidden md:flex items-center">
						<Link
							to="/join"
							className="px-5 py-2 text-xs uppercase tracking-widest border"
						>
							Join
						</Link>
					</div>

					{/* MOBILE ICON */}
					<div
						className="ml-auto md:hidden relative z-50"
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						{menuOpen ? <TbX size={26} /> : <TbMenu size={26} />}
					</div>
				</div>
			</nav>

			<MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
		</>
	);
}
