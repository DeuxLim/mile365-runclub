export default function JoinForm() {
	return (
		<form className="space-y-16">
			{/* ============================= */}
			{/* PERSONAL INFORMATION */}
			{/* ============================= */}
			<section>
				<h3 className="text-xl font-semibold mb-6">
					Personal Information
				</h3>

				<div className="grid md:grid-cols-2 gap-6">
					<input
						name="first_name"
						placeholder="First Name *"
						className="border p-3 w-full"
					/>
					<input
						name="last_name"
						placeholder="Last Name *"
						className="border p-3 w-full"
					/>
				</div>

				<div className="mt-6">
					<input
						name="email"
						type="email"
						placeholder="Email *"
						className="border p-3 w-full"
					/>
				</div>

				<div className="mt-6">
					<input
						name="phone"
						placeholder="Phone"
						className="border p-3 w-full"
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-6 mt-6">
					<input
						name="birthdate"
						type="date"
						className="border p-3 w-full"
					/>
					<select name="gender" className="border p-3 w-full">
						<option value="">Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</div>
			</section>

			{/* ============================= */}
			{/* LOCATION */}
			{/* ============================= */}
			<section>
				<h3 className="text-xl font-semibold mb-6">Location</h3>

				<input
					name="country"
					defaultValue="Philippines"
					className="border p-3 w-full mb-6"
				/>

				<div className="grid md:grid-cols-2 gap-6">
					<input
						name="province"
						placeholder="Province"
						className="border p-3 w-full"
					/>
					<input
						name="city"
						placeholder="City"
						className="border p-3 w-full"
					/>
				</div>

				<div className="mt-6">
					<input
						name="barangay"
						placeholder="Barangay"
						className="border p-3 w-full"
					/>
				</div>
			</section>

			{/* ============================= */}
			{/* TRAINING PROFILE */}
			{/* ============================= */}
			<section>
				<h3 className="text-xl font-semibold mb-6">Training Profile</h3>

				{/* Training Types (array) */}
				<div className="mb-6">
					<p className="text-sm font-medium mb-3">Training Types</p>

					<div className="flex flex-wrap gap-4 text-sm">
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="training_types[]"
								value="running"
							/>
							Running
						</label>

						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="training_types[]"
								value="gym"
							/>
							Gym
						</label>

						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="training_types[]"
								value="hybrid"
							/>
							Hybrid
						</label>

						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="training_types[]"
								value="cycling"
							/>
							Cycling
						</label>

						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="training_types[]"
								value="triathlon"
							/>
							Triathlon
						</label>
					</div>
				</div>

				<select
					name="experience_level"
					className="border p-3 w-full mb-6"
				>
					<option value="">Experience Level</option>
					<option value="beginner">Beginner</option>
					<option value="intermediate">Intermediate</option>
					<option value="advanced">Advanced</option>
				</select>

				<div className="grid md:grid-cols-2 gap-6 mb-6">
					<input
						name="years_running"
						type="number"
						placeholder="Years Running"
						className="border p-3 w-full"
					/>
					<input
						name="weekly_distance_km"
						type="number"
						placeholder="Weekly Distance (km)"
						className="border p-3 w-full"
					/>
				</div>

				<input
					name="average_run_pace"
					placeholder="Average Pace (e.g. 5:30/km)"
					className="border p-3 w-full mb-6"
				/>

				<input
					name="preferred_run_time"
					placeholder="Preferred Run Time (morning, evening, weekends)"
					className="border p-3 w-full mb-6"
				/>

				<textarea
					name="goals"
					rows={3}
					placeholder="Goals (marathon, fitness, weight loss, etc.)"
					className="border p-3 w-full"
				/>
			</section>

			{/* ============================= */}
			{/* HEALTH & SAFETY */}
			{/* ============================= */}
			<section>
				<h3 className="text-xl font-semibold mb-6">Health & Safety</h3>

				<input
					name="emergency_contact_name"
					placeholder="Emergency Contact Name"
					className="border p-3 w-full mb-6"
				/>
				<input
					name="emergency_contact_phone"
					placeholder="Emergency Contact Phone"
					className="border p-3 w-full mb-6"
				/>

				<textarea
					name="medical_conditions"
					rows={3}
					placeholder="Medical Conditions (if any)"
					className="border p-3 w-full"
				/>
			</section>

			{/* ============================= */}
			{/* COMMUNITY */}
			{/* ============================= */}
			<section>
				<h3 className="text-xl font-semibold mb-6">Community</h3>

				<input
					name="how_did_you_hear"
					placeholder="How did you hear about MILE 365?"
					className="border p-3 w-full mb-6"
				/>

				<textarea
					name="motivation"
					rows={3}
					placeholder="Why do you want to join?"
					className="border p-3 w-full"
				/>
			</section>

			{/* ============================= */}
			{/* WAIVER */}
			{/* ============================= */}
			<section>
				<label className="flex items-center gap-3 text-sm">
					<input type="checkbox" name="agreed_to_rules" value="1" />I
					agree to club rules and waiver *
				</label>
			</section>

			<button
				type="submit"
				className="bg-black text-white py-4 px-8 uppercase tracking-widest text-xs"
			>
				Submit Application
			</button>
		</form>
	);
}
