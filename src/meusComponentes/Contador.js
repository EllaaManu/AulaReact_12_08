import { Component } from "react";


export default class Contador extends Component {


// passo (2) => métodos (incrementar & decrementar)
// e tambem, um componente precisa de um construtor que recebe o comportamento "ser igual ao pai"

constructor(props) {
    super();
    // se tivesse mai sum atributo em que seu valor sera alterado, teria uma virgula e ent um atributo : e o que ele recebe
    this.state = { valor: 0
     };
    

}
incrementar () {
    // alertar react que foi alterado
    let valorAtual = this.state.valor;
    let valorNovo = valorAtual+1;
    this.setState({
        valor : valorNovo
    });
    
}

decrementar () {
    let valorAtual = this.state.valor;
    let valorNovo = valorAtual-1;
    this.setState({
        valor : valorNovo
    });
}


// comeca por aqui (1) => aparencia
// só pode retonrar um elemento
    render() {
        return (
            // nenhuma div pode ficar vazia
            <div > 
                <div className="visor">
                    <h1> {this.state.valor} </h1>
                </div>

                <div className="botoes">
                 {/* NO CLICK AS PRIMEIRAS CHAVES SAO P INDICAR JAVA SCRIPT E PRECISA DESA FUNC ANONIMA PRA ELA RECONHECER COMO METODO DA CLASSE */}
                <button onClick={()=> {this.incrementar()}}> + </button>
                <button onClick={()=> {this.decrementar()}}> - </button>
                </div>
            </div>
        );
    }
// dps do render olhar app pra exibir
}