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
        this.shibexPolygon = "0xe04e81331bdcbfbf2d1342714812d546a55cb6dc";
        this.shibexIotex = "0x838403e073a79719a0927a16642ca7dcdc642bd5"
        this.Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
        this.logo = new Image()
        this.logo.src = "./images/shibex-logo1.png"

        //create all buttons

        this.ranking_btn = new Button(540, -120, 896 * 0.37, 403 * 0.46, this.gctx, './images/little2/ranking-button.png', undefined, ranking_btn_handler)
        this.full_screen_btn = new Button(340, 30, 150, 80, this.gctx, './images/little4/fullscreen-button.png', undefined, full_screen_handler)
        this.update_btn = new Button(340, -20, 150, 80, this.gctx, './images/little4/update.png', undefined, update_btn_handler)
        this.login_btn = new Button(1055, -50, 250, 104, this.gctx, './images/little4/connect.png', undefined, login)
        this.login_empty_btn = new Button(1055, -50, 250, 104, this.gctx, './images/login_empty_1.png', undefined, undefined)
        this.play_btn = new Button(290, 480, this.width / 2 - 200, this.height / 2, this.gctx, './images/play-new.png', undefined, demo_btn_handler)
        this.iotex = new Button(945, 25, 30, 30, this.gctx,"./images/iotex.svg", undefined, add_iotex_chain)
        this.matic = new Button(985, 25, 31, 31, this.gctx, "./images/polygon.svg", undefined, add_polygon_chain)
        //push it into the list

        this.buttons.push(this.ranking_btn)
        this.buttons.push(this.full_screen_btn)
        this.buttons.push(this.update_btn)
        this.buttons.push(this.login_btn)
        this.buttons.push(this.play_btn)
        this.buttons.push(this.iotex)
        this.buttons.push(this.matic)
    }

    async draw() {
        this.gctx.ctx.drawImage(this.ranking_btn.imageInstance, 410, -120, 896 * 0.7, 403 * 0.7)
        this.gctx.ctx.drawImage(this.full_screen_btn.imageInstance, 290, -10)
        this.gctx.ctx.drawImage(this.update_btn.imageInstance, 290, -50)
        this.gctx.ctx.drawImage(this.play_btn.imageInstance, 290, 480, this.width / 2 - 100, this.height / 2)
        this.gctx.ctx.drawImage(this.marcoInstance, 0, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 330, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 630, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.marcoInstance, 930, 100, this.width / 3 - 220, this.height / 1.5)
        this.gctx.ctx.drawImage(this.login_empty_btn.imageInstance, 925, -50, 299 - 50, 134 + 20)
        this.gctx.ctx.drawImage(this.iotex.imageInstance, 945, 25, 30, 30)
        this.gctx.ctx.drawImage(this.matic.imageInstance, 985, 25, 31, 31)
        const check = await check_user()
        console.log(check)
        if (!check) {
            this.gctx.ctx.drawImage(this.login_btn.imageInstance, 1015, -50, 299 - 50, 134 + 20)
        }
        else {
            this.gctx.ctx.drawImage(this.login_empty_btn.imageInstance, 1015, -50, 299 - 50, 134 + 20)
            const address = await Game.user.get("ethAddress")
            this.truncate = address.substring(0, 5) + "..." + address.substring(38, 42)
            console.log(this.truncate)
            this.gctx.ctx.font = 'italic bold 26px arial,serif';
            this.gctx.ctx.fillStyle = "rgb(255,255,255)";
            this.gctx.ctx.strokeStyle = this.gctx.ctx.fillStyle;
            // this.gctx.ctx.fillText(this.truncate, 1030, 50)
            // this.gctx.ctx.strokeText(this.truncate, 305, 0)

            const chain = await ethereum.request({ method: 'eth_chainId' })

            if(chain == "0x89"){
                if(window.web3){
                    this.gctx.ctx.font = 'italic bold 24px arial,serif';
                    const contract = new window.web3.eth.Contract(this.Abi, this.shibexPolygon)
                    let temp = await contract.methods.balanceOf(address).call()
                    const balance = (temp * 10**(-18)).toLocaleString('en-US');
                    this.gctx.ctx.fillText(balance.substring(0, 12), 1050, 50)
                    this.gctx.ctx.drawImage(this.logo, 1200, 25, 31, 31)
                }

            }
            if(chain == "0x1251"){
                if(window.web3){
                    this.gctx.ctx.font = 'italic bold 24px arial,serif';
                    const contract = new window.web3.eth.Contract(this.Abi, this.shibexIotex)
                    let temp = await contract.methods.balanceOf(address).call()
                    const balance = (temp * 10**(-18)).toLocaleString('en-US');
                    this.gctx.ctx.fillText(balance.substring(0, 12), 1050, 50)
                    this.gctx.ctx.drawImage(this.logo, 1200, 25, 31, 31)
                }
            }
        }

        // this.gctx.ctx.drawImage(this.iotex, 970, 20, 20, 20)
        // this.gctx.ctx.drawImage(this.matic, 970, 50, 20, 20)
    }

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

Toolbar.prototype.ontouchstart= function(mousex, mousey){
    this.buttons.forEach(elem => {
        if (elem.ontouchstart(mousex, mousey)){
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

