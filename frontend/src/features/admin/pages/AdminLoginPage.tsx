import AdminLoginForm from "@/features/admin/components/AdminLoginForm";
import logo from "@/assets/photos/365_logo_dark.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAdmin } from "@/hooks/useAuthenticatedAdmin";

export default function AdminLoginPage() {
	const navigate = useNavigate();
	const { data: admin, isPending } = useAdmin();

	useEffect(() => {
		if (admin) {
			navigate("/admin/dashboard", { replace: true });
		}
	}, [admin, navigate]);

	if (isPending) {
		return null;
	}

	return (
		<div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
			<img
				src={logo}
				className="h-20 md:h-20 object-contain transition-all duration-300 mb-6"
				alt="Mile 365 Logo"
			/>
			<h1 className="text-3xl">ADMINS 365 PORTAL</h1>
			<AdminLoginForm />
		</div>
	);
}
