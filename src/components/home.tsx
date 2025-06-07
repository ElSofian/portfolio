import Link from "next/link";

export default function Home() {

	return (
		<div className="flex flex-col items-center overflow-y-auto dark:text-gray-100">
			<div className="p-10">
				<div className="flex flex-col gap-8 font-medium text-xl w600:text-lg w600:p-[30px]">
					<p>Développeur Fullstack, passionné par la création d&apos;applications web évolutives avec Next.js, React et TypeScript.</p>
					<p>Explorez mes projets pour voir comment j&apos;utilise les technologies modernes afin de créer des solutions performantes et ergonomiques.</p>
					<div className="flex items-center gap-8">
						<Link href="https://github.com/ElSofian" target="_blank">
							<i className="fa-brands fa-github fa-lg" />
						</Link>
						<Link href="https://www.linkedin.com/in/sofian-elaloui/" target="_blank">
							<i className="fa-brands fa-linkedin fa-lg" />
						</Link>
						<Link href="mailto:contact@sofianelaloui.me" target="_blank">
							<i className="fa-solid fa-envelope fa-lg" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}