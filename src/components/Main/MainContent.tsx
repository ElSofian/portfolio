"use client";

import { motion } from "framer-motion";

export default function MainContent() {
  return (
    <motion.div
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <h1 className="text-4xl font-bold">Sofian's Projects</h1>
    </motion.div>
  );
}
