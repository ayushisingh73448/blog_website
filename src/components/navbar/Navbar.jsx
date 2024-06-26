import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" width={24} height={24} alt='' />
                <Image src="/instagram.png" width={24} height={24} alt='' />
                <Image src="/youtube.png" width={24} height={24} alt='' />
            </div>
            <div className={styles.logo}>BlogSite.</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href='/' className={styles.link}>
                    HomePage
                </Link>
                <Link href='/' className={styles.link}>
                    Contact
                </Link>
                <Link href='/' className={styles.link}>
                    About
                </Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar