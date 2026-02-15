import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router";
import lightLogo from "../assets/photos/365_logo_light.png";
import darkLogo from "../assets/photos/365_logo_dark.png";
import { TbMenu, TbX } from "react-icons/tb";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
	const location = useLocation();
	const isLandingPage = location.pathname === "/";

	const [showNav, setShowNav] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isLightSection, setIsLightSection] = useState(false);
	const lastScrollY = useRef(0);

	/* =========================
	   SCROLL DETECTION (Works everywhere)
	========================= */
	useEffect(() => {
		const getScrollElement = () =>
			document.getElementById("scroll-container") || window;

		const scrollElement = getScrollElement();

		const handleScroll = () => {
			const current =
				scrollElement instanceof Window
					? window.scrollY
					: scrollElement.scrollTop;

			if (current > lastScrollY.current && current > 80) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}

			lastScrollY.current = current;
		};

		scrollElement.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			scrollElement.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);

	/* =========================
	   REVEAL WHEN CURSOR NEAR TOP
	========================= */
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (e.clientY <= 80) {
				setShowNav(true);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	/* =========================
	   SECTION THEME DETECTION (Landing Only)
	========================= */
	useEffect(() => {
		if (!isLandingPage) {
			setIsLightSection(true);
			return;
		}

		const container = document.getElementById("scroll-container");
		if (!container) return;

		const sections = container.querySelectorAll("section[data-theme]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const theme = entry.target.getAttribute("data-theme");
						setIsLightSection(theme === "light");
					}
				});
			},
			{
				root: container,
				rootMargin: "-40% 0px -40% 0px",
				threshold: 0,
			},
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, [isLandingPage]);

	/* =========================
	   LOCK BODY SCROLL (Mobile Menu)
	========================= */
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
	}, [menuOpen]);

	/* =========================
	   COLOR + LOGO LOGIC
	========================= */
	const textColor = isLandingPage
		? isLightSection
			? "text-black"
			: "text-white"
		: "text-black";

	const buttonStyle = isLandingPage
		? isLightSection
			? "border-black hover:bg-black hover:text-white"
			: "border-white hover:bg-white hover:text-black"
		: "border-black hover:bg-black hover:text-white";

	const logoSrc = isLandingPage
		? isLightSection
			? darkLogo
			: lightLogo
		: darkLogo;

	return (
		<>
			<nav
				className={`
				fixed top-0 left-0 right-0 z-50
				bg-transparent
				transition-all duration-500 ease-in-out
				${showNav ? "translate-y-0" : "-translate-y-full"}
				${textColor}
			`}
			>
				<div className="flex items-center px-8 h-16">
					{/* LEFT LINKS */}
					<div className="hidden md:flex">
						<ul className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
							<li>
								<a href="/#about">About</a>
							</li>
							<li>
								<a href="/#schedule">Schedule</a>
							</li>
							<li>
								<a href="/#benefits">Why Join</a>
							</li>
							<li>
								<a href="/#faq">FAQ</a>
							</li>
						</ul>
					</div>

					{/* CENTER LOGO */}
					<a className="absolute left-1/2 -translate-x-1/2" href="/">
						<img
							src={logoSrc}
							className="h-10 md:h-12 object-contain transition-all duration-300"
							alt="Mile 365 Logo"
						/>
					</a>

					{/* RIGHT CTA */}
					<div className="ml-auto hidden md:flex items-center">
						<Link
							to="/join"
							className={`
								px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300
								${buttonStyle}
							`}
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
