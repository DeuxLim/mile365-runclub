import { Suspense, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

export default function RootLayout() {
	const [appReady, setAppReady] = useState(false);

	/* if (!appReady) {
		return <PageLoader onFinish={() => setAppReady(true)} />;
	} */

	return (
		<div className="animate-fadeIn">
			<Suspense fallback={null}>
				<Navbar />
				<Outlet />
				<Footer />
			</Suspense>
		</div>
	);
}
