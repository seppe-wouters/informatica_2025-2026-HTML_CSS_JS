// Declareren variabelen
const btnPrompt = document.getElementById('btnInvoer');
const divResult = document.getElementById('tekst');

// De functie toonPrompt wordt gebruikt in de HTML
function tonen() {
    const postcode = prompt('Vul uw postcode in', 'uw postcode');
    const tekst = 'De postcode die u invoerde was: ' + postcode;

    // We plaatsen de tekst in divResult
    divResult.innerHTML = tekst;
}

// Event listener voor button toonPrompt
btnPrompt.addEventListener("click", tonen);

