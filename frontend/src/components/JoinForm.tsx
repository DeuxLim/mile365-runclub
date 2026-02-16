export default function JoinForm() {
	return (
		<form className="space-y-14 md:space-y-16 max-w-4xl mx-auto">
			{/* PERSONAL INFORMATION */}
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
					placeholder="Phone"
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

			{/* LOCATION */}
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
						placeholder="Province"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
					<input
						name="city"
						placeholder="City"
						className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
					/>
				</div>

				<input
					name="barangay"
					placeholder="Barangay"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
			</section>

			{/* TRAINING PROFILE */}
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
					placeholder="Goals"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
			</section>

			{/* HEALTH */}
			<section className="space-y-6">
				<h3 className="text-lg md:text-xl font-semibold">
					Health & Safety
				</h3>

				<input
					name="emergency_contact_name"
					placeholder="Emergency Contact Name"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
				<input
					name="emergency_contact_phone"
					placeholder="Emergency Contact Phone"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>

				<textarea
					name="medical_conditions"
					rows={3}
					placeholder="Medical Conditions"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
			</section>

			{/* COMMUNITY */}
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
					placeholder="Why do you want to join?"
					className="border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black p-3 md:p-4 w-full"
				/>
			</section>

			{/* WAIVER */}
			<section>
				<label className="flex items-start gap-3 text-sm">
					<input
						type="checkbox"
						name="agreed_to_rules"
						value="1"
						className="mt-1"
					/>
					I agree to club rules and waiver *
				</label>
			</section>

			<button
				type="submit"
				className="w-full md:w-auto bg-black text-white py-4 px-10 uppercase tracking-widest text-xs hover:bg-neutral-800 transition"
			>
				Submit Application
			</button>
		</form>
	);
}
