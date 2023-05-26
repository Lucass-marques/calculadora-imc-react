import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>CALCULADORA DE IMC</h1>
            <p className={styles.headerText}>
                Digite seu peso e sua altura que o app irá calcular seu IMC!
            </p>
        </header>
    )
}

export default Header;