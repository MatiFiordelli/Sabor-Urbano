"use client"
import { useEffect, useState } from "react";
import Card from "./CardSet/Card";
import styles from "./index.module.css";
import burgersJSON from "@/public/json/burgers.json";
import frenchFriesJSON from "@/public/json/french_fries.json";
import sandwichMilanesaJSON from "@/public/json/sandwich_milanesa.json";
import sandwichLomitoJSON from "@/public/json/sandwich_lomito.json";
import milanesasPlatoJSON from "@/public/json/milanesa_al_plato.json";
import empanadasJSON from "@/public/json/empanadas.json"
import pizzasJSON from "@/public/json/pizzas.json"
import CardSet from "./CardSet";

export default function CardsGroupBurgers() {
	const [burgersData] = 
        useState<typeof burgersJSON>(burgersJSON);
	const [frenchFriesData] = 
        useState<typeof frenchFriesJSON>(frenchFriesJSON);
	const [sandwichMilanesaData] =
		useState<typeof sandwichMilanesaJSON>(sandwichMilanesaJSON);
	const [sandwichLomitoData] =
		useState<typeof sandwichLomitoJSON>(sandwichLomitoJSON);
	const [milanesasPlatoData] =
		useState<typeof milanesasPlatoJSON>(milanesasPlatoJSON);
    const [empanadasData] =
		useState<typeof empanadasJSON>(empanadasJSON);
    const [pizzasData] =
		useState<typeof pizzasJSON>(pizzasJSON);

	return (
		<section className={styles['cards-group']}>
            <p className={styles['cards-group__title']}>Hamburguesas</p>
			<CardSet array={burgersData?.burgers} />
            <p className={styles['cards-group__title']}>Papas fritas</p>
            <CardSet array={frenchFriesData?.french_fries} />
            <p className={styles['cards-group__title']}>Sandwichs de milanesa</p>
			<CardSet array={sandwichMilanesaData?.sandwich_milanesa} />
            <p className={styles['cards-group__title']}>Lomitos</p>
            <CardSet array={sandwichLomitoData?.sandwich_lomito} />
            <p className={styles['cards-group__title']}>Milanesas al plato</p>
            <CardSet array={milanesasPlatoData?.milanesa_al_plato} />
            <p className={styles['cards-group__title']}>Empanadas</p>
            <CardSet array={empanadasData?.empanadas} />
            <p className={styles['cards-group__title']}>Pizzas</p>
            <CardSet array={pizzasData?.pizzas} />
		</section>
	);
}
