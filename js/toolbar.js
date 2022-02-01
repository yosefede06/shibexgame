class Toolbar {
    constructor(gctx) {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/configuracion.png'
        this.width = 1600
        this.height = 462
        this.buttons = []
        this.gctx = gctx
        this.layer = undefined
        this.marcoInstance = new Image()
        this.marcoInstance.src = "./images/vector.png"
        //create all buttons

        this.ranking_btn = new Button(540, -120, 896 * 0.37, 403 * 0.46, this.gctx, './images/little2/ranking-button.png', undefined, ranking_btn_handler)
        this.full_screen_btn = new Button(340, 30, 150, 80, this.gctx, './images/little4/fullscreen-button.png', undefined, full_screen_handler)
        this.update_btn = new Button(340, -20, 150, 80, this.gctx, './images/little4/update.png', undefined, update_btn_handler)
        this.login_btn = new Button(1055, -50, 250, 104, this.gctx, './images/little4/connect.png', undefined, login)
        this.login_empty_btn = new Button(1055, -50, 250, 104, this.gctx, './images/login_empty_1.png', undefined, undefined)
        this.play_btn = new Button(290, 480, this.width / 2 - 200, this.height / 2, this.gctx, './images/play-new.png', undefined, demo_btn_handler)

        //push it into the list

        this.buttons.push(this.ranking_btn)
        this.buttons.push(this.full_screen_btn)
        this.buttons.push(this.update_btn)
        this.buttons.push(this.login_btn)
        this.buttons.push(this.play_btn)
    }

    async draw() {
        // Mobile positioning
        if (screen.width <= 600) {
            this.gctx.ctx.drawImage(this.update_btn.imageInstance, 290, -50)
            this.gctx.ctx.drawImage(this.full_screen_btn.imageInstance, 290, -10)
            this.gctx.ctx.drawImage(this.play_btn.imageInstance, screen.width / 6.5 - 50, 370, this.width / 2 - 100, this.height / 2)
            this.gctx.ctx.drawImage(this.ranking_btn.imageInstance, 410, -120, 896 * 0.7, 403 * 0.7)
        }
        // Desktop positioning
        else {
            this.gctx.ctx.drawImage(this.update_btn.imageInstance, 290, -50)
            this.gctx.ctx.drawImage(this.full_screen_btn.imageInstance, 290, -10)
            this.gctx.ctx.drawImage(this.play_btn.imageInstance, 275, 480, 720, this.height / 2)
            this.gctx.ctx.drawImage(this.ranking_btn.imageInstance, 410, -120, 896 * 0.7, 403 * 0.7)
        }
        this.gctx.ctx.drawImage(this.marcoInstance, 0, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 330, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 630, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 930, 100, this.width / 3 - 220, this.height / 1.5)
        if (!Game.user) {
            this.gctx.ctx.drawImage(this.login_btn.imageInstance, 1015, -50, 299 - 50, 134 + 20)
        }
        else {
            this.gctx.ctx.drawImage(this.login_empty_btn.imageInstance, 1015, -50, 299 - 50, 134 + 20)
            const address = await Game.user.get("ethAddress")
            this.truncate = address.substring(0, 5) + "..." + address.substring(38, 42)
            console.log(this.truncate)
            this.gctx.ctx.font = 'italic bold 27px arial,serif';
            this.gctx.ctx.fillStyle = "rgb(255,255,255)";
            this.gctx.ctx.strokeStyle = this.gctx.ctx.fillStyle;
            this.gctx.ctx.fillText(this.truncate, 1055, 50)
            this.gctx.ctx.strokeText(this.truncate, 305, 0)
        }
    }

}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
}

Toolbar.prototype.onclick = function (mousex, mousey) {
    this.buttons.forEach(elem => {
        if (elem.onclick(mousex, mousey)) {
            elem.fn()
        }

    })
}



//
// Toolbar.prototype.onmouseover = function (mousex, mousey){
//     if(this.help_btn.onclick(mousex, mousey))
//     {
//         this.help_btn.fn()
//         return true
//     }
//     else
//     {
//         return false
//     }
//
// }

Toolbar.prototype.onmouseover = function (mousex, mousey) {
    document.getElementById('my-canvas').style.cursor = "default";
    this.buttons.forEach(elem => {
        if (elem.onclick(mousex, mousey)) {
            document.getElementById('my-canvas').style.cursor = "url(https://res.cloudinary.com/shibex/image/upload/c_scale,h_35,w_72/v1643420239/rocketFire_k5vhwq.png), auto"
        }
    })
    this.gctx.buttons_play.forEach(elem => {
        if (elem.onclick(mousex, mousey)) {
            document.getElementById('my-canvas').style.cursor = "url(https://res.cloudinary.com/shibex/image/upload/c_scale,h_35,w_72/v1643420239/rocketFire_k5vhwq.png), auto"
        }
    })

    if (this.play_btn.onclick(mousex, mousey)) {
        // this.gctx.ctx.strokeStyle = "#0c5073"
        // this.gctx.ctx.stroke(this.demo)
        return true
    }
    else {
        // this.gctx.ctx.strokeStyle = "#000000"
        // this.gctx.ctx.stroke(this.demo)
        return false

    }


}

