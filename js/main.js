function circulo(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("circulo");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'CIRCULO';
}

function rectangulo(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("rectangulo");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'RECTANGULO';
}

function moveRight(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("right");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'MOVE RIGTH';
}

function degradado(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("degradado");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'DEGRADADO';
}

function gif(){
    let figura=document.getElementById("figura");;
    figura.classList.toggle("gif")

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'GIF';
}

function luna(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("luna");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'LUNA';
}

function estrella(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("estrella");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'ESTRELLA';
}

function triangulo(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("triangulo")

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'TRIANGULO';
}

function moveTop(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("movetop");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'MOVE TOP';
}

function moveButtom(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("movebuttom");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'MOVE BUTTOM';
}

function moveLeft(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("moveleft");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'MOVE LEFT';
}

function moveDiagonal(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("movediagonal");

    let titlle = document.getElementById("title-figura");
    titlle.innerHTML = 'MOVE DIAGONAL';
}

function panelLateral(){
    let panel=document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}

function panelSuperior(){
    let panel=document.getElementById("panel-superior");
    panel.classList.toggle("active");
}

function cambiarFondo() {
    var seccionPrincipal = document.querySelector('section');
    // seccionPrincipal.style.background = "url(img/bg-secundario.jpg)";
    seccionPrincipal.classList.toggle("active");
}

function cambiarbgColor(){
    let colorbg= prompt('INGRESE UN COLOR');
    let bgcambio= document.querySelector('section');

    bgcambio.style.background= colorbg;

    
}


