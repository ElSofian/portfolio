"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textParts = [
	{ text: "Hello!", pause: 1000 },
	{ text: "Welcome to...", pause: 1000 },
	{ text: "Oh damn who get the light so hard here?\n", pause: 1000 },
	{ text: "Let me fix it.\n", pause: 1000 },
	{ text: "Isn't better like that?\n", pause: 1000 },
	{
		text: "Come on, we're gamers, we live in the dark, everyone knows that.\n",
		pause: 1000,
	},
	{
		text: "Enough talking, you're here to see Sofian's projects, right?\n",
		pause: 1000,
	},
	{
		text: "Here we go !!",
		pause: 1000,
		showMario: true,
	},
];

export default function Transition({
	onFinishTransition,
}: {
	onFinishTransition: () => void;
}) {
	const [displayedText, setDisplayedText] = useState("");
	const [partIndex, setPartIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [bgDark, setBgDark] = useState(false);
	const [showMario, setShowMario] = useState(false);
	const [exit, setExit] = useState(false);

	const typeAudio: HTMLAudioElement = new Audio("/sounds/type.mp3");
	typeAudio.volume = 0.2;

	useEffect(() => {
		if (partIndex >= textParts.length) {
			const t = setTimeout(() => setExit(true), 1000);
			return () => clearTimeout(t);
		}

		const { text, pause, showMario } = textParts[partIndex];

		if (charIndex < text.length) {
			const t = setTimeout(() => {
				const ch = text[charIndex];
				setDisplayedText((p) => p + ch);
				if (ch !== "\n" && ch !== " ") typeAudio.play();
				setCharIndex((i) => i + 1);
			}, 40);
			return () => clearTimeout(t);

		} else {

			const t2 = setTimeout(() => {
				if (text == "Let me fix it") setBgDark(true);

				if (showMario) {
					setShowMario(true);
					const jump: HTMLAudioElement = new Audio("/sounds/mario-jump.mp3");
					jump.volume = 0.5;
					jump.play();
				}

				setDisplayedText((p) => p + (text.endsWith("\n") ? "\n" : " "));
				setPartIndex((p) => p + 1);
				setCharIndex(0);
			}, pause);
			return () => clearTimeout(t2);

		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [charIndex, partIndex]);

  return (
	<AnimatePresence>
		{!exit && (
			<motion.div
				key="transition"
				initial={{ backgroundColor: "#fff", color: "#000", opacity: 1 }}
				animate={{
				backgroundColor: bgDark ? "#000" : "#fff",
				color: bgDark ? "#fff" : "#000",
				opacity: 1,
				}}
				exit={{
				opacity: 0,
				}}
				transition={{ backgroundColor: { duration: 1 }, opacity: { duration: 1 } }}
				onAnimationComplete={(definition: { opacity?: number }) => {
				if (definition.opacity === 0) {
					const endSound = new Audio("/sounds/reverse-mario-jump.mp3");
					endSound.volume = 0.5;
					endSound.play();
					onFinishTransition();
				}
				}}
				className="min-h-screen flex items-center justify-center"
			>
				<div className="max-w-3xl mx-4 text-center text-xl sm:text-2xl md:text-3xl whitespace-pre-wrap break-words text-current">
				<p>{displayedText}</p>
				{showMario && <i className="nes-mario block mt-4 mario-jump" />}
				</div>
			</motion.div>
		)}
	</AnimatePresence>
  );
}
