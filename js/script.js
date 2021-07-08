/* RIEPILOGO logica esercizio:

1 - Chiedere all'utente:
    - nome e cognome (stringa)
    - numero dei chilometri da percorrere (numero)
    - fascia d'età del passeggero (tendina - opzioni obbligatorie)

2 - Utilizzare il dato "fascia d'età" per:
    - calcolare prezzo del biglietto standard (0.21 *n km)
    - calcolare prezzo del biglietto minorenne (-20%)
    - calcolare prezzo del biglietto over65 (-40%)

3 - Stampare dettagli biglietto DOPO evento click:
    -nome passeggero
    -tipo di offerta
    -n carrozza (random 1-12)
    -codice treno (n arbitrario fisso)
    -prezzo finale (2 decimali) 

Bonus:
- nascondere la sezione del biglietto se non è ancora stato generato il biglietto stesso
- aggiungere una funzione che ci permetta di resettare i campi del form ai valori originali

*/

// ----------------------------------------------------

// 1 - Chiedere i dati all'utente > form fatto su HTML 

// VAR PER UTILIZZARE DATI DAL FORM:

var userName = document.getElementById("name");
var kmsDistance = document.getElementById("kms");
var userAge = document.getElementById("age");

// VAR PER LA STAMPA:

var nameDisplay = document.getElementById("nameDisplay");
var offerDisplay = document.getElementById("offerDisplay");
var carDisplay = document.getElementById("carDisplay");
var priceDisplay = document.getElementById("priceDisplay");

// PER N CARROZZA, NON MI SERVONO DATI. DEVO RANDOMIZZARE

var carNumber = Math.floor(Math.random() * 12) + 1;


// 2 - Il calcolo del prezzo del biglietto deve essere effettuato al click. Perciò, step 2-3 li accorpo:

document.getElementById("btn-generate").addEventListener("click", function () {

    // leggo i dati del form
    var nameValue = userName.value;
    var kmsValue = kmsDistance.value;
    var ageValue = userAge.value;

    // creo var per il prezzo base e per quello scontato
    var price = kmsValue * 0.21;
    var discount;

    // creo var per stampare tipo di tariffa
    var typeRate = "Tariffa ordinaria"

    // check
    // console.log(nameValue);
    // console.log(kmsValue);
    // console.log(ageValue);
    // console.log(price);

    // calcolo della tariffa biglietto

    if (ageValue === "young") {
        discount = (price * 20) / 100;
        price -= discount;
        typeRate = "Tariffa Minorenni";

        //check: 
        // console.log(discount);
        // console.log(price);
        // console.log(typeRate);

    } else if (ageValue === "old") {
        discount = (price * 40) / 100;
        price -= discount;
        typeRate = "Tariffa Over 65";

        //check:
        // console.log(discount);
        // console.log(price);
        // console.log(typeRate);
    }


    // Price deve essere arrotondato

    price = "€" + price.toFixed(2);


    //STAMPO

    nameDisplay.innerText = nameValue;
    offerDisplay.innerText = typeRate;
    carDisplay.innerText = carNumber;
    priceDisplay.innerText = price;

}

);
