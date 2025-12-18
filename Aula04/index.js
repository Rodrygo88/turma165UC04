import PromptSync from "prompt-sync";
import ContaBancaria from "./ContaBancaria.js";

const prompt = PromptSync();

function inicialAplicação() {
    console.clear()

    console.log("-----------");
    console.log("Banco JS");
    console.log("-----------");

    const titular = prompt("Nome do Titular: ");
    const agencia = parseInt(prompt("Agencia: "));
    const numeroConta = parseInt(prompt("Número: "));
    const saldoInicial = parseFloat(prompt("Saldo Inicial: "));

    console.log("-----------");

    const conta = new ContaBancaria(agencia, numeroConta, titular, saldoInicial);

    let opcao;
    let valor = 0;

    do {
        mostrarMenu();
        opcao = parseInt(prompt("Opção: "));
        switch (opcao) {
            case 1:
                console.log(`Saldo atual: ${conta.getSaldo}`)
                break;
            case 2:
                valor = parseFloat(prompt("Valor do deposito: R$"))
                conta.depositar(valor)
                break;
            case 3:
                valor = parseFloat(prompt("Valor do saque: R$"))
                conta.sacar(valor)
                break;
            default:
                console.log("Opção Invalida");

        }


    } while (opcao != 0);
    console.log("Adeus!");

}

function mostrarMenu() {
    console.log("\n Escolha uma opção: ");
    console.log("1 - Ver Saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("0 - Sair");
}

inicialAplicação()