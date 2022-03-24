                // let escopo local
                // var escopo global (não se usa mais)

// 1.    Faça um programa que peça uma nota, entre zero e dez. 
// Mostre uma mensagem caso o valor seja inválido e continue 
// pedindo até que o usuário informe um valor válido.

// let nota = parseFloat(prompt("Digite uma nota"));            

// if (nota >= 0 && nota <= 10) {
//     console.log(nota);
// } else {
//     console.log("Nota inválida");
// } 

// while(true) {     //sempre mostrar na tela
// let nota = parseFloat(prompt("Digite uma nota"));            

// if (nota >= 0 && nota <= 10) {
//     console.log(nota);
// } else {
//     console.log("Nota inválida");
// } 
// }

// while(true) {     //sempre mostrar na tela
//     let nota = parseFloat(prompt("Digite uma nota"));            
    
//     if (nota >= 0 && nota <= 10) {
//         alert("Sua nota é: " + nota);
//         break;
//     } else {
//         alert("Nota inválida");
//     } 
// }

// let terminaLoop = true
// while(terminaLoop) {     //sempre mostrar na tela
//     let nota = prompt("Digite uma nota");            
    
//     if (nota >= 0 && nota <= 10) {
//         alert("Sua nota é: " + nota);
//         terminaLoop = false;
//     } else {
//         alert("Nota inválida");
//     } 
// }

// for (var i = 0 ; i <= 10; i++) {    //loop básico de contagem
//     console.log(i)
// }

// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
// let login = prompt('Digite seu login: ');
// let senha = prompt('Digite sua senha: ');
// if( login === senha) {
//     alert("inválido")
// }else{
//     alert('Acesso permitido')
// }
// console.log(login);
// console.log(senha);

// Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
// for(let i= 0; i < 20; i++){
//     j = i;
//     console.log(i, j)
// }

// Faça um programa que leia 5 números e informe o maior número.

// let maior = 0;
// for(let i = 0; i<= 5; i++){

//     let input = parseInt(prompt("Digite um valor"));

//     // só pega o maior número
//     if (i === 0) {
//         maior = input;
//     }
//     // pega o maior valor digitado pelo usuario
//     if (input > maior){
//         maior = input;
//     }
// }
// alert(maior)

// Dado um número n, para cada número entre 0 e 100, imprime um valor por linha da seguinte maneira:

// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.
    
// for (let i = 1; i <= 100; i++){

//     if (i % 5 === 0 && i % 3 == 0){
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }

//listas
// let nomes = [];
// nomes[0] = "Victor"
// nomes[1] = "Thiago"
// nomes[2] = "Cecilia"
// nomes.push("Thiago")
// nomes.push("Victor")
// nomes.push("Cecilia")

// let nomes = [];
// for (let i = 0; i < 5; i++){
//     let nomes = prompt("Digite um nome")
//     nomes.push(nomes);
// }
// console.log(nomes)

// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
// let lista = [1,2,3,4,5,6,7,8,9,10]

// for(i = lista.length-1; i >= 0; i--){
//     console.log("Numero: "+ lista[i]);
// }
