"use client";
import { useEffect, useState } from "react";

import Card from "./CardSet/Card";
import styles from "./index.module.css";
import burgersJSON from "@/public/json/burgers.json";
import frenchFriesJSON from "@/public/json/french_fries.json";
import sandwichMilanesaJSON from "@/public/json/sandwich_milanesa.json";
import sandwichLomitoJSON from "@/public/json/sandwich_lomito.json";
import milanesasPlatoJSON from "@/public/json/milanesa_al_plato.json";
import empanadasJSON from "@/public/json/empanadas.json";
import pizzasJSON from "@/public/json/pizzas.json";
import CardSet from "./CardSet";

export default function CardsGroupBurgers() {
	const [burgersData] = useState<typeof burgersJSON>(burgersJSON);
	const [frenchFriesData] = useState<typeof frenchFriesJSON>(frenchFriesJSON);
	const [sandwichMilanesaData] = useState<typeof sandwichMilanesaJSON>(sandwichMilanesaJSON);
	const [sandwichLomitoData] = useState<typeof sandwichLomitoJSON>(sandwichLomitoJSON);
	const [milanesasPlatoData] = useState<typeof milanesasPlatoJSON>(milanesasPlatoJSON);
	const [empanadasData] = useState<typeof empanadasJSON>(empanadasJSON);
	const [pizzasData] = useState<typeof pizzasJSON>(pizzasJSON);

	const subSections = [
		{title: "Hamburguesas", data: burgersData?.burgers},
		{title: "Papas fritas", data: frenchFriesData?.french_fries},
		{title: "Sandwichs de milanesa", data: sandwichMilanesaData?.sandwich_milanesa},
		{title: "Lomitos", data: sandwichLomitoData?.sandwich_lomito},
		{title: "Milanesas al plato", data: milanesasPlatoData?.milanesa_al_plato},
		{title: "Empanadas", data: empanadasData?.empanadas},
		{title: "Pizzas", data: pizzasData?.pizzas},
	]

	return (
		<section className={styles["cards-group"]}>
			{subSections.map((subSection, index) => (
				<div className={styles["cards-group-subsection"]} key={index}>
					<p className={styles["cards-group-subsection__title"]}>{subSection.title}</p>
					<CardSet array={subSection.data} />
					<p className={styles["cards-group-subsection__separator"]} />
				</div>
			))}
		</section>
	);
}
