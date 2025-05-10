"use client";

import { useEffect, useState } from "react";
import Welcome from "@/components/Welcome/Welcome";
import Transition from "@/components/Welcome/Transition";
import MainContent from "@/components/Main/MainContent";

export default function IntroHandler() {
	const [hasVisited, setHasVisited] = useState(false);
	const [hasPressedEnter, setHasPressedEnter] = useState(false);
	const [isTransitionFinished, setIsTransitionFinished] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const visited = document.cookie.includes("hasVisited=true");
		setHasVisited(visited);
		setLoading(false);
	}, []);

	const handlePressedEnter = () => {
		setHasPressedEnter(true);
	};

	const handleTransitionFinished = () => {
		document.cookie = "hasVisited=true; path=/; max-age=31536000";
		setIsTransitionFinished(true);
		setHasVisited(true);
	};

	if (loading) return null;

	if (hasVisited && !hasPressedEnter) return <MainContent />;
	if (hasPressedEnter && !isTransitionFinished)
		return <Transition onFinishTransition={handleTransitionFinished} />;
	if (hasPressedEnter && isTransitionFinished) return <MainContent />;

	return <Welcome onPressedEnter={handlePressedEnter} />;
}
