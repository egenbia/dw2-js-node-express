//Obejtos literais possuem atributos e métodos
//literal = quer dizer que ainda não deriva de uma classe
//js é dinamicamente tipado, muda d acordo com a variável

const pessoa = {};
document.write(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};
//exibindo propriedades do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é ${carro.cor}</p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`${carro.frear()}`);

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};
document.write(
  `<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$ ${produto.preco}! ${produto.descricao}</p>`
);

//array de objetos (lista de produtos)
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento.",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente.",
  },
];

//exibindo o Array de objetos com forEach
listaProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br> 
        `);
});
