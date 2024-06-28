import React from "react";
import styles from "./index.module.css";
import { useHeaderStore } from "@/stores";

export default function HamburgerButton() {
    const isActiveHamburgerButton = useHeaderStore((state) => state.isActiveHamburgerButton)
    const setIsActiveHamburgerButton = useHeaderStore((state)=> state.SetIsActiveHamburgerButton)

    const handleClick = () => {
        setIsActiveHamburgerButton(!isActiveHamburgerButton)
    }

	return (
		 <section 
            className={`${styles['hamburger-button']} ${isActiveHamburgerButton ? styles['hamburger-button--active'] : ''}`}
            onClick={()=>handleClick()}
        >
            <div className={styles.lineTop} />
            <div className={styles.lineMiddle} />
            <div className={styles.lineBottom} />
        </section>
	);
}
