// //DECLARAÇÕES E VARIAVEIS

// var nome = "FIAP";
// console.log(nome)

// let idade = 19;
// console.log(idade)

// const sobrenome = "Fiapinho";
// console.log(sobrenome)

// //DECLARANDO UMA VARIAVEL INDEFINIDA    
// let nome1;
// console.log(nome1)

// //DECLARANDO UMA VARIAVEL NULA
// let nome2 = null;
// console.log(nome2)

// //TIPOS DE VARIAVEIS
// let exemplo1 = 10;
// console.log(typeof exemplo1)

// let exemplo2 = "Tecnologia";
// console.log(typeof exemplo2)

// let exemplo3 = true;
// console.log(typeof exemplo3)

// let exemplo4 = {};
// console.log(typeof exemplo4)

// let exemplo5 = [];
// console.log(typeof exemplo5)

// //CONVERSÕES
// let numFloat = 123.456;
// console.log(parseInt(numFloat))

// let numString = "123.456";
// console.log(parseFloat(numString))

// //METODOS

// //length = verifica o tamanho da string
// let frase = "O mundo da tecnologia";
// console.log(frase.length)

// //indexOf = retorna um trecho do texto
// let texto = "A programação indomável e sustentável";
// console.log(texto.indexOf("ão"))

// //slice = retorna um trecho do texto com inicio e final 
// let info = "Processamento de ponta";
// console.log(info.slice(2,6))

//OPERADORES ARITIMÉTICOS

// const num1 = 10;
// const num2 = 20;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

//OPERADORES LÓGICOS

// const num3 = 10;
// const num4 = 20;

// console.log(num3 < num4)
// console.log(num3 > num4 && num4 < num3)
// console.log(num3 < num4 || num4 < num3)

// //OPERADORES DE COMPARAÇÃO

// console.log(num3 == num4)
// console.log(num3 === num4)

// ESTRUTURA CONDICIONAL

// if
// let num = 10;
// if(num==10){
//     console.log("é verdadeiro")
// }

// // if / else
// let usuario="teste"
// if(usuario == "teste"){
//     console.log("Usuario Correto")
// }else{
//     console.log("Usuario Errado")
// }

// // if encadeado / alinhado

// let idade = 15
// if(idade <= 15){
//     console.log("Menor de idade")
// }else if(idade > 15 && idade <18){
//     console.log("Não é maior mas pode entrar")
// }else{
//     console.log("Pode entrar é maior")
// }

// // switch
// let time = "Corinthians";
// switch(time){
//     case "Corinthians":
//         console.log("Melhor time")
//         break;
//     case "São Paulo":
//         console.log("Não é o melhor time")
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial")
//         break;
//     default:
//         console.log("Nenhuma das opções")
// }

//ternario
let valor = 100

let resultado = valor == 100? "Certo" : "Errado"
console.log(resultado)

// ternario encadeado

let produto ="notebook"
const desconto =true;
const preço = produto == "notebook" ? desconto ? 100 : 200 : produto === "mouse" ? 30 : 100;

// ESTRUTURA DE REPETIÇÃO

// for

for(let i=0; i<=10; i++){
    console.log("O valor de I é:", i)
}