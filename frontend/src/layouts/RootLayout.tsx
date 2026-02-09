// routes/layouts/RootLayout.jsx
import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
	return (
		<div className="bg-black h-screen">
			<Navbar />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<Footer />
		</div>
	);
}
