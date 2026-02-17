export default function JoinForm() {
	return (
		<form className="space-y-14 md:space-y-16 max-w-4xl mx-auto">

			{/* -------------------------------------------------------------------- */}
			{/* BASIC IDENTITY                                                       */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Personal Information
				</h3>

				<div className="grid sm:grid-cols-2 gap-5 md:gap-6">
					<input
						name="first_name"
						placeholder="First Name *"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full text-sm md:text-base"
					/>
					<input
						name="last_name"
						placeholder="Last Name *"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full text-sm md:text-base"
					/>
				</div>

				<input
					name="email"
					type="email"
					placeholder="Email *"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
				<input
					name="phone"
					placeholder="Phone Number *"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<div className="grid sm:grid-cols-2 gap-5 md:gap-6">
					<input
						name="birthdate"
						type="date"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
					<select
						name="gender"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full bg-white"
					>
						<option value="">Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</div>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* LOCATION                                                             */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">Location</h3>

				<input
					name="country"
					defaultValue="Philippines"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<div className="grid sm:grid-cols-2 gap-5 md:gap-6">
					<input
						name="province"
						placeholder="Province (Bulacan preferred) *"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
					<input
						name="city"
						placeholder="City / Municipality *"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
				</div>

				<input
					name="barangay"
					placeholder="Barangay"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<label className="flex items-start gap-3 text-sm">
					<input
						type="checkbox"
						name="location_confirmation"
						className="mt-1"
					/>
					I confirm I can regularly attend sessions around Malolos /
					Bulacan
				</label>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* TRAINING PROFILE                                                     */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Training Profile
				</h3>

				<div>
					<p className="text-sm font-medium mb-3">Training Types</p>

					<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
						{[
							"running",
							"gym",
							"hybrid",
							"cycling",
							"triathlon",
						].map((type) => (
							<label
								key={type}
								className="flex items-center gap-2"
							>
								<input
									type="checkbox"
									name="training_types[]"
									value={type}
								/>
								<span className="capitalize">{type}</span>
							</label>
						))}
					</div>
				</div>

				<select
					name="experience_level"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full bg-white"
				>
					<option value="">Experience Level</option>
					<option value="beginner">Beginner</option>
					<option value="intermediate">Intermediate</option>
					<option value="advanced">Advanced</option>
				</select>

				<div className="grid sm:grid-cols-2 gap-5 md:gap-6">
					<input
						name="years_running"
						type="number"
						placeholder="Years Running"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
					<input
						name="weekly_distance_km"
						type="number"
						placeholder="Weekly Distance (km)"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
				</div>

				<input
					name="average_run_pace"
					placeholder="Average Pace (e.g. 5:30/km)"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
				<input
					name="preferred_run_time"
					placeholder="Preferred Run Time"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<textarea
					name="goals"
					rows={3}
					placeholder="Running goals (fitness, race prep, social, etc.)"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* COMMUNITY PLATFORMS                                                  */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Community Platforms
				</h3>

				<p className="text-sm text-neutral-600">
					Facebook Group and Community Chat are required so we can
					contact you and add you to the main club group after
					approval.
				</p>

				<div className="grid sm:grid-cols-2 gap-3 text-sm">
					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="fb_group_joined"
							required
						/>
						Facebook Group (Required)
					</label>

					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="community_chat_joined"
							required
						/>
						Community Chat (Required)
					</label>

					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="platforms_joined[]"
							value="Facebook Page"
						/>
						Facebook Page
					</label>

					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="platforms_joined[]"
							value="Instagram"
						/>
						Instagram
					</label>

					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="platforms_joined[]"
							value="TikTok"
						/>
						TikTok
					</label>

					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							name="platforms_joined[]"
							value="Strava Club"
						/>
						Strava Club
					</label>
				</div>

				<input
					name="facebook_profile_name"
					placeholder="Facebook profile name used to join the group *"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					required
				/>
				<input
					name="messenger_name"
					placeholder="Messenger display name *"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					required
				/>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* HEALTH & SAFETY                                                      */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Health & Safety
				</h3>

				<input
					name="emergency_contact_name"
					placeholder="Emergency Contact Name *"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
				<input
					name="emergency_contact_phone"
					placeholder="Emergency Contact Phone *"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<textarea
					name="medical_conditions"
					rows={3}
					placeholder="Medical conditions or injuries (if any)"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<label className="flex items-start gap-3 text-sm">
					<input
						type="checkbox"
						name="fitness_acknowledgment"
						className="mt-1"
					/>
					I confirm I am physically capable of participating in
					running sessions
				</label>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* MEMBERSHIP EXPECTATIONS                                              */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Membership Expectations
				</h3>

				<label className="flex items-start gap-3 text-sm">
					<input
						type="checkbox"
						name="attendance_commitment"
						className="mt-1"
					/>
					I understand I must attend at least 2 sessions before
					official membership
				</label>

				<label className="flex items-start gap-3 text-sm">
					<input
						type="checkbox"
						name="activity_expectation"
						className="mt-1"
					/>
					I understand active members are expected to attend sessions
					regularly
				</label>

				<label className="flex items-start gap-3 text-sm">
					<input
						type="checkbox"
						name="community_behavior"
						className="mt-1"
					/>
					I agree to follow community rules and respect all members
				</label>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* COMMUNITY / CULTURE FIT                                              */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">Community</h3>

				<input
					name="how_did_you_hear"
					placeholder="How did you hear about us?"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<textarea
					name="motivation"
					rows={3}
					placeholder="Why do you want to join the run club?"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* WAIVER / AGREEMENT                                                   */}
			{/* -------------------------------------------------------------------- */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Waiver & Participation Agreement
				</h3>

				<p className="text-sm text-neutral-600 max-w-prose">
					Please review and agree before submitting your application.
				</p>

				<div className="space-y-4">
					<label className="flex items-start gap-3 text-sm leading-relaxed cursor-pointer">
						<input
							type="checkbox"
							name="fitness_acknowledgment"
							className="mt-1 h-4 w-4 shrink-0"
							required
						/>
						<span className="flex-1">
							I confirm that I am physically capable of
							participating in running sessions and understand the
							risks involved.
						</span>
					</label>

					<label className="flex items-start gap-3 text-sm leading-relaxed cursor-pointer">
						<input
							type="checkbox"
							name="safety_commitment"
							className="mt-1 h-4 w-4 shrink-0"
							required
						/>
						<span className="flex-1">
							I agree to follow all safety instructions, session
							guidelines, and community conduct standards.
						</span>
					</label>

					<label className="flex items-start gap-3 text-sm leading-relaxed cursor-pointer">
						<input
							type="checkbox"
							name="media_consent"
							className="mt-1 h-4 w-4 shrink-0"
						/>
						<span className="flex-1">
							I allow the club to capture and share photos/videos
							for announcements and community features.
						</span>
					</label>

					<label className="flex items-start gap-3 text-sm leading-relaxed cursor-pointer">
						<input
							type="checkbox"
							name="agreed_to_rules"
							value="1"
							className="mt-1 h-4 w-4 shrink-0"
							required
						/>
						<span className="flex-1">
							I have read and agree to the{" "}
							<a
								href="/waiver-and-terms#waiver"
								className="underline"
							>
								Liability Waiver
							</a>
							,{" "}
							<a
								href="/waiver-and-terms#safety"
								className="underline"
							>
								Safety Policy
							</a>
							, and{" "}
							<a
								href="/waiver-and-terms#terms"
								className="underline"
							>
								Participation Terms
							</a>
							.
						</span>
					</label>
				</div>
			</section>


			{/* -------------------------------------------------------------------- */}
			{/* SUBMIT                                                               */}
			{/* -------------------------------------------------------------------- */}
			<button
				type="submit"
				className="w-full md:w-auto bg-black text-white py-4 px-10 uppercase tracking-widest text-xs hover:bg-neutral-800 transition"
			>
				Submit Application
			</button>
		</form>
	);
}
