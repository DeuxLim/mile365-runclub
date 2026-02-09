// routes/router.jsx
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { ROUTES } from "./paths.tsx";

const LandingPage = lazy(() => import("../features/landing/pages/LandingPage"));

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
		],
	},
]);
