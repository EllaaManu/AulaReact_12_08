import { Component } from "react";


export default class Data extends Component {

    // props = aquio que o app.js tem dentro da tag do html ali
    constructor(props) {

        super(); // executa do cosntrutor do pai
        this.props = props;
        // data é um estado do componente
        this.state = {
            dataAtual : new Date().toLocaleString()
        };
    }

    //fase de montagem 
    componentDidMount(){
        console.log("COmponeete muuntado");
        // m é possivel att o componente de forma direta
        // this.setState =
        this.setState({
            dataAtual: new Date().toLocaleString()
        })
    }

    componentDidUpdate() {
        console.log("COmponeete atumliado");
        setTimeout(()=> {
            this.setState({
                dataAtual: new Date().toLocaleString()
            });
        }, 1000);

    }

    //sobreeescrtre do metodo
    render(){
        return (
            
            <h1> {this.props.texto || "hehehehehe"} {this.state.dataAtual}</h1>
        )
    }

}