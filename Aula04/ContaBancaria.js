export default class ContaBancaria {
    #titular;
    #saldo;
    #numero;
    #agencia;

    constructor(agencia, numeroConta, titular, saldoInicial) {
        this.#agencia = agencia;
        this.#numero = numeroConta;
        this.#titular = titular;
        this.#saldo = saldoInicial;
        Object.freeze(this);
    }

    //-------------------------------------

    get getAgencia() {
        return this.#agencia
    }

    setAgencia(agencia) {
        this.#agencia = agencia;
    }

    //-------------------------------------

    get getNumero() {
        return this.#numero
    }

    setNumero(numero) {
        this.#numero = numero;
    }

    //-------------------------------------

    get getTitular() {
        return this.#titular
    }

    setNumero(titular) {
        this.#titular = titular;
    }

    //-------------------------------------

    get getSaldo() {
        return this.#saldo
    }

    setNumero(saldo) {
        this.#saldo = saldo;
    }

    //-------------------------------------

    sacar(valor) {
        valor > 0 && valor <= this.#saldo ? this.#saldo -= valor : console.log("Saque invalido!");
    }

    depositar(valor) {
        valor > 0 ? this.#saldo += valor : console.log("Deposito invalido!");
    }

    //------------------------------------- 

}