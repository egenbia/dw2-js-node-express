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
document.write("<h3>Adicionando um novo cliente ao final da lista</h3>")
listaClientes.push(
  {
    nome: "Giovana",
    endereco: "Avenida Brasil, n°14",
    cpf: 34587652150,
  }
);

listaClientes.forEach((cliente) => {
  document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        Cpf: ${cliente.cpf}<br><br>
        `);
});

// 4. Adicione um novo cliente ao INÍCIO do listaClientes. Exiba o array de objetos atualizado no
// navegador. 
document.write("<h3>Adicionando um novo cliente ao início da lista</h3>")
listaClientes.unshift(
  {
    nome: "Leticia",
    endereco: "Avenida Paulista, n°115",
    cpf: 34587652150,
  }
);

listaClientes.forEach((cliente) => {
  document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        Cpf: ${cliente.cpf}<br><br>
        `);
});