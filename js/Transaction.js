class Transaction {
    constructor() {
        this.arena = undefined
        this.user = undefined
        this.receipt = undefined
        this.hash = undefined;
        this.block = undefined;
        this.value = undefined;
        this.receiver = "0x6c0C7436A63F8E90Ba4aF3782ace272dDC162BEF";
        this.sender = undefined;
        this.contract = "0x838403e073a79719a0927a16642ca7dcdc642bd5"
        this.transaction_in_proccess = false
        this.chain = "0x1251"

    }

    async transfer(value, sender, arena) {
        this.value = value;
        this.sender = sender;
        this.arena = arena;
        this.transaction_in_proccess = true;
        const options = {
            type: "erc20",
            amount: Moralis.Units.Token(this.value, "18"),
            receiver: this.receiver,
            contractAddress: this.contract,
            awaitReceipt: false
        }
        // Game.transaction.show_loader();
        let result = await Moralis.transfer(options)
        result.on("transactionHash", function (hash) {
            Game.transaction.hash = hash;
        });
        result.on("receipt", function (receipt) {
            Moralis.web3.eth.getTransaction(Game.transaction.hash).then(function (transaction) {
                Game.transaction.receipt = transaction;
                if (Game.transaction.check_data(Game.transaction.value)) {
                    Game.start()
                    // Game.transaction.hide_loader();
                } else {
                    // Game.transaction.hide_loader();
                    Game.canvas.obejectInDOM.addEventListener('click', checkArena)
                    console.log("error with transaction")
                    throw 'error with transaction'
                }
            });
        })
            .on("error", (error) => {
                // Game.transaction.hide_loader();
                Game.transaction.transaction_in_proccess = false
                Game.canvas.obejectInDOM.addEventListener('click', checkArena)
            });
    }

    // show_loader() {
    //     var loader = document.getElementById('loaderContainer');
    //     loader.style = 'opacity: 9;';
    // }
    //
    // hide_loader() {
    //     var loader = document.getElementById('loaderContainer');
    //     loader.style = 'opacity: 0;';
    // }


    check_data(price) {
        return (
            this.receipt.from.toUpperCase() == this.sender.toUpperCase()
            && this.check_chain()
            && (this.check_value(this.receipt.input) - price <= 1000))
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

    check_value(val) {
        for (var i = 0; i < val.length; i++) {
            if (val.substring(i, i + 10) == "0000000000") {
                for (var j = i; j < val.length; j++) {
                    if (val[j] != "0") {
                        for (var k = j; k < val.length; k++) {
                            if (val.substring(k, k + 10) == "0000000000") {
                                for (var l = k; k < val.length; l++) {
                                    if (val[l] != "0" && val.substring(l - 20, l) == "00000000000000000000") {
                                        let curr = parseInt(val.substring(l, val.length), 16);
                                        return curr.toString().substring(0, curr.toString().length - 18)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}