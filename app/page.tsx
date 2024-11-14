"use client"
import { motion, useScroll, useViewportScroll, useWillChange } from "framer-motion";
import ComponentLayout from "@/components/ComponentLayout";
import "../app/globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import CardsGroupBurgers from "@/components/CardsGroupBurgers";
import Marquee from "@/components/Marquee";
import { useEffect, useRef } from "react";
//import Waves from "@/components/Canvas/Waves";
import TopPresentation from "@/components/TopPresentation";

export default function Home() {


	return (
		<ComponentLayout>
			<main className={styles.main}>

				{/* <Waves defaultColor={"#FFF"} /> */}

				<TopPresentation />

				<CardsGroupBurgers />

				<Marquee text="Sabor Urbano - Av. Angela de la Casa 1840 - Whatsapp: 3492 331704 " />

				<section className={styles.aboutus}>
					<h2>La Historia de Sabor Urbano</h2> 
					<p>Imagina un viaje en el que la comida es el destino. Un viaje en el que cada bocado es una aventura, cada sabor es una emoción y cada plato es una historia.</p>
					<p>Para Lucas y Antonela, la comida no es solo algo que se come, es una forma de vida. Es una forma de conectar con la gente, de compartir momentos y de crear recuerdos.</p>
					<p>Con sus hijos Bastian y Alma, la familia Sabor Urbano se embarcó en un viaje para crear un food truck que fuera más que solo un lugar para comer. Querían crear un espacio en el que la gente pudiera experimentar la magia de la comida, en el que cada bocado fuera una sorpresa y cada plato fuera una obra de arte.</p>
					<p>Así nació Sabor Urbano, un food truck que es un viaje en sí mismo. Un lugar en el que la comida es el destino y la aventura es el camino.</p>
					<p>¡Unite a nosotros en este viaje! Descubrí nuestra selección de platos, explora nuestra historia y senti el sabor de la vida en Sabor Urbano.</p>
					<p>¡Bienvenido a Sabor Urbano!</p>
				</section>
			</main>
		</ComponentLayout>
	);
}
