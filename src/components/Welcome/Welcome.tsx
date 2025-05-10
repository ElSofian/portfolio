import Link from "next/link";

export default function Welcome({ onPressedEnter }: { onPressedEnter: () => void }) {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold text-center mt-16 mb-0">Welcome to Sofian's World!</h1>
			<div className="mt-6">
				<button onClick={onPressedEnter} className="bg-[#d83434] text-white border-0 py-4 px-10 m-10 !outline-none shadow-button active:translate-y-[5px] active:shadow-button-active">Press Enter to Start</button>
			</div>
		</div>
	);
}