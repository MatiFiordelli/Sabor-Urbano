"use client"
import { PropsComponentLayout } from "@/types";
import Header from "./Header";
import Footer from "./Footer";
import styles from './index.module.css'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ComponentLayout({children}: PropsComponentLayout ) {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className={styles.componentLayout}>
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
				<Image
					src="/svg/socialMedia/whatsapp.svg"
					alt="Whatsapp"
					width={50}
					height={50}
                    className={styles.haceTuPedidoImg}
                    onMouseOver={()=>setIsHover(true)}
                    onMouseOut={()=>setIsHover(false)}
				/>
			</Link>
            <Footer />
        </div>
    )
}
