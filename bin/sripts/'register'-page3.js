let contador = setInterval(contadorHilo, 1000)
let drawHilo = setInterval(draw, 17)
let cont = 3;
let sostenido = false;
let incremento = 0;
let gameOver;
let pantalla;



var body = document.querySelector(".body")

var circulo = document.querySelector(".feedback")

var nombre = document.querySelector(".nombre")

var apellido = document.querySelector(".apellido")

var button = document.querySelector(".button")


function preload() {
    gameOver=loadSound("./../../data/audios/gameOver.mp3")
}





//let recordatorio = setInterval(function () {
 //   gameOver.play();
//},10000)

body.addEventListener("pointerdown", mousePresionado)
body.addEventListener("pointerup", mouseSuelto)


button.addEventListener("click",function(){

    let valorinput = nombre.value;
    //let valorinput2 = apellido.value;
    
localStorage.setItem("nombre",valorinput+" ");
//localStorage.setItem("nombre",valorinput2+" ");
document.location.href = "./../../index.html";

})


function mousePresionado() {
    sostenido = true;

 //gameOver.stop();
}

function mouseSuelto() {
    //sostenido = false;
    //cont = 3;
    //incremento = 0
    //circulo.style.width = "0px";
    //circulo.style.height = "0px";
}

function contadorHilo() {
    if (sostenido) {
        cont -= 1;
    }

    if (cont == 0) {
        //document.location.href = "./bin/views/'login'-page1.html";

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


//firebase//
btnTestRegistro.addEventListener("click", function () {

    let nombre = nombreTexto.value;
    let apellido = apellidoTexto.value;
console.log(firebase);
    writeData(nombre,apellido);
});

function writeData(userName,userSurname){

    firebase.database().ref('users/' + userName).set({
    nombre : userName,
    apellido : userSurname,
    }).push();

}
localStorage.getItem("nombre",valorinput+" ");

