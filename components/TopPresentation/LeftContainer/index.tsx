import React from 'react'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import WordMaker from './WordMaker'

export default function LeftContainer() {

    return (
        <motion.div 
            className={styles["top-presentation-left-inner-container"]}
            initial={{
                opacity: 0,
                left: -100,
                transform: "skewX(-30deg)"
            }}
            animate={{
                opacity: 1,
                left: 0,
                transform: "skewX(0deg)"
            }}
            transition={{ 
                duration: 0.7, 
                delay: 0.5, 
                type: "spring" 
            }}
        >
            <h1 className={styles["top-presentation-left-inner-container__title"]}>
                <WordMaker word="SABOR " />
                <WordMaker word="URBANO" />
            </h1>
            <h2 className={styles["top-presentation-left-inner-container__subtitle"]}>
                Sabor Urbano ~ Food Truck, es el lugar ideal para
                disfrutar de las mejores comidas caseras junto a tus
                amigos o familia. Ofrecemos comidas y bebidas de todo
                tipo para llevar, o podes disfrutarlas en nuestro
                local. ¡Tenemos delivery propio, no te quedes con las
                ganas!
            </h2>
        </motion.div>
    )
}
