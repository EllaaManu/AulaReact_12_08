import { Component } from "react";


export default class Data extends Component {

    // props = aquio que o app.js tem dentro da tag do html ali
    constructor(props) {

        super(); // executa do cosntrutor do pai
        this.props = props;
        this.state = {
            dataAtual: new Date().toLocaleString()
        };
    }

    pegaData(timezone){
        const dataAtual = new Date();
        let timeZoneFromDB = PaymentResponse(timezone);
        let difTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let ml = parseInt(dataAtual.getTime() + (difTempo * 60 * 1000));
        const dataNova = new Date(ml);
        return dataNova;
    }

    //fase de montagem 
    componentDidMount(){
        this.setState({
            dataAtual : new Date().toLocaleString()
        });
    }

    componentDidUpdate() {
        console.log("COmponeete atumliado");
        setTimeout(() => {
            this.setState({
                dataAtual : new Date().toLocaleString()
            });
        }, 1000);

    }

    //sobreeescrtre do metodo
    render(){
        return (
            // se nao exibe props exibe hehehehehehe
            <h1> {this.props.texto || "hehehehehe"} {this.dataAtual}</h1>
        )
    }

}