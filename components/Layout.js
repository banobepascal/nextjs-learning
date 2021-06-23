import React from 'react';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}
