/*

Il programma dovrà mostrare un form da compilare con cui chiedere
all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà
calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina
(formattato con massimo due decimali, per indicare centesimi sul prezzo).

/*
1- 
2-
3- 

*/
console.log("JS OK")

const inputName = document.getElementById("name");
const inputNumber = document.getElementById("km");
const buttonGen = document.getElementById("btn-genera");
const buttonAnn = document.getElementById("btn-annulla");
const age = document.getElementById("age");
const totalPrice = inputNumber.value * 0.21;




buttonGen.addEventListener('click', function () {

    console.log("mi hai cliccato!");
    console.log(inputName.value);
    console.log(inputNumber.value);
    console.log(age.value);
    console.log(totalPrice);

});




