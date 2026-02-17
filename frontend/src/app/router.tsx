// routes/router.jsx
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { ROUTES } from "./paths.tsx";
import WaiverAndTermsPage from "../pages/waiver-and-terms.tsx";

const LandingPage = lazy(() => import("../features/landing/pages/LandingPage"));

const JoinPage = lazy(() => import("../features/join/pages/JoinPage"));

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: ROUTES.JOIN,
				element: <JoinPage />,
			},
			{
				path: ROUTES.WAIVERTERMS,
				element: <WaiverAndTermsPage />,
			},
		],
	},
]);
