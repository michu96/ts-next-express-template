import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <nav className={styles.container}>
            <Link href="/">
                <a className={styles.logo}>Example App</a>
            </Link>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={styles.link}>About</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a className={styles.link}>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
