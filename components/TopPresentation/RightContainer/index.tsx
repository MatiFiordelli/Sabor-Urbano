"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useWillChange } from 'framer-motion'
import Image from 'next/image'
import styles from './index.module.scss'
import { imageVariants } from './imageVariants'

export default function RightContainer() {
    const willChange = useWillChange()
    const { scrollY } = useScroll()
    const burgerPresentationImage = useRef<HTMLDivElement | null>(null);
    const [isScreenLessThan768px, setIsScreenLessThan768px] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsScreenLessThan768px(mediaQuery.matches);

        const handleResize = () => setIsScreenLessThan768px(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleResize);

        if (isScreenLessThan768px) {
            const unsubscribe = scrollY.on('change', (latest) => {
                if (burgerPresentationImage.current && latest < 220) {
                    burgerPresentationImage.current.style.transform = `translateY(${latest}px)`;
                    burgerPresentationImage.current.style.opacity = `${Math.max(0.5, 1 - (latest / 220))}`;
                }
            });

            return () => {
                unsubscribe();
                mediaQuery.removeEventListener('change', handleResize);
            };
        } else {
            return () => mediaQuery.removeEventListener('change', handleResize);
        }
    }, [isScreenLessThan768px, scrollY]);

    return (
        <motion.div 
            style={{willChange}}
            className={styles["top-presentation-right-inner-container"]}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            ref={burgerPresentationImage}
        >
            <Image
                src="/images/flames_burger3.avif"
                alt="burguer presentation"
                width={794}
                height={494}
                className={styles["top-presentation-right-inner-container__image"]}
                priority
            />
        </motion.div>
    )
}
