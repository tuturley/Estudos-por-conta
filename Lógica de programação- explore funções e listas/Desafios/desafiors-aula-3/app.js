
// 1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function IMC(altura, peso){
    return peso / (altura*altura)
}
console.log (IMC(1.75, 75));
// 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);
console.log(factorialize(5));

// 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversão(dolar){
    reais = dolar*4.80
    return reais
}
console.log(`ficou ${conversão(5)} reais`);

// 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function perimetroArea(Altura, Largura){
    let área = Altura * Largura
    let perimetro = 2*(Altura + Largura)
    let mensagem = (`a área ficou ${área} e o perimetro ficou ${perimetro}`)
    return mensagem
}
console.log(perimetroArea(5, 4))

// 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroCircular(raio){
    let pi = 3.14
    área = pi* (raio*raio)
    perimetro = 2 * pi * raio
    mensagem = (`a área ficou ${área}, e o perimetro do circulo ficou ${perimetro}`);
    return mensagem
}
console.log(areaPerimetroCircular(3))

// 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
}
}
console.log(mostrarTabuada(2))
