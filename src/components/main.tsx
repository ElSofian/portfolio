"use client";

import { useState, useEffect } from "react";
import Home from "@/components/home";
import Projects from "./projects";

export default function Main() {

	const [theme, setTheme] = useState<"dark" | "light">("light");
	const [page, setPage] = useState("home");

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		setTheme(theme === "dark" ? "dark" : "light");
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
		localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
		document.documentElement.classList.toggle("dark", theme === "dark");
	}

	const handlePageChange = (page: string) => {
		setPage(page);
	}

	return (
		<div className="flex items-center justify-center h-screen dark:bg-dark">
			<div className="outline-4 outline-black rounded-lg shadow-main w-[1000px] max-w-[1000px]">
				<div className="flex flex-row h-[800px]">

				<header className="border-r-border rounded-l-lg w-28 bg-primary w500:hidden relative flex items-center justify-center border-r-4">
					<div className="-rotate-90 whitespace-nowrap">
						<span className="text-center text-5xl font-semibold uppercase">Sofian.</span>
					</div>
				</header>
			
				<main className="w-full h-full bg-secondary dark:bg-secondary-dark">

					<nav className="grid grid-cols-[1fr_1fr_50px] border-b-4 border-black">
						<div className={`flex items-center justify-center p-3 cursor-click ${page === "home" ? "bg-black text-white" : "bg-primary text-black"}`} onClick={() => handlePageChange("home")}>
							<span className="text-center text-xl font-semibold uppercase">Home</span>
						</div>
						<div className={`flex items-center justify-center p-3 border-r-2 border-black cursor-click ${page === "projects" ? "bg-black text-white" : "bg-primary text-black"}`} onClick={() => handlePageChange("projects")}>
							<span className="text-center text-xl font-semibold uppercase">Projects</span>
						</div>
						<div className="flex items-center justify-center bg-primary cursor-click" onClick={toggleTheme}>
							<i className={`fa-regular ${theme === "dark" ? "fa-sun-bright" : "fa-moon"} fa-xl`} />
						</div>
					</nav>

					{page === "home"
						? <Home />
						: <Projects theme={theme} />
					}
				</main>
				</div>
			</div>
		</div>
	)

}