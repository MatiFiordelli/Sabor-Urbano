import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.leftSection}>
                    <h1 className={styles.leftSectionTitle}>Sabor Urbano</h1>
                    <h5 className={styles.leftSectionContent}>
                        Av. Angela de la Casa 1840
                    </h5>
                    <h5 className={styles.leftSectionContent}>
                        S2300 Rafaela, Santa Fe
                    </h5>
                    <h5 className={styles.leftSectionContent}>
                        3492 331704
                    </h5>
                </div>
                <div className={styles.rightSection}>
                    <Link
                        href="mailto:antofiordelli@gmail.com"
                        title="Gmail"
                        target="_blank"
                    >
                        <Image
                            src="/svg/socialMedia/gmail.svg"
                            alt="Gmail"
                            aria-label="Gmail icon link"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100092323464595" title="Facebook" target="_blank">
                        <Image
                            src="/svg/socialMedia/facebook.svg"
                            alt="Facebook"
                            aria-label="Facebook icon link"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100092323464595" title="Instagram" target="_blank">
                        <Image
                            src="/svg/socialMedia/instagram.svg"
                            alt="Instagram"
                            aria-label="Instagram icon link"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100092323464595" title="Twitter" target="_blank">
                        <Image
                            src="/svg/socialMedia/twitter.svg"
                            alt="Twitter"
                            aria-label="Twitter icon link"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="https://wa.me/543492331704" title="Whatsapp" target="_blank">
                        <Image
                            src="/svg/socialMedia/whatsapp.svg"
                            alt="Whatsapp"
                            aria-label="Whatsapp icon link"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>
			<p className={styles.copyright}>
				Copyright ©2024
				<Link
					href="https://www.linkedin.com/in/matiasfiordelli/"
					title="Go to LinkedIn.."
				>
					Matias Fiordelli
				</Link>
			</p>
		</footer>
	);
}
