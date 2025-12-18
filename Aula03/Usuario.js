export default class Usuario {
    #nome;
    #idade;
    #genero;
    #telefone;
    #email;
    #cpf;
    #cep;
    #rg;
    #endereco;

    constructor(nome, idade, genero, telefone, email, cpf, cep, rg, endereco) {
        this.#nome = nome;
        this.#idade = idade;
        this.#genero = genero;
        this.#telefone = telefone;
        this.#email = email;
        this.#cpf = cpf;
        this.#cep = cep;
        this.#rg = rg;
        this.#endereco = endereco;

        Object.freeze(this);
    }

    get getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    get getIdade() {
        return this.#idade;
    }

    setIdade(idade) {
        this.#idade = idade;
    }

    get getGenero() {
        return this.#genero;
    }

    setGenero(genero) {
        this.#genero = genero;
    }

    get getTelefone() {
        return this.#telefone;
    }

    setTelefone(telefone) {
        this.#telefone = telefone;
    }

    get getEmail() {
        return this.#email;
    }

    setEmail(email) {
        this.#email = email;
    }

    get getCpf() {
        return this.#cpf;
    }

    setCpf(cpf) {
        this.#cpf = cpf;
    }

    get getCep() {
        return this.#cep;
    }

    setCep(cep) {
        this.#cep = cep;
    }

    get getRg() {
        return this.#rg;
    }

    setRg(rg) {
        this.#rg = rg;
    }

    get getEndereco() {
        return this.#endereco;
    }

    setEndereco(endereco) {
        this.#endereco = endereco;
    }

    mostrarDados() {
        return `Nome: ${this.#nome}
        Idade: ${this.#idade} anos
        Genero: ${this.#genero}
        Telefone: ${this.#telefone}
        Email: ${this.#email}
        CPF: ${this.#cpf}
        CEP: ${this.#cep}
        RG: ${this.#rg}
        Endereço: ${this.#endereco}`
    }
}
