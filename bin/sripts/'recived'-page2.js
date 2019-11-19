//let contador = setInterval(contadorHilo, 1000)
let drawHilo = setInterval(draw, 17)
let cont = 3;
let sostenido = false;
let incremento = 0;
let gameOver;
let activar = false;


var body = document.querySelector(".body")

var circulo = document.querySelector(".feedback")

var boton = document.querySelector(".play")

function preload() {
    gameOver = loadSound("./../../data/audios/gameOver.mp3")
}









body.addEventListener("pointerdown", mousePresionado)
body.addEventListener("pointerup", mouseSuelto)
body.addEventListener("click", pausa)
body.addEventListener("click", seguir)


function pausa() {
    activar=!activar;

   
    if (activar == false) {
        boton.src = "../../data/img/pausa.png";
        gameOver.pause();

    }
    if (activar == true) {
        boton.src = "../../data/img/reproducir.png";
        gameOver.play();

    }
}

function seguir() {

    
}

function mousePresionado() {
    sostenido = true;

    gameOver.stop();
}

function mouseSuelto() {
    sostenido = false;
    cont = 3;
//    incremento = 0
//    circulo.style.width = "0px";
//    circulo.style.height = "0px";
}

function contadorHilo() {
    if (sostenido) {
        cont -= 1;
    }

    if (cont == 0) {
        //document.location.href = "./'register'-page3.html";

    }

    console.log(sostenido + ", " + cont)
}

function draw() {
    if (sostenido) {
        //incremento += window.innerWidth / 120;
        //circulo.style.width = incremento + "px";
        //circulo.style.height = incremento + "px";
    }
}