var nome = window.prompt (`qual seu nome ?`)
//var n1 = window.prompt(`digite um numero`)
//var n2 = window.prompt (`digite outro numero`)
//var s= n1+n2
//var s =window.alert(`A soma dos números é `+ s)
document.write(`Ola ${nome}. Seu nome tem ${nome.length} letras <br>`)
document.write(`Seu nome maisculo é ${nome.toUpperCase()} <br>`)
document.write(`Seu nome minusculo é ${nome.toLowerCase()} <br>`)
function somar(){
   var num1 = document.getElementById(`n1`).value;
   var num2 = document.getElementById(`n2`).value;
   var resultado = document.getElementById(`res`);
   num1 =  Number(num1);
   num2 =  Number(num2);
   resul = num1+num2
   resultado.innerHTML = (`O reultado da soma entre ${num1} + ${num2} é : ${resul}`)
}