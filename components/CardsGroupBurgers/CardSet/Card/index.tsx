import Image from "next/image";
import styles from "./index.module.css";
import Price from "./Price";

export default function Card({ data }:     any     ) {

	return (
		<section className={styles["card-container"]}>
			<article className={styles.card}>
				<section className={styles["car__image-container"]}>
					<Image
						src={`/images/${data.image}`}
						fill
						sizes="(min-width: 175px) 50vw, 100%"
						alt={data.title}
						className={styles["car__image-container--image"]}
						priority
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
						<span className={styles["card__texts--extra-text"]}>
							{data["extra-text"]}
						</span>
					)}
				</section>
			</article>
		</section>
	);
}
