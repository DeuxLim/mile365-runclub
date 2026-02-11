import { useEffect } from "react";
import { createPortal } from "react-dom";
import { TbX } from "react-icons/tb";

type MobileMenuProps = {
	open: boolean;
	onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
	// lock background scroll
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Escape to close
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onClose]);

	return createPortal(
		<div
			className={`
                    fixed inset-0 z-999
                    bg-white/95 backdrop-blur-md
                    text-black
                    transition-[opacity,transform] duration-300 ease-out
                    ${
						open
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-6 pointer-events-none"
					}
                `}
		>
			{/* close button */}
			<button
				onClick={onClose}
				className="absolute top-8 right-7"
				aria-label="Close menu"
			>
				<TbX size={28} />
			</button>

			{/* links */}
			<div className="flex flex-col h-full justify-center items-center gap-10 text-xl font-semibold">
				{["Home", "Runs", "About", "Community"].map((item, i) => (
					<a
						key={item}
						href={`#${item.toLowerCase()}`}
						onClick={onClose}
						className={`
							transition-all duration-300
							${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
						`}
						style={{ transitionDelay: `${i * 70}ms` }}
					>
						{item}
					</a>
				))}
			</div>
		</div>,
		document.body,
	);
}
