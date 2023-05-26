import styles from './Tabela.module.css';

const Table = () => {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.headItem}>IMC</th>
                    <th className={styles.headItem}>CLASSIFICAÇÃO</th>
                    <th className={styles.headItem}>OBESIDADE (GRAU)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.bodyItem}>MENOR QUE 18,5</td>
                    <td className={styles.bodyItem}>MAGREZA</td>
                    <td className={styles.bodyItem}>0</td>
                </tr>
                <tr>
                    <td className={styles.bodyItem}>ENTRE 18,5 E 24,9</td>
                    <td className={styles.bodyItem}>NORMAL</td>
                    <td className={styles.bodyItem}>0</td>
                </tr>
                <tr>
                    <td className={styles.bodyItem}>ENTRE 25,0 E 29,9</td>
                    <td className={styles.bodyItem}>SOBREPESO</td>
                    <td className={styles.bodyItem}>I</td>
                </tr>
                <tr>
                    <td className={styles.bodyItem}>ENTRE 30,0 E 39,9</td>
                    <td className={styles.bodyItem}>OBESIDADE</td>
                    <td className={styles.bodyItem}>II</td>
                </tr>
                <tr>
                    <td className={styles.bodyItem}>MAIOR QUE 40,0</td>
                    <td className={styles.bodyItem}>OBESIDADE GRAVE</td>
                    <td className={styles.bodyItem}>III</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;