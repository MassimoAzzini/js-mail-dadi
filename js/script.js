// ESERCIZIO MAIL

let mailRegistrate = ['massimo@yahoo.it'];
let messaggio
const output = document.getElementById('output-messaggio')

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
    messaggio = 'Mi dispiace ma non è autorizzato ad utilizzare i nostri servizi'
    output.style.color = 'red';
  }else{
    messaggio = 'E-mail verificata, è autorizzato ad utilizzare i nostri servizi'
    output.style.color = 'green';

  }
  console.log(messaggio)
  output.innerHTML = messaggio
});

// fine ESERCIZIO MAIL

// ESERCIZIO DADI









// fine ESERCIZIO DADI


