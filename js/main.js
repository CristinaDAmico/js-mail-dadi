/***************************
           EMAIL
***************************/

// 1-Chiedi all’utente la sua email. 
// 2-Check-Controlla che sia nella lista di chi può accedere.
// 3-Output-Stampa un messaggio appropriato sull’esito del controllo.

/*// mail valide
var accounts = ['pinco@gmail.com', 'pallo@yahoo.it', 'cetriolo@hotmail.it'];
console.log(accounts);

// 1-chiedere all'utente di inserire la mail
var email = prompt('Inserisci la tua email').toLowerCase();
console.log('email: ', email);

//variabile di stato
var emailFound = false;

// 2-check validazione 
for (var i = 0; i < accounts.length; i++) {
    if(accounts[i] === email) {
        emailFound = true;
        break;
    }
}

if(emailFound === true) {
    console.log('Email riconosciuta! Puoi accedere alla piattaforma!');
} else {
    console.log('Errore di autenticazione. Email non riconosciuta!');
}*/




/**************************
       GIOCO DEI DADI
**************************/

// Genera un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//- generazione numero random per il giocatore tra 1 e 6
var giocatore = Math.floor( Math.random() * 6 )  + 1;
console.log('numero giocatore: ', giocatore);

//- generazione numero random per il computer tra 1 e 6
var computer = Math.floor( Math.random() * 6 )  + 1;
console.log('numero computer: ', computer);

// se il punteggio del giocatore > computer
if( giocatore > computer) {
    console.log('Giocatore: Congratulazioni, sei tu il vincitore!');
} else if ( giocatore < computer ) {
    console.log('Giocatore: Mi dispiace, hai perso questa partita!');
}  else {
    console.log('Giocatore: Situazione di parità! Si rilancia!')
}

//se il punteggio del computer > giocatore
if( computer > giocatore) {
    console.log('Computer: Congratulazioni, sei tu il vincitore!');
} else if ( computer < giocatore ) {
    console.log('Computer: Mi dispiace, hai perso questa partita!');
}  else {
    console.log('Computer: Situazione di parità! Si rilancia!')
}



