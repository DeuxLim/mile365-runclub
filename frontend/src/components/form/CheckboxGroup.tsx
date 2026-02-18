import type { FieldValues, UseFormRegister, Path } from "react-hook-form";

type CheckboxGroupProps<T extends FieldValues> = {
	name: Path<T>;
	options: readonly string[];
	register: UseFormRegister<T>;
	error?: string;
	columns?: string;
};

export function CheckboxGroup<T extends FieldValues>({
	name,
	options,
	register,
	error,
	columns = "grid-cols-2 sm:grid-cols-3",
}: CheckboxGroupProps<T>) {
	return (
		<div className="space-y-2">
			<div className={`grid ${columns} gap-3 text-sm`}>
				{options.map((option) => (
					<label key={option} className="flex items-center gap-2">
						<input
							type="checkbox"
							value={option}
							className="size-4"
							{...register(name)}
						/>
						<span className="capitalize">{option}</span>
					</label>
				))}
			</div>

			{error && <p className="text-xs text-red-500">{error}</p>}
		</div>
	);
}
