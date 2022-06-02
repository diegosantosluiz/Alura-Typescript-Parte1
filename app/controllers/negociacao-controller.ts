import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
  }

  adiciona() {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this._inputData.value.replace(exp, ','));
    const quantidade = parseInt(this._inputQuantidade.value);
    const value = parseFloat(this._inputValor.value);

    return new Negociacao(date, quantidade, value);
  }
}