import { api } from "@/lib/api";
import type {
	AdminAuthResponse,
	AdminLoginCredentials,
	AdminUser,
} from "./types/admin.types";

export const submitLoginCredentials = async (
	credentials: AdminLoginCredentials,
): Promise<AdminAuthResponse> => {
	await api.get("/sanctum/csrf-cookie");
	const response = await api.post<AdminAuthResponse>(
		"/admin/login",
		credentials,
	);
	return response.data;
};

export const getAuthenticatedAdmin = async (): Promise<AdminUser> => {
	const response = await api.get<AdminAuthResponse>("/admin/me");
	return response.data.user;
};
