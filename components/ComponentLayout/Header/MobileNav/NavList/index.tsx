'use client'
import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { useHeaderStore } from '@/stores'

export default function NavList() {
    const headerHeight = useHeaderStore((state)=>state.headerHeight)
    const isActiveHamburgerButton = useHeaderStore((state) => state.isActiveHamburgerButton)
    const itemsNav = useHeaderStore((state)=>state.itemsNav)

    const scrollHandler = useRef(() => { window.scrollTo(0,0) })

    useEffect(()=>{
        if(isActiveHamburgerButton){
            document.addEventListener('scroll', scrollHandler.current)
        } else {
            document.removeEventListener('scroll', scrollHandler.current)
        }
    },[isActiveHamburgerButton])

    return (
        <section 
            className={styles['nav-list-container']}
            style={{
                backdropFilter: isActiveHamburgerButton ? 'blur(10px) saturate(50%)' : 'initial', 
            }}
        >
            <nav 
                className={styles['nav-list']}
                style={{ width: isActiveHamburgerButton ? '' : '0' }}
            >
                <ul style={{ top: `${headerHeight}px` }}>
                    {itemsNav.map((e, i) => (
					<li data-text={e} key={i}>
						{e}
					</li>
				))}
                </ul>
            </nav>
        </section>
    )
}
