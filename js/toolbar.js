class Toolbar {
    constructor(gctx) {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/toolbar.png'
        this.width = 1600
        this.height = 462
        this.buttons = []
        this.gctx = gctx

        //create all buttons
        this.ranking_btn = new Button(340, 30, 35, 35, this.gctx, undefined, undefined, ranking_btn_handler)
        this.iotex_btn = new Button(400, 30, 35, 35, this.gctx, undefined, undefined, iotex_btn_handler)
        this.full_screen_btn = new Button(470, 30, 35, 35, this.gctx, undefined, undefined, full_screen_handler)
        this.update_btn = new Button(550, 30, 35, 35, this.gctx, undefined, undefined, update_btn_handler)
        this.login_btn = new Button(600, 30, 35,35, this.gctx, undefined, undefined, login)
        this.rules_btn = new Button(680, 30, 35,35, this.gctx, undefined, undefined, rules_btn_handler)

        //push it into the list
        this.buttons.push(this.ranking_btn)
        this.buttons.push(this.iotex_btn)
        this.buttons.push(this.full_screen_btn)
        this.buttons.push(this.update_btn)
        this.buttons.push(this.login_btn)
        this.buttons.push(this.rules_btn)

    }
}
Toolbar.prototype.onclick = function(mousex, mousey){
    this.buttons.forEach(elem => {
        if (elem.onclick(mousex, mousey)){
            elem.fn()
        }

    })

}
