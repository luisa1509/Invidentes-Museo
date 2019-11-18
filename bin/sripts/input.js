class Input {
    Input(p, posX, posY) {
        this.focus = false;
        this.text = "";
        this.parent = p;
        this.posX = posX;
        this.posY = posY;
    }
    pintar() {
        if (focus) {
            parent.stroke(255, 0, 0);

        } else {
            parent.stroke(0);
        }
        parent.fill(255);
        parent.rect(posX, posY, 200, 30);

        parent.fill(0);
        parent.textSize(16);
        parent.text(text, posX + 10, posY + 20);
    }
    getPosX() {
        return posX;
    }

    setPosX(posX) {
        this.posX = posX;
    }

    getPosY() {
        return posY;
    }
    setPosY(posY) {
        this.posY = posY;
    }

    getFocus() {
        return focus;
    }

    setFocus(focus) {
        this.focus = focus;
    }

    getText() {
        return text;
    }

    setText(text) {
        this.text = text;
    }

}