"use client"
import { PropsComponentLayout } from "@/types";
import Header from "./Header";
import Footer from "./Footer";
import styles from './index.module.css'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ComponentLayout({children}: PropsComponentLayout ) {
    const [isHover, setIsHover] = useState(false)

    return (
        <motion.div 
            className={styles.componentLayout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, type: "spring" }}
        >
            <Header />
            {children}
            <Link 
                href="https://wa.me/543492331704" 
                title="Hacé tu pedido por Whatsapp" 
                className={styles.haceTuPedido}
                target="_blank"
            >
                <span 
                    className={styles.haceTuPedidoText}
                    style={{ opacity: isHover ? '1' : '0' }}
                >
                    Hace tu pedido!
                </span>
				<motion.div
                    initial={{ top: '-100vh', position:'relative' }}
                    transition={{ duration: 1.2, type: "spring" }}
                    animate={{ top: 0 }}
                >
                    <Image
                        src="/svg/socialMedia/whatsapp.svg"
                        alt="Whatsapp"
                        width={50}
                        height={50}
                        className={styles.haceTuPedidoImg}
                        onMouseOver={()=>setIsHover(true)}
                        onMouseOut={()=>setIsHover(false)}
                    />
                </motion.div>
			</Link>
            <Footer />
        </motion.div>
    )
}
