import { z } from "zod";

/*
|--------------------------------------------------------------------------
| BASIC IDENTITY
|--------------------------------------------------------------------------
*/
export const identitySchema = z.object({
	first_name: z.string().min(1),
	last_name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().min(7),
	birthdate: z.string().min(1),
	gender: z.enum(["male", "female", "other"]),
});

/*
|--------------------------------------------------------------------------
| LOCATION
|--------------------------------------------------------------------------
*/
export const locationSchema = z.object({
	country: z.string(),
	province: z.string(),
	city: z.string(),
	barangay: z.string(),
	location_confirmation: z.boolean().default(false),
});

/*
|--------------------------------------------------------------------------
| TRAINING PROFILE
|--------------------------------------------------------------------------
*/
export const trainingSchema = z.object({
	training_types: z.array(
		z.enum(["running", "gym", "hybrid", "cycling", "triathlon"]),
	),

	experience_level: z.enum(["beginner", "intermediate", "advanced"]),

	years_running: z.coerce.number().int().nonnegative(),
	weekly_distance_km: z.coerce.number().nonnegative(),

	average_run_pace: z.string(),

	preferred_run_time: z.enum(["morning", "afternoon", "evening"]),

	goals: z.string(),
});

/*
|--------------------------------------------------------------------------
| COMMUNITY PLATFORMS
|--------------------------------------------------------------------------
*/
export const communityPlatformsSchema = z.object({
	fb_group_joined: z.boolean().default(false),
	community_chat_joined: z.boolean().default(false),

	platforms_joined: z.array(z.string()),

	facebook_profile_name: z.string(),
	messenger_name: z.string(),
});

/*
|--------------------------------------------------------------------------
| HEALTH & SAFETY
|--------------------------------------------------------------------------
*/
export const healthSafetySchema = z.object({
	emergency_contact_name: z.string(),
	emergency_contact_phone: z.string(),
	medical_conditions: z.string(),
	fitness_acknowledgment: z.boolean().default(false),
});

/*
|--------------------------------------------------------------------------
| MEMBERSHIP EXPECTATIONS
|--------------------------------------------------------------------------
*/
export const expectationsSchema = z.object({
	attendance_commitment: z.boolean().default(false),
	activity_expectation: z.boolean().default(false),
	community_behavior: z.boolean().default(false),
});

/*
|--------------------------------------------------------------------------
| COMMUNITY / CULTURE FIT
|--------------------------------------------------------------------------
*/
export const communitySchema = z.object({
	how_did_you_hear: z.string(),
	motivation: z.string(),
});

/*
|--------------------------------------------------------------------------
| WAIVER & AGREEMENT
|--------------------------------------------------------------------------
*/
export const waiverSchema = z.object({
	agreed_to_rules: z.boolean(),
	safety_commitment: z.boolean().default(false),
	media_consent: z.boolean().default(false),
});

/*
|--------------------------------------------------------------------------
| ADMIN / BACKOFFICE
|--------------------------------------------------------------------------
*/
export const adminSchema = z.object({
	agreed_at: z.string().datetime().optional(),
	status: z.enum(["pending", "approved", "rejected"]).default("pending"),
	reviewed_by: z.string().nullable().optional(),
	reviewed_at: z.string().datetime().nullable().optional(),
	admin_notes: z.string().nullable().optional(),
});

export const membershipRequestSchema = z.object({
	...identitySchema.shape,
	...locationSchema.shape,
	...trainingSchema.shape,
	...communityPlatformsSchema.shape,
	...healthSafetySchema.shape,
	...expectationsSchema.shape,
	...communitySchema.shape,
	...waiverSchema.shape,
	...adminSchema.shape,
});
