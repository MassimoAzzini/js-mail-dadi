let mailRegistrate = [];

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
    mailRegistrate.push(email);

    console.log(email + ' nuova');
  }else{
    console.log('mail gia esistente')
  }

});