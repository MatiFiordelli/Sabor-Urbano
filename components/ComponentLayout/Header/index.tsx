import Image from "next/image";
import styles from "./index.module.css";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useHeaderStore } from '@/stores/'
import Link from "next/link";

export default function Header() {
	const headerHeight = useHeaderStore((state) => state.headerHeight)
	const isActiveHamburgerButton = useHeaderStore((state) => state.isActiveHamburgerButton)

	return (
		<header 
			className={styles.header}
			style={{ 
				height: `${headerHeight}px`,
				backgroundColor: isActiveHamburgerButton ? 'rgba(0,0,0)' : ''
			}}
		>
			<Link
				href={'/'}
				title="logo"
				aria-label="logo"
			>
				<Image
					src="/images/sabor_urbano.webp"
					alt="logo"
					width={100}
					height={100}
					className={styles.logo}
				/>
			</Link>
			<Nav />
			<MobileNav />
		</header>
	);
}
