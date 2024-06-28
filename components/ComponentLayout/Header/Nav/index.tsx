import { useHeaderStore } from "@/stores";
import styles from "./index.module.css";

export default function Nav() {
    const itemsNav = useHeaderStore((state)=>state.itemsNav)

	return (
		<nav className={styles.nav}>
			<ul>
				{itemsNav.map((e, i) => (
					<li data-text={e} key={i}>
						{e}
					</li>
				))}
			</ul>
		</nav>
	);
}
