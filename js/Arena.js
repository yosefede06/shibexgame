class Arena {
    constructor(name, price, price_draw, capacity, button, bgImage, gctx) {
        this.name = name
        this.capacity = capacity
        this.price = price;
        this.price_draw = price_draw
        this.playersIn = undefined
        this.button = button
        this.bgImage = bgImage
        this.gctx = gctx // gamecontext
    }

    async getWinning(){
        var dict = [];
        const Value = Moralis.Object.extend("Winners")
        const query = new Moralis.Query(Value);
        const data = await query.find();
        try{
            for(var i = 0; i < data.length; i++){
                dict.push({
                    key: data.at(i).attributes.address,
                    value: data.at(i).attributes.money
                })
            }
            console.log(dict)
            return dict
        }
        catch (e) {
            console.log("error winners data")
        }
    }

    async amountArena(arena){
        //param string: "Lava", "Ice", "Desert", "Night"
        const Value = Moralis.Object.extend("Number")
        const query = new Moralis.Query(Value);
        const obj = await query.first();
        let result =  await obj.get("amount" + arena)
        return result
    }

    async updatePlayersIn(){
        //param string: "Lava", "Ice", "Desert", "Night"
        const Value = Moralis.Object.extend("Number")
        const query = new Moralis.Query(Value);
        const obj = await query.first();
        let result =  await obj.get(this.name)
        this.playersIn = result
        return result
    }

    updateArenaBgImage(){
        this.gctx.background.left.imageInstance.src = this.bgImage
        this.gctx.background.right.imageInstance.src = this.bgImage;
    }
}
Arena.prototype.onclick = async function(mousex, mousey){
    if (this.button.onclick(mousex, mousey)){
        this.gctx.canvas.obejectInDOM.removeEventListener('click', checkArena)

        // connect to iotex chain
        const check = await this.gctx.transaction.check_chain()
        if(!check){
            window.alert("Connect to IoTeX chain")
            this.gctx.canvas.obejectInDOM.addEventListener('click', checkArena)
            add_iotex_chain()
        }
        else if(this.gctx.transaction.transaction_in_proccess){
            this.gctx.canvas.obejectInDOM.addEventListener('click', checkArena)
            return false
        }
        else{
            this.updateArenaBgImage()
            try{
                await this.gctx.transaction.transfer(this.price, Game.user.get("ethAddress"), this.name)
            }
            catch{
                this.gctx.canvas.obejectInDOM.addEventListener('click', checkArena)
                console.log("error transaction img_path")
            }
        }

    }

}