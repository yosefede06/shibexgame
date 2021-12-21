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
    add_iotex_chain()
    document.getElementById('my-canvas').onclick = function (event) {
        document.getElementById("start-button").disabled = true
        // Game.user = Moralis.User.current()
        if (Game.user && !Game.isPlaying) {
            Game.startMenu()
        }
        else{
            login()
        }
    };
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

async function login() {
    add_iotex_chain()
    console.log("login clicked");
    var eth_address = null;
    if(!Game.user) {
        try{
            console.log("proccesing")
            Game.user = await Moralis.Web3.authenticate({signingMessage: "Log in to ShibexRide", chainId: 4689});
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
            Game.startMenu()
        }
    }
}
