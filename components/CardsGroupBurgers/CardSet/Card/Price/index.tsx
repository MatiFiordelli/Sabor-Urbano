import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Price({ data }:    any   ) {
	const [unitPriceSmall, setUnitPriceSmall] = useState("") as any;
	const [unitPriceBig, setUnitPriceBig] = useState("") as any;

	useEffect(() => {
		if (data.type === "Empanadas") {
			setUnitPriceSmall(
				<small>
					½ Docena
					<br />
				</small>
			);
			setUnitPriceBig(
				<small>
					Docena
					<br />
				</small>
			);
		}
		if (data.type === "Papas") {
			setUnitPriceSmall(
				<small>
					Chica
					<br />
				</small>
			);
			setUnitPriceBig(
				<small>
					Grande
					<br />
				</small>
			);
		}
	}, [data]);

	const toPesosArgentinos = (value: number) =>
		value.toLocaleString("es-ar", {
			style: "currency",
			currency: "ARS",
			minimumFractionDigits: 2,
		});

	return (
		<p className={styles["card__texts--price"]}>
			{data["price-small"] && (
				<span>
					{unitPriceSmall}

					{toPesosArgentinos(Number(data["price-small"]))}
				</span>
			)}
			{data["price-big"] && (
				<span>
					{unitPriceBig}

					{toPesosArgentinos(Number(data["price-big"]))}
				</span>
			)}
		</p>
	);
}
