import { api } from "@/lib/api";

export const submitLoginCredentials = async (credentials) => {
	await api.get("/sanctum/csrf-cookie");
	const response = await api.post("/admin/login", credentials);
	return response.data;
};
