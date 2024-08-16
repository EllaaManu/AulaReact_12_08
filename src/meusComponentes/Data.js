import { Component } from "react";


export default class Data extends Component {

    // props = aquio que o app.js tem dentro da tag do html ali
    constructor(props) {

        super(); // executa do cosntrutor do pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString();
    }

    //fase de montagem 
    componentDidMount(){
        console.log("COmponeete muuntado");
    }

    componentDidUpdate() {
        console.log("COmponeete atumliado");

    }

    //sobreeescrtre do metodo
    render(){
        return (
            // se nao exibe props exibe hehehehehehe
            <h1> {this.props.texto || "hehehehehe"} {this.dataAtual}</h1>
        )
    }

}