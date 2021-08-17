/** Declaração Variaveis*/

var heightW = 0;
var widthW = 0;

var positionX = 0;
var positionY = 0;

var imgSize = 90;

var lifes = 3;

var time = 20;

var level = window.location.search;
level = level.replace('?', '');

var mosquitoTime = 1500;

if(level === 'easy' ){
    mosquitoTime = 1500;
} 
else if(level === 'normal' ){
    mosquitoTime = 1000;
}
else if(level === 'hard' ){
    mosquitoTime = 750;
}

/** Declaração Funções*/

function windowsVariation(){
    heightW = window.innerHeight;
    widthW = window.innerWidth;
}

windowsVariation();

function newCoordenates(){

    if(document.getElementById('mosquito') != null){
        document.getElementById('mosquito').remove();
        document.getElementById('l' + lifes).src="imagens/coracao_vazio.png";
        lifes--;

        if(lifes == 0){
            window.location.href = 'end_game.html';
        }
    }
    
    positionX = Math.floor(Math.random()*(widthW-imgSize));
    positionY = Math.floor(Math.random()*(heightW-imgSize));

    var mosquito =  document.createElement('img');
    mosquito.src ='imagens/mosca.png';
    mosquito.className = randomSize() + " " +randomSide();
    mosquito.style.left= positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.id= 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }
    
    document.body.appendChild(mosquito);
}

function randomSize(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }

}

function randomSide(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'sideA';
        case 1:
            return 'sideB';
    }

}

var timer = setInterval(function(){
    time-=1;

    if(time < 0){
		clearInterval(timer)
		clearInterval(createMosquito)
        window.location.href = 'victory.html';
    }

    else{
        document.getElementById('timer').innerHTML = time;
    }
    
    

} ,1000)