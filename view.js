
const poke = document.getElementById('poke');

var button = document.querySelector('button');

const resposta = document.getElementById('resposta');
const res = document.querySelector('.res');

var resbutton = document.querySelector('#resposta button');
var img = document.querySelector('img');

button.addEventListener('click', function(){
  
  resposta.style.opacity = '1';
  resposta.style.zIndex = '10';
  resposta.style.top = '80px';
  
  resposta.classList.add('animacao');
  

if(poke.value == 'charizard' || poke.value == 'CHARIZARD'){
  // alert('isso')
  
  
  res.innerHTML = '!!ACERTOU!!';
  
  img.src= 'https://i.gifer.com/3nRA.gif';
  
  setTimeout(function(){ 
    resposta.style.top = '-1180%';
  }, 6000);
  
  
}else{
  
  
  res.innerHTML = '!!ERROU!!';
  
  setTimeout(function(){ 
    resposta.style.top = '-1180%';
  }, 6000);
  
  // alert('errado')
} 
  
  
  setTimeout(function(){ 
    img.src= 'https://i.gifer.com/4hsh.gif';
  }, 8000);
  
});

resbutton.addEventListener('click', function(){
  resposta.classList.remove('animacao');
  resposta.style.opacity = '0';
  resposta.style.zIndex = '0';
  resposta.style.top = '-1080%';
  
  img.src= 'https://i.gifer.com/4hsh.gif';
  
  
}); 


