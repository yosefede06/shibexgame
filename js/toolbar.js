class Toolbar {
    constructor(gctx) {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/configuracion.png'
        this.width = 1600
        this.height = 462
        this.buttons = []
        this.gctx = gctx
        this.demo = undefined

        //create all buttons

        this.ranking_btn = new Button(430, 35, 40, 40, this.gctx, './images/rank_btn.png', undefined, ranking_btn_handler)
        this.iotex_btn = new Button(500, 35, 40, 40, this.gctx, './images/iotex_btn.png', undefined, iotex_btn_handler)
        this.full_screen_btn = new Button(560, 35, 40, 40, this.gctx, './images/full_screen_btn.png', undefined, full_screen_handler)
        this.update_btn = new Button(630, 35, 40, 40, this.gctx, './images/update_btn.png', undefined, update_btn_handler)
        this.login_btn = new Button(700, 35, 40,40, this.gctx, './images/login_btn.png', undefined, login)
        this.rules_btn = new Button(770, 35, 40,40, this.gctx, './images/rules_btn.png', undefined, rules_btn_handler)
        this.help_btn = new Button(840, 35, 40,40, this.gctx, './images/help_btn.png', undefined, help_btn_handler)
        this.demo_btn = new Button(80,20,140,60, this.gctx, undefined, undefined, demo_btn_handler)

        //push it into the list

        this.buttons.push(this.ranking_btn)
        this.buttons.push(this.iotex_btn)
        this.buttons.push(this.full_screen_btn)
        this.buttons.push(this.update_btn)
        this.buttons.push(this.login_btn)
        this.buttons.push(this.rules_btn)
        this.buttons.push(this.help_btn)
        this.buttons.push(this.demo_btn)
    }
    draw()
    {
        // this.ctx.drawImage(this.toolbar.imageInstance, 0, 120, this.toolbar.width, this.toolbar.height, 300, 0, this.toolbar.width/2, this.toolbar.height/2)
        this.gctx.ctx.drawImage(this.ranking_btn.imageInstance, 0, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.iotex_btn.imageInstance, 0, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.full_screen_btn.imageInstance, 0, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.update_btn.imageInstance, 30, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.login_btn.imageInstance, 30, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.rules_btn.imageInstance, 30, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.gctx.ctx.drawImage(this.help_btn.imageInstance, 330, 120, this.width, this.height, 400, 0, this.width/2, this.height/2)
        this.demo = new Path2D()
        // this.demo.rect(80,20,140,60)
        // this.demo.closePath()
        // this.gctx.ctx.fillStyle = "rgba(255,255,255,0.21)"
        // this.gctx.ctx.fill(this.demo)
        this.gctx.ctx.fillStyle = "rgba(255,255,255,0.21)"
        // this.gctx.ctx.beginPath();
        this.demo.ellipse(140,45, 70, 35, Math.PI * 1, 0, Math.PI * 2);
        this.gctx.ctx.fill(this.demo);
        this.gctx.ctx.font = 'italic bold 40px arial,serif'
        this.gctx.ctx.fillStyle = "rgba(225,10,10,0.5)"
        this.gctx.ctx.fillText("PLAY", 90,60)
        this.gctx.ctx.lineWidth = 2
        this.gctx.ctx.strokeStyle = "#000000"
        this.gctx.ctx.stroke()
        this.gctx.ctx.stroke(this.demo)

    }
}

Toolbar.prototype.onclick = function(mousex, mousey){
    this.buttons.forEach(elem => {
        if (elem.onclick(mousex, mousey)){
            elem.fn()
        }

    })
}




Toolbar.prototype.onmouseover = function (mousex, mousey){
    if(this.help_btn.onclick(mousex, mousey))
    {
        this.help_btn.fn()
        return true
    }
    else
    {
        return false
    }

}

Toolbar.prototype.onmouseover = function (mousex, mousey){
    if(this.demo_btn.onclick(mousex, mousey))
    {
        this.gctx.ctx.strokeStyle = "#0c5073"
        this.gctx.ctx.stroke(this.demo)
        return true
    }
    else
    {
        this.gctx.ctx.strokeStyle = "#000000"
        this.gctx.ctx.stroke(this.demo)
        return false

    }

}

