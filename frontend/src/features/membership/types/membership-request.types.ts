import { z } from "zod";
import type { membershipRequestSchema } from "../schemas/membership-request.schema";

export type MembershipRequest = z.infer<typeof membershipRequestSchema>;
export type MembershipRequestInput = z.input<typeof membershipRequestSchema>;
