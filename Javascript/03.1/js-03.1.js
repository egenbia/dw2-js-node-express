//CLASSES NO JAVASCRIPT

//criando um classe

//Nomes de classes devem iniciar com a primeira letra maiúscula
class Carro {
  //para criar ATRIBUTOS da Classe deve-se utilizar o método "constructor"
  constructor(marca, modelo, ano) {
    //this representa a instância (objeto) o avlor que for enviado a classe será atribuido a instância
    //ATRIBUTOS
    this.marca = marca; //marca é um parâmetro do método constructor
    this.modelo = modelo;
    this.ano = ano;
  }
  //MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

//criando instâncias (objetos) derivadas da classe Carro
//objeto - Carro poular
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
  `<p>
      O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${
    carroPopular.ano
  }. Quando buzina faz ${carroPopular.buzinar()}
  </p>`
);

//Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;
document.write(
  `<p>
    O carro ${carroEsportivo.marca} modelo ${
    carroEsportivo.modelo
  } é do ano de ${
    carroEsportivo.ano
  }. Quando buzina faz ${carroEsportivo.buzinar()}
</p>`
);

//Adcionar um novo atributo 
carroEsportivo.corNeon = "Azul"

//Adcionar um novo método
carroEsportivo.turbo = () => {
    return "Vruuuuum! O carro está acerelando muito!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)