import styles from './layout.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useDarkMode from "../hooks/useDarkMode.js";

export default function Layout({ children, home }) {
    const [colorTheme, setTheme] = useDarkMode();
    const toggleTheme = (theme) => {
        setTheme(theme);
    }

    return (
        <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
            <div className={`${styles.container} ${styles.flex}`}>
                <h2 style={{marginRight: 'auto'}}>Where in the World?</h2>
                <div className={styles.flex} style={{alignSelf: 'center', textDecoration: 'none'}}>
                    <a className={styles.flex} style={{alignSelf: 'center', textDecoration: 'none'}} onClick={() => toggleTheme(colorTheme === 'dark' ? 'light' : 'dark')}>
                        {
                            colorTheme === 'light'
                            ?
                            <svg  x="0px" y="0px" viewBox="0 0 30 30" width="30" height="30" style={{enableBackground: '0 0 30 30', marginRight: '10px'}}>
                            <path d="M16.3,29.8c4.6,0,8.8-2.1,11.5-5.5c1.6-2-0.1-5-2.7-4.5c-4.8,0.9-9.2-2.7-9.2-7.6c0-2.8,1.5-5.4,3.9-6.7 c2.2-1.3,1.7-4.7-0.9-5.2c-0.9-0.2-1.8-0.2-2.7-0.2C8.1,0.2,1.5,6.8,1.5,15C1.5,23.2,8.1,29.8,16.3,29.8z M16.3,2.9 c0.8,0,1.5,0.1,2.2,0.2c-3.2,1.8-5.3,5.2-5.3,9.1c0,6.6,6,11.5,12.5,10.3c-2.2,2.7-5.6,4.5-9.4,4.5C9.7,27.1,4.3,21.7,4.3,15 S9.7,2.9,16.3,2.9z"/>
                            </svg>
                            :
                            <svg  x="0px" y="0px" viewBox="0 0 30 30" width="30" height="30" style={{enableBbackground: '0 0 30 30',  marginRight: '10px'}}>
                            <path d="M16.5,29.5c4.5,0,8.5-2,11.2-5.4c0.4-0.5,0-1.2-0.7-1.1c-7,1.3-13.5-4-13.5-11.1c0-4.1,2.2-7.8,5.7-9.9 c0.5-0.3,0.4-1.1-0.2-1.3c-0.9-0.2-1.8-0.2-2.6-0.2C8.6,0.5,2.1,7,2.1,15C2.1,23,8.5,29.5,16.5,29.5z"/>
                            </svg>
                        }
                        Dark Mode
                    </a>
                </div>
            </div>

            {/* {home ? (
                <div className={styles.container}>
                    <h1> HOME Page </h1>
                </div>
                ) : (
                <div className={styles.container}>
                    <h1> Other pages </h1>
                </div>
            )} */}
        </header>
        <main className={styles.container}>{children}</main>
        </div>
    )
}
