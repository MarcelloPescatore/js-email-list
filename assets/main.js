// console.log('test');

// Descrizione
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)

// Set up
// selezion la parte da popolare in html
const listEl = document.querySelector('.list-group')


// Elaboration

// array di promesse email
const emailPromises = [];
for (let i = 0; i < 10; i++) {
    // itero la chiamata all'endponit di boolean per 10 volte e la pusho nell'array
    emailPromises.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));

}

// uso promise.all per attendere che tutte le chiamate siano inserite
Promise.all(emailPromises).then((responses) => {
    // inserisco gli elementi dell'array email in pagina 
    responses.forEach(response => {
        // accedo all'email nella risposta
        const mail = response.data.response
        // aggiungo il template licteral all'html selezionato
        listEl.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                <span>${mail}</span>
                <div>
                    <i class="fa-solid fa-inbox pe-2"></i>   
                    <i class="fa-solid fa-pen pe-2"></i>
                    <i class="fa-solid fa-check pe-2"></i>
                    <i class="fa-solid fa-xmark "></i>
                </div>
            </li>
        `
    })
})

