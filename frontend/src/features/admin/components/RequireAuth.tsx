import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router";
import { getAuthenticatedAdmin } from "../admin.service";

export default function RequireAuth() {
	const {
		data: admin,
		isPending,
		isError,
	} = useQuery({
		queryKey: ["admin", "me"],
		queryFn: getAuthenticatedAdmin,
		retry: false,
	});

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
