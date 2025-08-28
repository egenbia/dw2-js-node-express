//MÉTODOS DE MANIPULAÇÃO DE VETORES
let vetor = ['Laranja', 'Maçã', 'Banana'];
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);
 
vetor[3] = 'Morango';
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`);
 
//PUSH - Insere um novo elemento no FINAL do vetor
vetor.push('Abacaxi');
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`);
 
vetor[0] = 'Pera';
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`);
 
//UNSHIFT - Insere um novo elemento no INÍCIO do vetor
vetor.unshift('Laranja');
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`);
 
//LENGTH - Retorna o número de elementos do vetor
let num = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso vetor agora é o: ${num}</p>`);
document.write(`<p>O número de elementos do vetor é: ${num.length}</p>`);
 
//SORT - Ordena o vetor
document.write(`<p>O primeito elemento do vetor é: ${num[0]}</p>`);
 
let numOrdenados = num.sort();
document.write(`<p>O vetor ordenado é: ${numOrdenados}</p>`);
 
document.write(`<p>A lista de frutas ordenadas é: ${vetor.sort()}</p>`);
 
//Ordenando um vetor númerico em ordem crescente
document.write(`<p>${num.sort((a, b) => a - b)}</p>`);
 
//Ordenando um vetor númerico em ordem decrescente
document.write(`<p>${num.sort((a, b) => b - a)}</p>`);