import type { PropsWithChildren } from "react";

export default function RequireAuth({ children }: PropsWithChildren) {
	return <>{children}</>;
}
