let contador = setInterval(contadorHilo, 1000)
let drawHilo = setInterval(draw, 17)
let cont = 3;
let sostenido = false;
let incremento = 0;
let gameOver;
let pantalla;
let Input=new input(p,100,100);


var body = document.querySelector(".body")

var circulo = document.querySelector(".feedback")

function preload() {
    gameOver=loadSound("./../../data/audios/gameOver.mp3")
}

function setup(){
    input=new input();
}

 



let recordatorio = setInterval(function () {
    gameOver.play();
},10000)

body.addEventListener("pointerdown", mousePresionado)
body.addEventListener("pointerup", mouseSuelto)



function mousePresionado() {
    sostenido = true;

 gameOver.stop();
}

function mouseSuelto() {
    sostenido = false;
    cont = 3;
    incremento = 0
    circulo.style.width = "0px";
    circulo.style.height = "0px";
}

function contadorHilo() {
    if (sostenido) {
        cont -= 1;
    }

    if (cont == 0) {
        document.location.href = "./../../bin/views/'recived'-page2.html";

    }

    console.log(sostenido + ", " + cont)
}

function draw() {
    if (sostenido) {
        incremento += window.innerWidth/120;
        circulo.style.width = incremento + "px";
        circulo.style.height = incremento + "px";
    }
    //pantalla.paint;
    //arrayInputs[i].paint();
  
   input.pintar();
}

//inputs

function LoginScreen(p) {
    this.app = p;
    this.arrayInputs = [];
    this.cambioY = 0;

    for (let i = 0; i < arrayInputs.length; i++) {

        arrayInputs[i] = new Input(p, 200, 250 + cambioY);
        cambioY += 50;
    }

}

function pintar() {
    for (let i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].paint();
    }

}

function focusInputs(mouseX, mouseY) {
    for (let i = 0; i < arrayInputs.length; i++) {
        if (mouseX >= arrayInputs[i].getPosX() && mouseX <= arrayInputs[i].getPosX() + 200
            && mouseY >= arrayInputs[i].getPosY() && mouseY <= arrayInputs[i].getPosY() + 30) {
            arrayInputs[i].setFocus(true);
        } else {
            arrayInputs[i].setFocus(false);
        }
    }
}

function writeTextInput(key) {
    for (let i = 0; i < arrayInputs.length; i++) {
        if (arrayInputs[i].isFocus() && arrayInputs[i].getText().length() < 15 && app.keyCode != app.ENTER) {
            arrayInputs[i].setText(arrayInputs[i].getText() + key);
        }
    }

}

function eraseTextInput() {
    for (let i = 0; i < arrayInputs.length; i++) {
        if (arrayInputs[i].getText().length() - 1 >= 0) {
            this.indice = arrayInputs[i].getText().length() - 1;
            arrayInputs[i].setText(arrayInputs[i].getText().substring(0, indice));
        }
    }
}



