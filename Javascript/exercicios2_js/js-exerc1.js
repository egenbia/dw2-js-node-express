// 1. Crie um array de objetos chamado listaClientes que contenha pelo menos três objetos. Cada
// objeto deve representar um cliente com as seguintes propriedades: nome (string), endereco
// (string) e cpf (number).
const listaClientes = [
  {
    nome: "Beatriz",
    endereco: "R. Vereador Antônio de Almeida, n°59",
    cpf: 58609878950,
  },
  {
    nome: "Gabriela",
    endereco: "R. Francisco Chaves, n°78",
    cpf: 78392378450,
  },
  {
    nome: "Igor",
    endereco: "R. José Manoel Link, n°69",
    cpf: 34256787250,
  },
];

// 2. Utilize um loop forEach para percorrer o listaClientes e exibir no navegador, para cada cliente,
// as informações no formato: Nome: [Nome do Cliente] Endereço: [Endereço do Cliente] e CPF:
// [CPF do Cliente]. Utilize document.write e <br> para quebrar as linhas.
listaClientes.forEach((cliente) => {
  document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        Cpf: ${cliente.cpf}<br><br>
        `);
});

// 3. Adicione um novo cliente ao FINAL do listaClientes. Exiba o array de objetos atualizado no
// navegador.
document.write("<h3>Adicionando um novo cliente ao final da lista</h3>");
listaClientes.push({
  nome: "Giovana",
  endereco: "Avenida Brasil, n°14",
  cpf: 34587652150,
});

listaClientes.forEach((cliente) => {
  document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        Cpf: ${cliente.cpf}<br><br>
        `);
});

// 4. Adicione um novo cliente ao INÍCIO do listaClientes. Exiba o array de objetos atualizado no
// navegador.
document.write("<h3>Adicionando um novo cliente ao início da lista</h3>");
listaClientes.unshift({
  nome: "Leticia",
  endereco: "Avenida Paulista, n°115",
  cpf: 34587652150,
});

listaClientes.forEach((cliente) => {
  document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        Cpf: ${cliente.cpf}<br><br>
        `);
});

// 3. Classes: Fábrica de Heróis
// Crie uma classe em JavaScript chamada Heroi, que represente um herói genérico. Essa classe deve
// conter os seguintes atributos:
// - nome
// - vida
// - velocidade
// - forca

document.write("<h3>Classes: Fábrica de Heróis</h3>");
class heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  //   - Além disso, implemente os seguintes métodos na classe Heroi:
  // - correr(): Exibe uma mensagem informando que o herói está correndo.
  // - andar(): Exibe uma mensagem informando que o herói está andando.
  // - atacar(): Exibe uma mensagem informando que o herói está atacando.
  // - defender(): Exibe uma mensagem informando que o herói está se defendendo.
  // Use o “return” para retornar as mensages.

  correr() {
    return "O herói está correndo!";
  }
  andar() {
    return "O herói está andando!";
  }
  atacar() {
    return "O herói está atacando!";
  }
  defender() {
    return "O herói está defendendo!";
  }
}


// Após criar a classe Heroi, instancie três objetos baseados nela, representando os heróis. Atribua
// valores para os atributos que foram definidos na classe para cada herói, inserindo também os
// atributos e métodos adicionais

//HOMEM ARANHA
const homemAranha = new heroi(
  "Homem-Aranha",
  "responsável, jovem, heróico, ágil, inteligente",
  "200km/h",
  "70%"
);
document.write(`O ${homemAranha.nome} que é ${homemAranha.vida}, tem ${homemAranha.velocidade} de velocidade e ${homemAranha.forca} de força. ${homemAranha.andar()} <br>`);


homemAranha.teia = "0";
homemAranha.sentidoAranha = () => {
  return "detectou perigo!!";
};
document.write(`Recebe ${homemAranha.teia} de teia e não pode soltar teia. O ${homemAranha.nome} ${homemAranha.sentidoAranha()}`);

//SUPERMAN
const Superman = new heroi(
  "Superman",
  "alienígena, poderoso, justo, altruísta, corajoso",
  "500km/h",
  "100%"
);

Superman.podeVoar = "1";
Superman.visaoCalor = () => {
  return "está usando sua visão de calor!!";
};
document.write(`<p>O ${Superman.nome} que é ${Superman.vida}, tem ${Superman.velocidade} de velocidade e ${Superman.forca} de força. ${Superman.atacar()} <br>
Recebe ${Superman.podeVoar} e pode voar. O ${Superman.nome} ${Superman.visaoCalor()}`);

//BATMAN
const Batman = new heroi(
  "Batman",
  "sombrio, estratégico, vingativo, disciplinado, determinado",
  "70km/h",
  "65%"
);

Batman.esconder = "0";
Batman.investigar = () => {
  return "está investigando um crime!!";
};
document.write(`<p>O ${Batman.nome} que é ${Batman.vida}, tem ${Batman.velocidade} de velocidade e ${Batman.forca} de força. ${Batman.defender()} <br>
Recebe ${Batman.esconder} e não pode se esconder. O ${Batman.nome} ${Batman.investigar()}`);


