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
        this.update_btn = new Button( 340, -20, 150, 80, this.gctx, './images/little4/update.png', undefined, update_btn_handler)
        this.login_btn = new Button(1055, -50,  250, 104, this.gctx, './images/little4/connect.png', undefined, login)
        this.play_btn = new Button( 290, 480, this.width/2 - 200, this.height/2, this.gctx, '/images/play-new.png', undefined, demo_btn_handler)

        //push it into the list

        this.buttons.push(this.ranking_btn)
        this.buttons.push(this.full_screen_btn)
        this.buttons.push(this.update_btn)
        this.buttons.push(this.login_btn)
        this.buttons.push(this.play_btn)
    }
    draw()
    {
        // this.ctx.drawImage(this.toolbar.imageInstance, 0, 120, this.toolbar.width, this.toolbar.height, 300, 0, this.toolbar.width/2, this.toolbar.height/2)
        // this.gctx.ctx.drawImage(this.ranking_btn.imageInstance, 0, 90, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.ranking_btn.imageInstance, 410, -120, 896 * 0.7, 403 * 0.7)
        // this.gctx.ctx.drawImage(this.iotex_btn.imageInstance, 0, 90, this.width, this.height, 400, 0, this.width/2, this.height/2)
        // this.gctx.ctx.drawImage(this.full_screen_btn.imageInstance, 0, 90, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.full_screen_btn.imageInstance, 290, -10)
        this.gctx.ctx.drawImage(this.update_btn.imageInstance, 290, -50)
        // this.gctx.ctx.drawImage(this.login_btn.imageInstance, 30, 90, this.width, this.height, 1070, -25, this.width/6, this.height/3)\
        this.gctx.ctx.drawImage(this.login_btn.imageInstance, 1015, -50,  299 - 50, 134 + 20)
        // this.gctx.ctx.drawImage(this.rules_btn.imageInstance, 30, 90, this.width, this.height, 400, 0, this.width/2, this.height/2)
        // this.gctx.ctx.drawImage(this.help_btn.imageInstance, 330, 90, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.play_btn.imageInstance, 290, 480, this.width/2 - 100, this.height/2)
        this.gctx.ctx.drawImage(this.marcoInstance, 0, 100, this.width/3 - 220, this.height/1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 330, 100, this.width/3 - 220, this.height/1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 630, 100, this.width/3 - 220, this.height/1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 930, 100, this.width/3 - 220, this.height/1.5)

        // this.draw_play()
        this.draw_layer()


    }
    draw_layer(){
        // this.layer = this.gctx.ctx.roundRect(360, 35, 550, 70, 20) //or .fill()
        // // this.layer.fillStyle =  "rgba(239,232,232,0.36)"
        // this.layer.fillStyle = "rgba(175,238,253,0.32)"
        // // "rgba(239,232,232,0.36)"
        // // "rgba(45,43,63,0.33)"
        // this.layer.fill();
        // this.layer.ellipse(600,50, 300, 50, Math.PI * 1, 0, Math.PI * 2);
        // this.layer.closePath()
        // this.gctx.ctx.fillStyle = "rgba(255,0,0,0.57)"
        // this.gctx.ctx.fill(this.layer)
    }

    // draw_play(){
    //     this.demo = this.gctx.ctx.roundRect(80,20,140,60, 20) //or .fill()
    //     this.demo.fillStyle =  "rgba(45,43,63,0.98)"
    //     this.gctx.ctx.lineWidth = 2
    //     this.gctx.ctx.strokeStyle = "#410404"
    //     this.demo.fill();
    //     this.demo.stroke();
    //     // this.demo = new Path2D()
    //     // this.gctx.ctx.fillStyle = "rgba(255,255,255,0.21)"
    //     // this.demo.ellipse(140,45, 70, 35, Math.PI * 1, 0, Math.PI * 2);
    //     // this.gctx.ctx.fill(this.demo);
    //     this.gctx.ctx.font = 'italic bold 40px arial,serif'
    //     this.gctx.ctx.fillStyle = "rgba(50,49,56,0.98)"
    //     this.gctx.ctx.fillText("PLAY", 90,60)
    //
    //     // this.gctx.ctx.stroke()
    //     // this.gctx.ctx.stroke(this.demo)
    // }


}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y,   x+w, y+h, r);
    this.arcTo(x+w, y+h, x,   y+h, r);
    this.arcTo(x,   y+h, x,   y,   r);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
}

Toolbar.prototype.onclick = function(mousex, mousey){
    this.buttons.forEach(elem => {
        if (elem.onclick(mousex, mousey)){
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

Toolbar.prototype.onmouseover = function (mousex, mousey){
    document.getElementById('my-canvas').style.cursor = "default";
    this.buttons.forEach(elem => {
        if (elem.onclick(mousex, mousey)) {
            document.getElementById('my-canvas').style.cursor ="url(https://res.cloudinary.com/shibex/image/upload/c_scale,h_35,w_72/v1643420239/rocketFire_k5vhwq.png), auto"
        }
    })
    this.gctx.buttons_play.forEach(elem => {
        if (elem.onclick(mousex, mousey)) {
            document.getElementById('my-canvas').style.cursor ="url(https://res.cloudinary.com/shibex/image/upload/c_scale,h_35,w_72/v1643420239/rocketFire_k5vhwq.png), auto"
        }
    })

    if(this.play_btn.onclick(mousex, mousey))
    {
        // this.gctx.ctx.strokeStyle = "#0c5073"
        // this.gctx.ctx.stroke(this.demo)
        return true
    }
    else
    {
        // this.gctx.ctx.strokeStyle = "#000000"
        // this.gctx.ctx.stroke(this.demo)
        return false

    }


}

