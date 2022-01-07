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
        this.gctx.chain = await check_iotex_chain()
        if(!this.gctx.chain){
            window.alert("Connect to IoTeX chain")
            this.gctx.canvas.obejectInDOM.addEventListener('click', checkArena)
            add_iotex_chain()
        }
        else if(this.gctx.transaction_in_proccess){
            this.gctx.canvas.obejectInDOM.addEventListener('click', checkArena)
            return false
        }
        else{
            this.updateArenaBgImage()
            try{
                this.gctx.arena_chosed = this.name
                transaction(this.price)
            }
            catch{
                this.gctx.canvas.obejectInDOM.addEventListener('click', checkArena)
                console.log("error transaction img_path")
            }
        }

    }

}