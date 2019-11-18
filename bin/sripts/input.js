class Input {
    focus= new Boolean(false);
    
     
     constructor(posX, posY, focus, text){
         this.focus= focus;
         this.text= text;
         this.posX= posX;
         this.posY=posY;
  
        
     }
  
     input(){
       this.focus=false;
       this.text="";
       
     }
  
     paint(){
         if(focus==false){
             stroke(255,0,0);
         }else{
             stroke(0);
         }
  
         fill(255);
         rect(this.posX, this.posY,300,60);
         
         fill(0);
         textSize(20);
         text(this.text, this.posX+10,this.posY+20);
     }
  
     getPosX(){
         return this.posX;
     }
  
     setPosX(posX) {
     this.posX = posX;
     }
  
     getPosY(){
         return this.posY;
     }
  
     setPosY(posY) {
     this.posY = posY;
     }
  
     isFocus() {
     return this.focus;
     }
  
     setFocus(focus) {
     this.focus = focus;
   }
  
   getText() {
     return this.text;
   }
  
   setText(text) {
     this.text = text;
   }
  
  
  }