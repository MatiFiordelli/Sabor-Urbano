import { useEffect } from 'react'
import styles from './index.module.css'
import { useHeaderStore } from '@/stores'

export default function NavList() {
    const headerHeight = useHeaderStore((state)=>state.headerHeight)
    const isActiveHamburgerButton = useHeaderStore((state) => state.isActiveHamburgerButton)
    const setIsActiveHamburgerButton = useHeaderStore((state)=> state.SetIsActiveHamburgerButton)

    useEffect(()=>{
        window.onscroll = (e) => {
            window.scrollTo(0,0)
        }
    },[])

    return (
        <section 
            className={styles['nav-list-container']}
        >
            <nav 
                className={styles['nav-list']}
                style={{ top: `${headerHeight}px` }}
            >
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </section>
    )
}
