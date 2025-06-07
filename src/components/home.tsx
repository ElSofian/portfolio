import Link from "next/link";

export default function Home() {

	return (
		<div className="flex flex-col items-center overflow-y-auto dark:text-gray-100">
			<div className="p-10">
				<div className="flex flex-col gap-8 font-medium text-xl w600:text-lg w600:p-[30px]">
					<p>I&apos;m a Fullstack Developer passionate about crafting scalable web applications with Next.js, React and TypeScript.</p>
					<p>Explore my projects to see how I leverage modern technologies to create efficient and user-friendly solutions.</p>
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