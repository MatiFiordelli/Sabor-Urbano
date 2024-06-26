import Image from "next/image";
import styles from "./index.module.css";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useHeaderStore } from '@/stores/'

export default function Header() {
	const headerHeight = useHeaderStore((state) => state.headerHeight)

	return (
		<header 
			className={styles.header}
			style={{ height: `${headerHeight}px` }}
		>
			<Image
				src="/images/sabor_urbano.webp"
				alt="logo"
				width={100}
				height={100}
				className={styles.logo}
			/>
			<Nav />
			<MobileNav />
		</header>
	);
}
