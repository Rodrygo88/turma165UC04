import promptSync from "prompt-sync";

const prompt = promptSync();

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));

console.log(`A soma é ${num1+num2}`);
