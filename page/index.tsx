import ComponentLayout from "@/components/ComponentLayout";
import "../app/globals.css";
import styles from "./index.module.css";
import Image from "next/image";
import CardsGroupBurgers from "@/components/CardsGroupBurgers";

export default function Home() {
	return (
		<ComponentLayout>
			<main className={styles.main}>
				<div className={styles["upper-text"]}>
					<h1>HOT DELIVERY</h1>
					<h2>
						Sabor Urbano ~ Food Truck, es el lugar ideal para
						disfrutar de las mejores comidas caseras junto a tus
						amigos o familia. Ofrecemos comidas y bebidas de todo
						tipo para llevar, o podes disfrutarlas en nuestro
						local. ¡Tenemos delivery propio, no te quedes con las
						ganas!
					</h2>
				</div>
				<div className={styles["big-burger"]}>
					<Image
						src="/images/flames_burger3.avif"
						alt=""
						width={794}
						height={494}
						className={styles["big-burger__image"]}
						priority
					/>
				</div>

				<CardsGroupBurgers />
			</main>
		</ComponentLayout>
	);
}
