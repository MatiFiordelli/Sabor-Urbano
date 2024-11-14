import React from "react";
import { motion } from "framer-motion";
import { lettersVariants } from "./lettersVariants";

export default function WordMaker({word}: { word: string }) {

	return (
		<span>
			{word && word.split('').map((letter, index) => (
				<motion.span
					key={index}
					variants={lettersVariants}
					initial="initial"
					whileHover="hover"
					whileTap="hover"
					animate="animate"
					custom={{ delay: Math.floor(Math.random() * 30) / 10 }}
				>
					{letter === " " ? "\u00A0" : letter}
				</motion.span>
			))}
		</span>
	);
}
