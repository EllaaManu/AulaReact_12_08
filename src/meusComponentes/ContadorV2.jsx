import { useState } from "react";


export default function Contador(props) {
    // funcao nao tem construtor, definir
    //                                  __ VALOR INICIAL DO ESTADO
    //                                 | 
    //                                \/
    const [valor, setValor] = useState(0); // hook useState => deixa manipular um estado em especial.


    function incrementar() {

        setValor(valor+1);
    }

    function decrementar() {

        setValor(valor-1);
    }

    // metodo render = retorno da func
    return (
        <div >
            <div className="visor">
                <h1> 0 </h1>
            </div>

            <div className="botoes">
                <button onClick={()=>{incrementar();}}> + </button>
                <button onClick={()=>{decrementar();}} > - </button>
            </div>
        </div>
    );
}