import Image from "next/image";
import Link from "next/link";

export default function Projects({ theme }: { theme: "dark" | "light" }) {

	const Project = (name: string, description: string, image: string, link: string, github: string) => {
		return (
			<div className="w-full px-8 py-10 border-b-4 border-r-4 border-black">
				<div className="mx-auto w-3/4">
					<div className="flex flex-col">
						<div className="border-2 border-black shadow-little rounded-lg">
							{theme === "dark" ? (
								<Image src={`/dark-${image.replace("/", "")}`} alt={name} width={608} height={304} className="rounded-lg" />
							) : (
								<Image src={image} alt={name} width={608} height={304} className="rounded-lg" />
							)}
						</div>
						<p className="text-3xl font-bold mt-6">{name}</p>
						<p className="text-lg font-semibold mt-5">{description}</p>
						<div className="flex flex-row gap-4 mt-5 mb-1 w-full">
							<Link href={link} target="_blank" className="w-full">
								<button className="bg-primary dark:text-black px-4 py-2 rounded-lg w-full font-medium uppercase border-2 border-black shadow-little">
									Visiter
								</button>
							</Link>
							<Link href={github} target="_blank" className="w-full">
								<button className="bg-primary dark:text-black px-4 py-2 rounded-lg w-full font-medium uppercase border-2 border-black shadow-little">
										GitHub
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}


	return (
		<div className="flex flex-col items-center overflow-y-auto h-full max-h-[745px] dark:text-gray-100
		[&::-webkit-scrollbar]:w-5
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:bg-black">

			{
				Project(
					"Dashboard",
					"Un dashboard de comptabilité pour gérer plusieurs entreprises",
					"/calipso-dashboard.png",
					"https://demo.calipso.me",
					"https://github.com/ElSofian/calipso-dashboard"
				)
			}
			{
				Project(
					"Markdown Live Editor",
					"Un convertisseur texte vers markdown en temps réel",
					"/mk-editor.png",
					"https://mk-editor.sofianelaloui.me",
					"https://github.com/ElSofian/markdown-live-editor"
				)
			}
			{
				Project(
					"TicTacToe",
					"Jeu en multijoueur avec websockets",
					"/calipso-dashboard.png",
					"https://tictactoe.sofianelaloui.me",
					"https://github.com/ElSofian/tictactoe"
				)
			}

		</div>
	)
}