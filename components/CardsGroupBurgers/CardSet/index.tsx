import Card from "./Card";
import styles from "./index.module.css";

export default function CardSet({ array }:    any     ) {
	return (
		<div className={styles["card-set"]}>
			{array.map((e: (typeof array)[0], i: number) => (
				<Card data={e} theKey={i} />
			))}
		</div>
	);
}
