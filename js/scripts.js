/* 

Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente
potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo
due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

// // calcButton.addEventListener('eventochevogliointercettare', funzione che mi gestirà l'evento);

// Seleziono i due input
const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');

const priceForm = document.querySelector('form');

priceForm.addEventListener('submit', function (eventoIntercettato) {
    eventoIntercettato.preventDefault();

    console.log('eventoIntercettato', eventoIntercettato, typeof eventoIntercettato);

    console.log('kmInput.value', kmInput.value, typeof kmInput.value);
    console.log('ageInput.value', ageInput.value, typeof ageInput.value);

    if (kmInput.value != '' && ageInput.value != '') {
        const costPerKm = 0.21;
        const basePrice = kmInput.value * costPerKm;
        console.log('Prezzo base biglietto:', basePrice);
        
        let finalPrice = basePrice;
        
        if (ageInput.value < 18) {
            console.log('Applico lo sconto del 20%');
        
            finalPrice = basePrice * 0.8;
            console.log('Prezzo scontato del 20%:', finalPrice);
        }
        else if (ageInput.value > 65) {
            console.log('Applico lo sconto del 40%');
        
            finalPrice = basePrice * 0.6;
            console.log('Prezzo scontato del 40%:', finalPrice);
        }
        
        console.log('Prezzo finale:', finalPrice.toFixed(2));

        document.getElementById('price-result').innerHTML = '€ ' + finalPrice.toFixed(2);
    }
    else {
        alert('Dati non validi');
    }
});











/* 

    ALTERNATIVA

*/

// Seleziono il bottone per poterci aggiungere il listener sul click
// const calcButton = document.getElementById('calc-button');

// // Aggiungo il listener del click sul bottone
// calcButton.addEventListener('click', function(evento) {
//     console.log('evento', evento, typeof evento);

//     /* 
    
//         TUTTO QUELLO CHE METTO QUA DENTRO VERRA' ESEGUITO SOLO ED
//         ESCLUSIVAMENTE QUANDO L'UTENTE CLICCHERA' SUL BOTTONE
//         (TUTTE LE VOLTE)
    
//     */

//     console.log('kmInput.value', kmInput.value, typeof kmInput.value);
//     console.log('ageInput.value', ageInput.value, typeof ageInput.value);

//     const costPerKm = 0.21;
//     const basePrice = kmInput.value * costPerKm;
//     console.log('Prezzo base biglietto:', basePrice);
    
//     let finalPrice = basePrice;
    
//     if (ageInput.value < 18) {
//         console.log('Applico lo sconto del 20%');
    
//         finalPrice = basePrice * 0.8;
//         console.log('Prezzo scontato del 20%:', finalPrice);
//     }
//     else if (ageInput.value > 65) {
//         console.log('Applico lo sconto del 40%');
    
//         finalPrice = basePrice * 0.6;
//         console.log('Prezzo scontato del 40%:', finalPrice);
//     }
    
//     console.log('Prezzo finale:', finalPrice.toFixed(2));
// });