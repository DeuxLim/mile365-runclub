import { Link, NavLink } from "react-router";
import { MdOutlineGroupAdd } from "react-icons/md";

export default function Sidebar() {
	return (
		<aside className="w-96 hidden md:flex flex-col border-r border-zinc-200">
			<nav className="px-6 py-4 h-full flex flex-col gap-2 w-full items-center">
				<Link to="dashboard" className="w-full m-4">
					<h1 className="font-heading font-bold text-left text-xl">
						MILE 365 RUN CLUB
					</h1>
				</Link>
				<ul className="w-full">
					<li className="flex flex-col gap-2">
						<p className="text-xs text-zinc-500">Club Management</p>
						<ul>
							<li>
								<NavLink
									to="membership-requests"
									className={({ isActive }) =>
										`flex items-center gap-2 px-4 py-2 rounded-md transition ${
											isActive
												? "bg-zinc-100 font-normal"
												: "hover:bg-zinc-100"
										}`
									}
								>
									<MdOutlineGroupAdd className="text-xl" />
									<div className="text-sm">
										Membership Requests
									</div>
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
