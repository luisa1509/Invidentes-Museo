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
  
   ScreenLogin.paint();
}

//inputs

class ScreenLogin{

    constructor(inputArraylist){
        this.inputArraylist= inputArraylist;
        this.inputArraylist=[];
       
        this.inputArraylist = [];
        
        let incrementPosY=0;
        for(let i=0; i<2; i++) {
            this.inputArraylist[i] = new Input(258,785+incrementPosY,false,"");
            incrementPosY+=90;
        }
        
       
    
    }
    
    
    paint() {
        for(let i=0; i<this.inputArraylist.length;i++) {
            this.inputArraylist[i].paint();
            //console.log("pintar");
        }
    }
    
    focusInputs(mouseX, mouseY) {
        for(let i=0; i<this.inputArraylist.length;i++){
            if(mouseX>=this.inputArraylist[i].getPosX() && mouseX<= this.inputArraylist[i].getPosX() +200
                    && mouseY>this.inputArraylist[i].getPosY() && mouseY<= this.inputArraylist[i].getPosY()+30) {
                this.inputArraylist[i].setFocus(true);
            }else {
    
               this.inputArraylist[i].setFocus(false);
            }	
            }
        }
    
    writeTextInput(key) {
        
    
            if(this.inputArraylist[0].isFocus() && this.inputArraylist[0].getText().length<15) {
                this.inputArraylist[0].setText(this.inputArraylist[0].getText()+ key);
                }
    
            if(this.inputArraylist[1].isFocus() && this.inputArraylist[1].getText().length<15) {
                    this.inputArraylist[1].setText(this.inputArraylist[1].getText()+ key);
                    }
                
            }
            
            
           
        
        
    eraseTextImput() { 
        console.log(this)
        for(let i=0;i< this.inputArraylist.length;i++) {
            if(this.inputArraylist[i].isFocus() && this.inputArraylist[i].getText().length-1>=0) {
                let indice= this.inputArraylist[i].getText().length-1;
                this.inputArraylist[i].setText(this.inputArraylist[i].getText().substring(0,indice));
                }
            }
            
        }
        
}


