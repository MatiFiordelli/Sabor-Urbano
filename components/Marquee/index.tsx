import styles from './index.module.css'
import SVGShadow from './assets/ticker-shadow.svg'
import SVGFold from './assets/ticker-notch.svg'
import Image from 'next/image'

export default function Marquee() {

    return (
        <div className={styles.marquee}>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeOuter}>
                    <div className={styles.marqueeInnerTextLeft}>
                        <span>Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli </span>
                        <img className={styles.marqueeFold} src="./assets/ticker-notch.svg" alt="marquee-shadow" />
                        
                    </div>
                    <div className={styles.marqueeInnerTextRight}>
                        <span>delli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli Matias Javier Fiordelli </span>
                    </div>
                    <img className={styles.marqueeShadow} src= {`${SVGShadow}`} alt="marquee-shadow" />
                </div>
            </div>
        </div>
    )
}

