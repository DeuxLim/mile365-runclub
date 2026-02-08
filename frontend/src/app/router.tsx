import { createBrowserRouter } from "react-router";
import LandingPage from "../features/landing/pages/LandingPage";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: LandingPage,
	},
]);
