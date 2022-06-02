export class NegociacaoController {
  private _inputData;
  private _inputQuantidade;
  private _inputValor;

  constructor() {
    this._inputData = document.getElementById('data');
    this._inputQuantidade = document.getElementById('quantidade');
    this._inputValor = document.getElementById('valor');
  }

  adiciona() {
    console.log(this._inputData);
    console.log(this._inputQuantidade);
    console.log(this._inputValor);
  }
}