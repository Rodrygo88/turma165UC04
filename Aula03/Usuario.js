export default class Usuario {
    constructor(nome, idade, genero, telefone, email, cpf, cep, rg, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.cep = cep;
        this.rg = rg;
        this.endereco = endereco;
    }

    mostrarDados() {
        return `Nome: ${this.nome}
        Idade: ${this.idade} anos
        Genero: ${this.genero}
        Telefone: ${this.telefone}
        Email: ${this.email}
        CPF: ${this.cpf}
        CEP: ${this.cep}
        RG: ${this.rg}
        Endereço: ${this.endereco}`
    }
}