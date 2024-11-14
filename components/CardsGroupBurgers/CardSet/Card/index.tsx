import Image from "next/image";
import styles from "./index.module.css";
import Price from "./Price";
import { motion } from "framer-motion"

export default function Card({ data, theKey }:     any     ) {
	const randomSign = (() => Math.random() > 0.5 ? 1 : -1)()

	return (
		<motion.section 
			key = {theKey * Math.random()}
			className={styles["card-container"]}
			initial={{
				opacity: 0,
				transform: `
					translateX(${randomSign * Math.random() * 100}%) 
					rotateZ(${randomSign * Math.random() * 45}deg) 
					rotateX(${randomSign * Math.random() * 90}deg)
					rotateY(${randomSign * Math.random() * 90}deg)`, 
			}}
			whileInView={{
				opacity: 1,
				transform: "translateX(0)"
			}}
			viewport={{
				once: true,
				margin: "0px 0px -200px 0px"
			}}
			transition={{
				duration: 0.7,
				type: "ease-in-out"
			}}
		>
			<article className={styles.card}>
				<section className={styles["car__image-container"]}>
					<Image
						src={`/images/${data.image}`}
						fill
						sizes="(min-width: 175px) 50vw, 100%"
						alt={data.title}
						className={styles["car__image-container--image"]}
						loading= "lazy"
					/>
				</section>

				<section className={styles.card__texts}>
					<p
						className={styles["card__texts--title"]}
						title={data.title}
					>
						{data.title}
					</p>
					<p
						className={styles["card__texts--description"]}
						title={data.description}
					>
						{data.description}
					</p>

					<Price data={data as typeof data} />
					
					{data["extra-text"] && (
						<motion.span 
							className={styles["card__texts--extra-text"]}
							initial={{
								opacity: 0,
								transform: "translate(20%, 20%) rotateZ(-25deg) scale(0)",
							}}
							whileInView={{
								opacity: [0,1,1],
								transform: [
									"translate(20%, 20%) rotateZ(-25deg) scale(0)", 
									"translate(20%, 20%) rotateZ(-25deg) scale(1.15)", 
									"translate(20%, 20%) rotateZ(-25deg) scale(1)"
								],
							}}
							transition={{
								delay: 0.7,
								duration: 0.7,
								ease: "easeOut",
							}}
							viewport={{
								once: true
							}}
						>
							{data["extra-text"]}
						</motion.span>
					)}
				</section>
			</article>
		</motion.section>
	);
}
