// routes/router.jsx
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { ROUTES } from "./paths.tsx";
import WaiverAndTermsPage from "../pages/waiver-and-terms.tsx";
import JoinSuccess from "@/features/membership/pages/JoinSuccess.tsx";

import AdminLayout from "@/features/admin/layouts/AdminLayout";
import AdminLoginPage from "@/features/admin/pages/AdminLoginPage.tsx";
import RequireAuth from "@/features/admin/components/RequireAuth";
import AdminDashboardPage from "@/features/admin/pages/AdminDashboardPage.tsx";

const LandingPage = lazy(() => import("../features/landing/pages/LandingPage"));

const JoinPage = lazy(
	() => import("../features/membership/pages/JoinPage.tsx"),
);

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
			{
				path: ROUTES.JOINSUCCESS,
				element: <JoinSuccess />,
			},
		],
	},
	{
		path: ROUTES.ADMIN.INDEX,
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <AdminLoginPage />,
			},
			{
				path: ROUTES.ADMIN.LOGIN,
				element: <AdminLoginPage />,
			},
			{
				path: ROUTES.ADMIN.DASHBOARD,
				element: (
					<RequireAuth>
						<AdminDashboardPage />
					</RequireAuth>
				),
			},
		],
	},
]);
