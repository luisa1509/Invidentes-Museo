let contador = setInterval(contadorHilo, 1000);

let drawHilo = setInterval(draw, 17)
let cont = 3;
let sostenido = false;
let incremento = 0;
let gameOver;

var body = document.querySelector(".body")

var circulo = document.querySelector(".feedback")

function preload() {
    gameOver=loadSound("./../../data/audios/Bienvenido.mp3")
}

function setup() {
    createCanvas(0,0)
    
}




body.addEventListener("click",gameOver);

//let recordatorio = setInterval(function () {
  //  gameOver.play();
    
//},10000)

let bienvenido = setInterval(function () {
    document.location.href = "./bin/views/'login'-page2.html";
    
},10000)



body.addEventListener("pointerdown", mousePresionado)
body.addEventListener("pointerup", mouseSuelto)



function mousePresionado() {
    sostenido = true;


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
       // document.location.href = "./bin/views/'recived'-page2.html";

    }

    console.log(sostenido + ", " + cont)
}

function draw() {
    if (sostenido) {
        //incremento += window.innerWidth/120;
        //circulo.style.width = incremento + "px";
        //circulo.style.height = incremento + "px";
    }
}

localStorage.getItem("nombre",valorinput+" ");



