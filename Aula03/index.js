import Usuario from "../Aula03/Usuario.js";

let pessoa01 = new Usuario("Rodrigo", 22, "masculino", "(84)4002-8922", "cremedegalinha@email.com", "123.321.213.13", "123456", "654321", "Rua de um lugar legal")

console.log(pessoa01.getNome)

pessoa01.setNome("Vini")

console.log(pessoa01.getNome)

console.log(pessoa01.getCpf)

pessoa01.setCpf("321.321.321.12")

console.log(pessoa01.getCpf)