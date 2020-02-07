import React, { Component } from 'react';
import "./Conversor.css"
export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }
    this.converter = this.converter.bind(this);
  }
  converter() {
    let dePara = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${dePara}&compact=y`
    console.log(dePara)
    
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json=>{
        let cotacao=json[dePara].val;
        console.log(cotacao)
        let moedaB_valor=(parseFloat(this.state.moedaA_valor)*cotacao).toFixed(2);
        this.setState({moedaB_valor})
      })
  }

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} p/ {this.props.moedaB}</h2>
        <input type="text" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }}></input>
        <input type="button" value="Converter" onClick={this.converter} />
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
