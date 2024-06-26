import styles from './index.module.css'

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}
