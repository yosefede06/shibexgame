class Transaction {
    constructor(gctx) {
        this.gctx = gctx;
        this.arena = undefined
        this.user = undefined
        this.receipt = undefined
        this.hash = undefined;
        this.block = undefined;
        this.value = undefined;
        this.receiver = "0x6c0C7436A63F8E90Ba4aF3782ace272dDC162BEF";
        this.contract = undefined;
        this.sender = undefined;
        this.contract_iotex = "0x838403e073a79719a0927a16642ca7dcdc642bd5"
        this.contract_polygon = "0xe04e81331bdcbfbf2d1342714812d546a55cb6dc"
        this.transaction_in_proccess = false
        this.abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
        // this.chain = "0x1251"
        this.chain = "0x89"
        this.contract = undefined
        this.loading = new Image()
        this.loading.src = "./images/loading-game.png"
    }

    async transfer(value, sender, arena) {
        this.chain = await ethereum.request({ method: 'eth_chainId' })
        this.value = value;
        this.sender = sender;
        this.arena = arena;
        this.transaction_in_proccess = true;
        if(this.chain == "0x89"){
            this.contract = new window.web3.eth.Contract(this.abi, this.contract_polygon)
        }
        if(this.chain == "0x1251"){
            this.contract = new window.web3.eth.Contract(this.abi, this.contract_iotex)
        }
        let gasLimit = 40000;
        let gasLimitHex = window.web3.utils.toHex(gasLimit);
        let gasPrice = await window.web3.eth.getGasPrice();
        this.contract.methods.transfer(this.receiver, window.web3.utils.toHex(window.web3.utils.toWei(value)))
            .send({ from: sender, gasPrice: web3.utils.toHex(web3.utils.toBN(gasPrice * 2)), gasLimit: gasLimitHex})
            .on('transactionHash', function(hash){
                Game.transaction.loading_func()
                console.log(hash);
                Game.transaction.hash = hash;
            })
            .on('receipt', function(receipt) {
                    console.log(receipt)
                    Game.transaction.receipt = receipt.events.Transfer.returnValues;
                    if (Game.transaction.check_data(value)) {
                        Game.start()
                    }
                    else{
                        Game.canvas.obejectInDOM.addEventListener('click', checkArena)
                        console.log("error with transaction")
                        throw 'error with transaction'
                    }
                }
                )
            .on('error', function(error){
                console.log(error)
                Game.transaction.transaction_in_proccess = false
                Game.canvas.obejectInDOM.addEventListener('click', checkArena)
            })
    }

    loading_func(){
        this.gctx.ctx.fillStyle = '#53d2fc'
        this.gctx.ctx.rect(0,-400,1500,1800)
        this.gctx.ctx.fill();
        this.gctx.ctx.drawImage(this.loading, 230,-100,800,800)
    }
    check_data(price) {
        console.log(window.web3.utils.fromWei(this.receipt.value))
        return (
            this.receipt.from.toUpperCase() == this.sender.toUpperCase()
            // && this.check_chain()
            && Math.abs(window.web3.utils.fromWei(this.receipt.value) - price) <= 100)
    }

    async check_chain() {
        const provider = await detectEthereumProvider()
        if (provider) {
            const chainId = await provider.request({
                method: 'eth_chainId'
            })
            return (this.chain == chainId)
        } else {
            console.log("not connected to metamask")
            return false
        }
    }
}