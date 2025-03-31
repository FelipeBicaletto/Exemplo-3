//DECLARAÇÕES E VARIAVEIS

var nome = "FIAP";
console.log(nome)

let idade = 19;
console.log(idade)

const sobrenome = "Fiapinho";
console.log(sobrenome)

//DECLARANDO UMA VARIAVEL INDEFINIDA    
let nome1;
console.log(nome1)

//DECLARANDO UMA VARIAVEL NULA
let nome2 = null;
console.log(nome2)

//TIPOS DE VARIAVEIS
let exemplo1 = 10;
console.log(typeof exemplo1)

let exemplo2 = "Tecnologia";
console.log(typeof exemplo2)

let exemplo3 = true;
console.log(typeof exemplo3)

let exemplo4 = {};
console.log(typeof exemplo4)

let exemplo5 = [];
console.log(typeof exemplo5)

//CONVERSÕES
let numFloat = 123.456;
console.log(parseInt(numFloat))

let numString = "123.456";
console.log(parseFloat(numString))

//METODOS

//length = verifica o tamanho da string
let frase = "O mundo da tecnologia";
console.log(frase.length)

//indexOf = retorna um trecho do texto
let texto = "A programação indomável e sustentável";
console.log(texto.indexOf("ão"))

//slice = retorna um trecho do texto com inicio e final 
let info = "Processamento de ponta";
console.log(info.slice(2,6))