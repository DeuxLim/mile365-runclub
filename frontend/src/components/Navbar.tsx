import logo from "../assets/photos/365_logo.png";
import { TbMenu } from "react-icons/tb";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-center md:justify-between text-white px-4 py-4 md:h-16 bg-black relative">
			{/* Logo */}
			<div className="h-10 md:h-8 flex items-center">
				<img
					src={logo}
					alt="MILE 365 LOGO"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Desktop menu */}
			<div className="hidden flex-1 text-xs md:flex items-center justify-center">
				<ul className="flex gap-2 font-extralight">
					<li>Home</li>
					<li>Runs</li>
					<li>About</li>
					<li>Community</li>
				</ul>
			</div>

			{/* Burger (mobile) */}
			<button className="absolute right-4 md:hidden text-lg">
				<TbMenu />
			</button>

			{/* Right menu (desktop) */}
			<div className="hidden md:flex text-lg">
				<TbMenu />
			</div>
		</nav>
	);
}
