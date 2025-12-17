class Aluno {
    constructor(nome, dataNascimento, matricula) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.matricula = matricula;
        
    }
    mostrarIdade() {
        console.log(2025 -  this.dataNascimento);

    }
}

class Professor {
    constructor(nome, dataNascimento, matricula, disciplina) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.matricula = matricula;
        this.disciplina = disciplina;
    }
}


let aluno1 = new Aluno("Rodrigo", 2003, "123abc")

let professor1 = new Professor("Joel", 1997, "abc123", "JavaScript")

console.log(professor1);

aluno1.mostrarIdade();
