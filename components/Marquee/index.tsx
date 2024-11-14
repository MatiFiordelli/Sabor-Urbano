import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

interface MarqueeProps {
	text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {

	return (
		<motion.div
			className={styles["marquee-container"]}
			transition={{
				type: "linear",
				duration: 0.1,
			}}
			drag="x"
			dragMomentum={false}

			whileHover={{ scale: 1 }}
			whileTap={{ scale: 1 }}
			
		>
			<div className={styles["marquee"]}>
				{Array.from(Array(10)).map((_,i) => (
					<span key={i} className={styles["marquee-text"]}>
						{text}{" "}
					</span>
				))}
			</div>
		</motion.div>
	);
};

export default Marquee;

//import styles from "./index.module.css";

/* export default function Marquee() {
	return (
		<div className={styles.marqueeContainer}>
			<div className={styles.box}>
  				<div className={styles.inner}>
    				<span>
						Sabor Urbano - Av. Angela de la Casa 1840 - Whatsapp: 3492 331704 
						Sabor Urbano - Av. Angela de la Casa 1840 - Whatsapp: 3492 331704
						
					</span>
  				</div>
  				<div className={styles.inner}>
    				<span>
						Sabor Urbano - Av. Angela de la Casa 1840 - Whatsapp: 3492 331704 
						Sabor Urbano - Av. Angela de la Casa 1840 - Whatsapp: 3492 331704
						
					</span>
  				</div>
			</div>
		</div>
	);
} */
