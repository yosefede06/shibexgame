const serverUrl = "https://ookx1ekvhhyl.usemoralis.com:2053/server";
const appId = "xj3nAAs6JP1VixxWcF57oFyEcDdj4DwFSBfU9KJl";
Moralis.start({ serverUrl, appId });
window.onload = function () {
    // document.getElementById("start-button").onclick = function () {
    //
    //     document.getElementById("start-button").disabled = true
    //
    // };
    //

    // document.getElementById('my-canvas').onclick = function (event) {
    //
    //     document.getElementById("start-button").disabled = true
    //     // elem = document.getElementById('my-canvas')
    //     // elem.requestFullscreen()
    //     // Game.user = Moralis.User.current()
    // if (Game.user && !Game.isPlaying) {
    //
    //     Game.startMenu()
    //     }
    //     else{
    //         login()
    //     }
    // };
    Game.init()
    document.getElementById('my-canvas').style.opacity = 1

}

async function add_iotex_chain(){
    window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: '0x1251',
            chainName: 'IoTeX Mainnet',
            nativeCurrency: {
                name: 'IoTeX',
                symbol: 'IOTX',
                decimals: 18
            },
            rpcUrls: ['https://babel-api.mainnet.iotex.io'],
            blockExplorerUrls: ['https://iotexscan.io']
        }]
    })
        .catch((error) => {
            console.log(error)
        })
}

async function add_polygon_chain(){
    window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: '0x89',
            chainName: 'Matic Mainnet',
            nativeCurrency: {
                name: 'Polygon',
                symbol: 'MATIC',
                decimals: 18
            },
            rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
            blockExplorerUrls: ['https://polygonscan.com']
        }]
    })
        .catch((error) => {
            console.log(error)
        })

}

async function login() {
    // Moralis.User.current()
    // add_iotex_chain()
    // await add_polygon_chain()
    window.web3 = new Web3(window.web3.currentProvider);
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("login clicked");
    if(!Game.user) {
        try{
            console.log("proccesing")
            Game.user = await Moralis.Web3.authenticate({signingMessage: "Log in to ShibexRide", chainId: chainId});
            console.log("worked");
        }
        catch(error){
            console.log("error");
        }
    }
    if (Game.user) {
        console.log(Game.user);
        Game.user.save();
        if (!Game.isPlaying) {
            Game.arenaMenu()
        }
    }
}
