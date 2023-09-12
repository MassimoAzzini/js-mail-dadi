// ESERCIZIO MAIL

let mailRegistrate = ['massimo@yahoo.it'];
let messaggioMail;
const outputMail = document.getElementById('output-messaggio-mail');

const btnMail = document.getElementById('bottone-mail');

btnMail.addEventListener('click', function(){
  const email = document.getElementById('input-mail').value;

  let mailEsistente = false;

  for(let i = 0; i < mailRegistrate.length; i++){

    if(email === mailRegistrate[i]){

      mailEsistente = true;

    }
  }

  if(!mailEsistente){

    messaggioMail = 'Mi dispiace ma non è autorizzato ad utilizzare i nostri servizi'
    outputMail.style.color = 'red';

  }else{

    messaggioMail = 'E-mail verificata, è autorizzato ad utilizzare i nostri servizi'
    outputMail.style.color = 'green';

  }
  console.log(messaggioMail);
  outputMail.innerHTML = messaggioMail;
});

// fine ESERCIZIO MAIL

// ESERCIZIO DADI

const btnDadi = document.getElementById('bottone-dadi');
const outputDadi = document.getElementById('output-messaggio-dadi');

let messaggioDadi;


btnDadi.addEventListener('click', function(){

  const numeroUtente = Math.ceil(Math.random() * 6);
  const numeroComputer = Math.ceil(Math.random() * 6);
  
  if(numeroUtente == numeroComputer){
  
    messaggioDadi = `Hai fatto ${numeroUtente}, il Computer ha fatto ${numeroComputer}: Avete ottenuto lo stesso numero`;
  
  }else if(numeroUtente > numeroComputer){
  
    messaggioDadi = `Hai fatto ${numeroUtente}, il Computer ha fatto ${numeroComputer}: Complimenti, HAI VINTO!`;
  
  }else{
  
    messaggioDadi = `Hai fatto ${numeroUtente}, il Computer ha fatto ${numeroComputer}: Mi dispiace, HAI PERSO!`;
  
  }

  console.log(messaggioDadi);
  outputDadi.innerHTML = messaggioDadi;

});


// fine ESERCIZIO DADI


