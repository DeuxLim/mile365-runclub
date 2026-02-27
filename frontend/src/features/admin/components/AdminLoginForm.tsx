import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { submitLoginCredentials } from "../admin.service";
import type { LaravelValidationError } from "@/features/membership/types/membership-request.types";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";

const loginSchema = z.object({
	email: z.string().trim().min(1, "Email is required."),
	password: z.string().trim().min(1, "Password is required."),
});
type Login = z.infer<typeof loginSchema>;

export default function AdminLoginForm() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<Login>({
		resolver: zodResolver(loginSchema),
	});

	const { isPending, mutate, isError, error } = useMutation({
		mutationFn: submitLoginCredentials,
		onSuccess: async () => {
			navigate("/admin/dashboard");
			reset();
		},
		onError: (error: AxiosError<LaravelValidationError>) => {
			if (!error.response) return;
			if (error.response.status !== 422) return;

			const serverErrors = error.response.data?.errors;
			if (!serverErrors) return;

			Object.entries(serverErrors).forEach(([field, messages]) => {
				setError(field as keyof Login, {
					type: "server",
					message: messages[0],
				});
			});
		},
	});

	const submitForm = (data: Login) => {
		mutate(data);
	};

	const globalError = isError
		? error?.response?.data?.message ||
			"Something went wrong. Please try again."
		: null;

	return (
		<form
			onSubmit={handleSubmit(submitForm)}
			className="w-full max-w-md mt-8 px-6 mx-auto"
		>
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<input
						{...register("email")}
						type="email"
						placeholder="Email"
						className="
					w-full
					border border-neutral-300
					focus:border-black focus:ring-1 focus:ring-black
					p-4 text-base
					outline-none
					"
					/>
					{errors.email?.message && (
						<p className="text-xs text-red-500">
							{errors.email?.message}
						</p>
					)}
				</div>

				<div className="flex flex-col gap-1">
					<input
						{...register("password")}
						type="password"
						placeholder="Password"
						className="
					w-full
					border border-neutral-300
					focus:border-black focus:ring-1 focus:ring-black
					p-4 text-base
					outline-none
					"
					/>
					{errors.password?.message && (
						<p className="text-xs text-red-500">
							{errors.password?.message}
						</p>
					)}
				</div>

				{globalError && (
					<div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
						{globalError}
					</div>
				)}

				<button
					type="submit"
					disabled={isPending}
					className="
						w-full
						bg-black text-white
						py-4
						uppercase tracking-widest text-sm
						hover:bg-neutral-800
						transition
						flex items-center justify-center gap-2
						disabled:opacity-60
					"
				>
					{isPending && (
						<span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
					)}

					{isPending ? "Logging in..." : "Sign In"}
				</button>

				<div className="text-sm text-zinc-500 text-center hover:text-black cursor-pointer transition">
					Forgot your password?
				</div>
			</div>
		</form>
	);
}
