import { Navigate, Outlet } from "react-router";
import { useAdmin } from "@/hooks/useAuthenticatedAdmin";

export default function RequireAuth() {
	const { admin, isPending, isError } = useAdmin();

	if (isPending) {
		return (
			<div className="p-6 text-sm text-zinc-600">Checking session...</div>
		);
	}

	if (isError || !admin) {
		return <Navigate to="/admin/login" replace />;
	}

	return <Outlet />;
}
