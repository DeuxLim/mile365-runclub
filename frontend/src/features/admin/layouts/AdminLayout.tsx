import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
	return (
		<div className="bg-white min-h-screen flex text-black">
			{/* Sidebar */}
			<Sidebar />

			{/* Dashboard */}
			<main className="p-10 w-full min-h-full">
				<Outlet />
			</main>
		</div>
	);
}
