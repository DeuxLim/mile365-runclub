export default function About() {
	return (
		<section id="about" className="h-screen flex flex-col p-4">
			<div className="h-[40%] flex justify-center items-center flex-col gap-4">
				<h1 className="font-heading text-4xl md:text-7xl font-black">
					Built on Consistency.
					<br />
					Driven by Community.
				</h1>

				<div className="flex flex-col px-5">
					<div className="font-body text-gray-300 text-sm text-center md:text-lg">
						MILE 365 Run Club is a Bulacan-based running community
						built for beginners to performance runners who believe
						in daily progress.
					</div>

					<div className="text-center text-gray-300 text-sm md:text-lg">
						We train with structure. We run with discipline. We grow
						together — 365 days a year.
					</div>
				</div>
			</div>

			<div className="flex flex-1 p-20">
				<div className="w-[40%] flex justify-start items-center">
					<div
						className="
                        p-20 
                        font-heading
                        text-4xl 
                        font-semibold
                        w-[90%]
                        flex
                        flex-col
                        gap-10
                        [&>div]:border-b
                        [&>div]:p-2
                        "
					>
						<div className="">Consistency</div>
						<div className="border-zinc-500">Structure</div>
						<div className="border-zinc-500">Community</div>
					</div>
				</div>

				<div className="w-[60%] flex justify-center items-center">
					<div className="w-full h-full m-10"></div>
				</div>
			</div>
		</section>
	);
}
