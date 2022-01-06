class Toolbar {
    constructor(gctx) {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/toolbar.png'
        this.width = 1600
        this.height = 462
        this.buttons = []
        this.gctx = gctx

        //create all buttons
        this.full_screen_btn = new Button(470, 30, 35, 35, undefined, undefined, full_screen_handler)
        this.update_btn = new Button(550, 30, 35, 35, undefined, undefined, update_btn_handler)
        this.login_btn = new Button(600, 30, 35,35, undefined, undefined, login)
        this.rules_btn = new Button(680, 30, 35,35, undefined, undefined, rules_btn_handler)

        //push it into the list
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
