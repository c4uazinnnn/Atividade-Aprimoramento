const prompt = require("prompt-sync")({ sigint: true });

// Classe Fila (Queue)
class FilaAtendimento {
  constructor() {
    this.fila = [];
  }

  adicionarAluno(nome) {
    this.fila.push(nome);
    console.log(`${nome} foi adicionado à fila.`);
  }

  atenderAluno() {
    if (this.fila.length === 0) {
      console.log("Fila vazia.");
      return;
    }
    const aluno = this.fila.shift();
    console.log(`${aluno} foi atendido.`);
  }

  proximoAluno() {
    if (this.fila.length === 0) {
      console.log("Fila vazia.");
      return;
    }
    console.log(`Próximo a ser atendido: ${this.fila[0]}`);
  }

  mostrarFila() {
    if (this.fila.length === 0) {
      console.log("Fila vazia.");
      return;
    }
    console.log("Fila atual:", this.fila.join(" -> "));
  }
}

// Classe Pilha (Stack)
class PilhaDocumentos {
  constructor() {
    this.pilha = [];
  }

  adicionarDocumento(doc) {
    this.pilha.push(doc);
    console.log(`Documento "${doc}" adicionado à pilha.`);
  }

  resolverDocumento() {
    if (this.pilha.length === 0) {
      console.log("Nenhum documento para resolver.");
      return;
    }
    const doc = this.pilha.pop();
    console.log(`Documento "${doc}" resolvido.`);
  }

  documentoTopo() {
    if (this.pilha.length === 0) {
      console.log("Pilha vazia.");
      return;
    }
    console.log(`Documento no topo: ${this.pilha[this.pilha.length - 1]}`);
  }

  mostrarPilha() {
    if (this.pilha.length === 0) {
      console.log("Pilha vazia.");
      return;
    }
    console.log("Documentos pendentes:", this.pilha.slice().reverse().join(" -> "));
  }
}

// Instanciando
const fila = new FilaAtendimento();
const pilha = new PilhaDocumentos();

// Menu interativo
let opcao;
do {
  console.log("\n===== MENU =====");
  console.log("1. Adicionar aluno à fila");
  console.log("2. Atender aluno");
  console.log("3. Ver próximo aluno");
  console.log("4. Mostrar fila");
  console.log("5. Adicionar documento urgente");
  console.log("6. Resolver documento");
  console.log("7. Ver documento no topo");
  console.log("8. Mostrar documentos pendentes");
  console.log("9. Sair");
  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      const nome = prompt("Nome do aluno: ");
      fila.adicionarAluno(nome);
      break;
    case "2":
      fila.atenderAluno();
      break;
    case "3":
      fila.proximoAluno();
      break;
    case "4":
      fila.mostrarFila();
      break;
    case "5":
      const doc = prompt("Nome do documento: ");
      pilha.adicionarDocumento(doc);
      break;
    case "6":
      pilha.resolverDocumento();
      break;
    case "7":
      pilha.documentoTopo();
      break;
    case "8":
      pilha.mostrarPilha();
      break;
    case "9":
      console.log("\n📋 Estado final:");
      fila.mostrarFila();
      pilha.mostrarPilha();
      break;
    default:
      console.log("Opção inválida.");
  }
} while (opcao !== "9");
