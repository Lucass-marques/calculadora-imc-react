import { useEffect, useState } from "react"; //Importação do useEffect e useState.

import styles from './Formulario.module.css';

const Form = (evento) => {  // Criando o formulário e o cálculo do IMC.

    const [peso, setPeso] = useState(0);  //Criando o estado do peso.
    const [altura, setAltura] = useState(0); //Criando o estado da altura.
    const [IMC, setIMC] = useState(0); //Criando o estado do IMC.

    function alteraPeso(evento) {   // Criando a função que vai receber o input PESO do usuário.
        setPeso(evento.target.value);
    }
    
    function alteraAltura(evento) {  // Criando a função que vai receber o input ALTURA do usuário.
        setAltura(evento.target.value);
    }

    useEffect(() => {  // Ajustando os inputs, para que os valores fiquem devidamente corretos.
        console.log(peso)
    }, [peso])

    useEffect(() => {  // Ajustando os inputs, para que os valores fiquem devidamente corretos.
        console.log(altura)
    }, [altura])

    const calculoIMC = (evento) => {  // Prevenindo o reload da página, e fazendo o cálculo do IMC.
        evento.preventDefault();
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setIMC(imcCalculado);
    }

    return (  // Criando o formulário e recebendo os inputs
        <div className={styles.form}>
            <form onSubmit={calculoIMC}> {/*Form apontando para a calculadora do IMC*/}
            <div className={styles.inputs}>
                <input type="number" placeholder="Digite seu peso (em kg)" onChange={alteraPeso} /> {/*Input do peso*/}
                <input type="number" placeholder="Digite sua altura (em cm)" onChange={alteraAltura} /> {/*Input da altura*/}
            </div>

                <button className={styles.button} type="submit">Calcular</button> {/* Criando o botão de calcular */}
            </form>

            <h2 className={styles.formText}>Seu IMC é de: {IMC.toFixed(2)}</h2>  {/* Impressão do resultado na tela */}
        </div>
    )
}

export default Form; // Exportando o formulário