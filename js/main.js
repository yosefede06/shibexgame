window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
const gameName = 'ShibexRide';
const authors = 'Shibex Team';
const version = '1.0.0';
const description = 'Go through the longest distance you can';

// const canvasWidth = (!window.mobileCheck()) ? (1080 * 1.17) : 700;
// const canvasHeight = (!window.mobileCheck()) ? (600 * 1.17) : 600;

const baseLine = - 120;
const highLine = 66;

// Game object
const Game = {
    // Metadata
    name: gameName,
    author: authors,
    version: version,
    license: undefined,
    description: description,

    // Canvas: size of the game window (and background)
    canvas: {
        size: {
            width: (!window.mobileCheck()) ? (1080 * 1.17) : 700,
            height: (!window.mobileCheck()) ? (600 * 1.17) : 600
        },
        baseLine: baseLine,
        highLine: highLine,

        obejectInDOM: undefined
    },

    ctx: undefined,
    isPlaying: false,
    isLoading: false,
    isGameOver: false,
    activateGameOver:false,
    inArenaMenu:false,
    isHelpActive:false,

    gameEngineInterval: undefined,

    // Time
    time: {
        FPS: 60,
        framesCount: 0,
        isFirstFrame: true
    },

    // Physics
    gravityForce: 0.3,

    // Controls
    keys: {
        SPACE: 32,
        UP: 38
    },

    arenas:[],

    // Creation timeouts
    timeOuts: {
        rockets: undefined,
        coins: undefined,
        walkers: undefined,
        obstacles: undefined
    },

    // Game elements
    player: undefined,
    bullets: [],
    explodedBullets: [],
    bulletShells: [],
    walkersBack: [],
    walkersFront: [],
    walkersRandomTime: {
        minTime: undefined,
        maxTime: undefined,
        minInicial: .01, //.01
        maxInicial: .9 //.3
    },

    rocketWarnings: [],
    rockets: [],
    rocketsRandomTime: {
        minTime: undefined,
        maxTime: undefined,
        minInicial: 3, //3
        maxInicial: 10//10
    },

    obstacles: [],
    obstaclesCreationTime: 4,
    obstaclesRandomTime: {
        minTime: undefined,
        maxTime: undefined,
        minInicial: 1, //.7
        maxInicial: 3 //?
    },

    cars : [],
    carsRandomTime: {
        minTime: undefined,
        maxTime: undefined,
        minInicial: 3,
        maxInicial: 10
    },

    lasers: [],

    coins: [],
    coinsRowAmount: 10,
    coinsCreationTime: 5,  // Seconds
    coinsRandomTime: {
        minTime: undefined,
        maxTime: undefined,
        minInicial: 1,
        maxInicial: 4,
    },

    speedPowerUp: undefined,

    background: {
        left: undefined,
        right: undefined,
        initial: undefined,
        gameOver: undefined,
        menu: undefined,
    },

    // Game points system

    collectedCoins: 0,
    distanceDone: 0,
    final_score: 0,
    audio: {
        tracks: {
            breakWallSong: new Audio('./audio/break-wall.mp3'),
            runFloorSong: new Audio('./audio/runfloor.mp3'),
            shotsSong: new Audio('./audio/shooting.mp3'),
            coinsSong: new Audio('./audio/coins.mp3'),
            warningSong: new Audio('./audio/warning.mp3'),
            rocketSong: new Audio('./audio/rocket.mp3'),
            electricitySong: new Audio('./audio/zag.mp3'),
            truck: new Audio('./audio/truck_up.mp3'),
        },

        overallVolume: .15
    },
    user: undefined,
    transaction: undefined,
    player_data: undefined,


    //----- INITIALIZE METHODS -----

    init() {
        this.transaction = new Transaction()
        this.setCanvasDimensions()
        this.ctx = this.canvas.obejectInDOM.getContext('2d')

        // init Menu Buttons
        this.initArenas()
        this.initToolbar()


        // We create the player
        this.player = new JoyRoide(this.canvas, this.ctx, this, this.time.FPS, this.canvas.highLine, this.gravityForce)

        // We create background instances
        this.background.left = new Background(this.canvas, this.ctx, 0, this.time.FPS)
        this.background.right = new Background(this.canvas, this.ctx, this.canvas.size.width, this.time.FPS)

        this.background.initial = new Background(this.canvas, this.ctx, 0, this.time.FPS, 'initial')

        this.background.gameOver = new Background(this.canvas, this.ctx, 0, this.time.FPS, 'gameOver')

        this.background.up = new Background(this.canvas, this.ctx, this.canvas.size.height, this.time.FPS, 'iron-up', this)
        this.background.down = new Background(this.canvas, this.ctx, this.canvas.size.height, this.time.FPS, 'iron-down', this)
        this.background.menu  = new Background(this.canvas, this.ctx, this.canvas.size.height, this.time.FPS, 'menu', this)
        this.background.game_explanation  = new Background(this.canvas, this.ctx, this.canvas.size.height, this.time.FPS, 'game_explanation', this)
        this.background.help = new Background(this.canvas, this.ctx, this.canvas.size.height, this.time.FPS, 'help', this)



        // Set random creation times
        this.walkersRandomTime.minTime = this.walkersRandomTime.minInicial  // Walkers
        this.walkersRandomTime.maxTime = this.walkersRandomTime.maxInicial

        this.rocketsRandomTime.minTime = this.rocketsRandomTime.minInicial  // Rockets
        this.rocketsRandomTime.maxTime = this.rocketsRandomTime.maxInicial

        this.obstaclesRandomTime.minTime = this.obstaclesRandomTime.minInicial  // Obstacles
        this.obstaclesRandomTime.maxTime = this.obstaclesRandomTime.maxInicial

        this.coinsRandomTime.minTime = this.coinsRandomTime.minInicial
        this.coinsRandomTime.maxTime = this.coinsRandomTime.maxInicial

        this.carsRandomTime.minTime = this.carsRandomTime.minInicial
        this.carsRandomTime.maxTime = this.carsRandomTime.maxInicial

        // We set the event listeners
        this.setEventHandlers()

        // Image loading
        this.background.initial.imageInstance.onload = () => {

            this.drawInitialBackground()

        }
        this.arenaMenu = this.arenaMenu.bind(this)
        this.canvas.obejectInDOM.addEventListener('click', this.arenaMenu)


    },

    setCanvasDimensions() {
        this.canvas.obejectInDOM = document.querySelector('#my-canvas')
        this.canvas.obejectInDOM.width = this.canvas.size.width
        this.canvas.obejectInDOM.height = this.canvas.size.height
        this.canvas.baseLine = this.canvas.size.height + this.canvas.baseLine
    },

    reset() {

        // We clear async behaviour
        clearInterval(this.gameEngineInterval)

        // We reset values
        this.transaction.transaction_in_proccess = false
        this.isGameOver = false
        this.activateGameOver = false
        this.distanceDone = 0
        this.collectedCoins = 0
        this.player.isDead = false
        this.time.framesCount = 0
        this.background.up.loadingTransitionCurrentTime = 0
        this.background.down.loadingTransitionCurrentTime = 0
        this.player.speedX = this.player.initialSpeedX
        //data
        this.player_data = undefined
    },


    //----- GAME START METHODS -----

    drawGameExplanation(){

        this.ctx.drawImage(this.background.game_explanation.imageInstance, 0, 0, this.canvas.size.width, this.canvas.size.height)
        this.arenaMenu = this.arenaMenu.bind(this)
        this.canvas.obejectInDOM.addEventListener('click', this.arenaMenu)
    },

    drawHelpExplanation(){
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(250, 200, 800, 261)
        this.ctx.drawImage(this.background.help.imageInstance, 250, 200, 800, 261)

    },

    startMenu()
    {
        this.arenaMenu()

    },
    arenaMenu()
    {
        this.inArenaMenu = true
        this.canvas.obejectInDOM.removeEventListener('click', this.arenaMenu)
        // this.ctx.drawImage(this.background.menu.imageInstance, 0,  0, this.canvas.size.width, this.canvas.size.height)
        // start menu where we choose the arena
        // this.canvas.obejectInDOM.removeEventListener('click', this.arenaMenu.bind(this))
        this.drawMenuBackground();
        this.canvas.obejectInDOM.addEventListener('click', checkArena)
        this.canvas.obejectInDOM.addEventListener('click', checkToolbar)
        this.canvas.obejectInDOM.addEventListener('mousemove', checkToolbarHover)

    },
    initArenas()
    {
        var button1 = new Button(120, 310, 100, 130, this,'images/btn_volcano.png', 'images/tmp_button.png')
        var button2 = new Button( 430, 310, 100, 130, this,'images/btn_ice.png', 'images/tmp_button.png')
        var button3 = new Button(740, 310, 100, 130, this,'images/btn_desierto.png', 'images/tmp_button.png')
        var button4 = new Button(1045, 310, 100, 130, this,'images/btn_night.png', 'images/tmp_button.png')
        this.arenas.push(new Arena('Lava','1.000001', "100K", 3 , button1, 'images/bgVolcan.jpg', this))
        this.arenas.push(new Arena('Ice','200000.000001', "200K", 3, button2, 'images/ice.jpg', this))
        this.arenas.push(new Arena('Desert','500000.000001', "500K", 3, button3, 'images/new_desert.png', this))
        this.arenas.push(new Arena('Night','1000000.000001', "1M", 3, button4, 'images/night.jpg', this))

    },
    initToolbar()
    {
        this.toolbar = new Toolbar(this)

    },
    start() {
        this.inArenaMenu = false
        this.canvas.obejectInDOM.removeEventListener('click', this.arenaMenu)
        this.canvas.obejectInDOM.removeEventListener('click', checkArena)
        this.canvas.obejectInDOM.removeEventListener('click', checkToolbar)
        this.canvas.obejectInDOM.removeEventListener('mousemove', checkToolbarHover)



        this.loadingScreen()
        this.isPlaying = true
        this.reset()
        this.initiateAudio()
        this.createFrame()

        setTimeout(() => {
            this.createWarning()
            this.createObstacle()
            this.createCoins()
            this.createWalker()
            this.createCar()
        }, 1500)

    },


    //----- GAME ENGINE -----

    /**
     * This function updates the game at each frame
     */
    createFrame() {
        this.gameEngineInterval = setInterval(() => {
            if (this.isGameOver){
                // we are stopping the loop if game over
                clearInterval(this.gameEngineInterval)
            }
            // Player shooting
            if (this.player.isShooting && this.player.fireTime % this.player.fireFrequency === 0) {
                this.player.shoot()
            }


            // We calculate the new position of all the elements
            if (!this.isGameOver) {
                this.moveAll()
            }

            // Check collisions
            this.checkAllCollisions()

            // Move game elements
            this.clearAll()

            // We draw all
            this.drawAll()

            // We add distance
            this.addDistance()

            // Update the speed
            this.change_speed()

            // We update the counters

            // Frames counter
            this.time.framesCount++

            // Shooting time counter
            if (this.player.isShooting) {
                this.player.fireTime++
            }

            // Frames count reseter
            if (this.time.framesCount === 6000) {
                this.time.framesCount = 0
            }

            this.time.isFirstFrame = false
        }, 1000 / this.time.FPS)

    },


    //----- CREATORS -----

    createCoins() {

        const randomShape = Math.floor(Math.random() * 3)
        let offSet = undefined

        let minPosY = undefined
        let maxPosY = undefined
        let randomPosY = undefined

        switch (randomShape) {
            case 0:

                offSet = 0
                minPosY = 70
                maxPosY = this.canvas.size.height - 95
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                break;

            case 1:

                offSet = 7    // Coin row shape is a descending slope (LIMIT DOWN: canvas.height-160 | LIMIT UP: 70)
                minPosY = 70
                maxPosY = this.canvas.size.height - 160
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                break;

            case 2:

                offSet = -7     // Coin row shape is an ascending slope
                minPosY = 130
                maxPosY = this.canvas.size.height - 95
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                break;

            default:
                break;
        }

        const randomValue =
            Math.random() * (this.coinsRandomTime.maxTime - this.coinsRandomTime.minTime) + this.coinsRandomTime.minTime

        // // checking that the coins are not touching the obstacle
        let flag = true
        let minPosYRow = randomPosY;
        let maxPosyRow = (this.coinsRowAmount * offSet) + randomPosY
        let minPosXRow = this.canvas.size.width + 25
        let maxPosXRow = this.canvas.size.width + 25 * (this.coinsRowAmount)
        this.obstacles.forEach(elem => {
            if (elem.isTouching(minPosXRow, minPosYRow, maxPosXRow, maxPosyRow))
            {
                // if here the coins is touching the obstacle we want to change the Y positiondr
                flag = false

                // console.log('obs:', obstacleX)
                // console.log('obstacleY:', obstacleY)
                //     // coins will be above the obstacle
                //     let minPosY2 = obstacleY + obstacleHeight
                //     let randomPosYA = Math.floor(Math.random() * (maxPosY - minPosY2)) + minPosY2
                //
                //     // coins will be below
                //     let randomPosYB = Math.floor(Math.random() * (obstacleY - minPosY)) + minPosY
                //
                //     randomPosY = Math.random() < 0.5 ? randomPosYA : randomPosYB;
                //     minPosYRow = randomPosY;
                //     maxPosyRow = (this.coinsRowAmount) * offSet + randomPosY
                //     minPosXRow = this.canvas.size.width + 25
                //     maxPosXRow = this.canvas.size.width + 25 * (this.coinsRowAmount)
            }
        })
        if (flag){
            for (let i = 0; i < this.coinsRowAmount; i++) {
                const newCoin = new Coin(this.canvas, this.ctx, this.time.FPS,
                    this.canvas.size.width + 25 * i,
                    (i * offSet) + randomPosY, i)
                this.coins.push(newCoin)
            }
        }

        this.timeOuts.coins = setTimeout(() => {this.createCoins()}, randomValue * 1000)

    },

    destroyBullet(bulletToKill) {
        const index = this.explodedBullets.indexOf(bulletToKill)
        this.explodedBullets.splice(index, 1)
    },

    createWarning() {

        const randomValue = Math.random() * (this.rocketsRandomTime.maxTime - this.rocketsRandomTime.minTime) + this.rocketsRandomTime.minTime
        // console.log(randomValue)

        this.timeOuts.rockets = setTimeout(() => {
            this.rocketWarnings.push(new Warning(this.canvas, this.ctx, this.player.position.y, this))
            this.createWarning()

        }, randomValue * 1000);


    },

    createRocket(warningElement) {

        const index = this.rocketWarnings.indexOf(warningElement)

        // We delete the warning from the array
        this.rocketWarnings.splice(index, 1)

        // We shoot the rocket
        this.rockets.push(new Rocket_spacex(this.canvas, this.ctx, warningElement.position.y, this))
    },

    destroyRocket(rocketToKill) {

        const index = this.rockets.indexOf(rocketToKill)
        this.rockets.splice(index, 1)
    },

    createObstacle() {

        const randomValue = Math.random() * (this.obstaclesRandomTime.maxTime - this.obstaclesRandomTime.minTime) + this.obstaclesRandomTime.minTime
        var ob = new Obstacle(this.canvas, this.ctx, this.time.FPS)
        var flag = true
        this.coins.forEach(elem => {
            if(elem.isTouching(ob.position.x, ob.position.y, ob.position.x + ob.size.width, ob.position.y+ob.size.height)){
                flag = false
            }
        })
        if (flag){
            this.obstacles.push(ob)
        }

        this.timeOuts.obstacles = setTimeout(() => {

            this.createObstacle()

        }, randomValue * 1000)

    },

    destroyObstacle(obstacleToKill) {
        const index = this.obstacles.indexOf(obstacleToKill)
        this.obstacles.splice(index, 1)
    },

    createWalker() {
        const randomTime = Math.random() * this.walkersRandomTime.maxTime + this.walkersRandomTime.minTime
        this.timeOuts.walkers = setTimeout(() => {
            // Random Y position
            const minY = 100
            const maxY = 120
            const randomPosY = Math.random() * (maxY - minY) + minY
            if (randomPosY > 110) {
                this.walkersBack.push(new Walker(this.canvas, this.ctx, this, this.time.FPS,this.canvas.size.height - randomPosY))
            } else {
                this.walkersFront.push(new Walker(this.canvas, this.ctx, this, this.time.FPS,this.canvas.size.height - randomPosY))
            }
            this.createWalker()
        }, randomTime * 1000)
    },

    destroyWalker(walkerToKill, array) {
        const index = array.indexOf(walkerToKill)
        array.splice(index, 1)
    },

    createCar()
    {
        const randomTime = Math.random() * this.carsRandomTime.maxTime + this.carsRandomTime.minTime

        this.timeOuts.cars = setTimeout(() => {
            this.cars.push(new Car(this.canvas, this.ctx, this, this.time.FPS, 0))
            this.createCar()
        }, randomTime * 1000)


    },

    destroyCar(carToKill)
    {
        // this.gameCtx.audio.tracks.truck.pause()
        const index = this.cars.indexOf(carToKill)
        this.cars.splice(index, 1)
    },


    //----- CHECKERS -----

    checkAllCollisions() {

        this.playerCollision()
        this.bulletsCollision()
        this.checkShellsOut()
        this.checkCoinsOut()
        this.checkCoinsOut()
        this.checkRocketsOut()
        this.checkObstaclesOut()
        this.checkWalkersOut()
        this.checkCarOut()

    },

    playerCollision() {

        const playerSpaceData = {
            posX: this.player.position.x,
            posY: this.player.position.y,
            width: this.player.size.collisionWidth + 25,
            height: this.player.size.collisionHeight + 25
        }

        if (!this.player.isDead) {
            this.playerCoinsCollision(playerSpaceData)
            this.playerRocketsCollision(playerSpaceData)
            this.playerObstaclesCollision(playerSpaceData)
            this.playerCarCollision(playerSpaceData)
        }
        this.playerLimitsCollision(playerSpaceData)
    },

    playerLimitsCollision(playerSpaceData) {
        let floorLimit = this.canvas.baseLine
        if (this.player.isDead) {
            floorLimit = this.player.position.deadBaseLine
        }

        // Floor collision
        if (playerSpaceData.posY >= floorLimit) {
            this.player.isTouchingFloor = true
            this.player.position.y = floorLimit
            this.player.speedY = 0
            if (!this.player.isDead) {
                this.playRunAudio()
            }
        } else {
            this.player.isTouchingFloor = false
            // Roof collision
            if (playerSpaceData.posY <= this.canvas.highLine) {
                this.player.isTouchingRoof = true
                this.player.position.y = this.canvas.highLine
                this.player.speedY = 0

            } else {
                this.player.isTouchingRoof = false
            }
            this.stopRunAudio()
        }
    },

    playerCoinsCollision(playerSpaceData) {
        // Coins collision
        this.coins.forEach((elm => {
            const coinPosX = elm.position.x
            const coinPosY = elm.position.y
            const coinWidth = elm.size.width
            const coinHeight = elm.size.height

            // We check if is invading the coin area
            if (playerSpaceData.posX < coinPosX + coinWidth &&
                playerSpaceData.posX + playerSpaceData.width > coinPosX &&
                playerSpaceData.posY < coinPosY + coinHeight &&
                playerSpaceData.posY + playerSpaceData.height > coinPosY) {

                // We delete the coin
                this.coins.splice(this.coins.indexOf(elm), 1)

                // We play the audio
                if (this.audio.tracks.coinsSong.currentTime > .04) {
                    this.audio.tracks.coinsSong.currentTime = 0
                }
                this.audio.tracks.coinsSong.play()
                // We add a point
                this.addPoints()
            }
        }))
    },

    playerRocketsCollision(playerSpaceData) {

        // We check Rockets Colision
        this.rockets.forEach(elm => {
            const rocketsPosX = elm.position.x
            const rocketsPosY = elm.position.y
            const rocketsWidth = elm.size.width
            const rocketsHeight = elm.size.height

            if (playerSpaceData.posX < rocketsPosX + rocketsWidth &&
                playerSpaceData.posX + playerSpaceData.width > rocketsPosX &&
                playerSpaceData.posY < rocketsPosY + rocketsHeight &&
                playerSpaceData.posY + playerSpaceData.height > rocketsPosY) {

                this.destroyRocket(elm)
                this.player.die()
            }

        })

    },
    playerCarCollision(playerSpaceData){
        this.cars.forEach(elm => {
            if (playerSpaceData.posX < elm.position.x + elm.size.width - 50
                && playerSpaceData.posX > elm.position.x + 100
                && playerSpaceData.posY < elm.position.y + elm.size.height
                && playerSpaceData.posY > elm.position.y) {

                this.player.die()
            }
        })

    },

    playerObstaclesCollision(playerSpaceData) {

        // We check Obstacles collision
        this.obstacles.forEach(elm => {

            let obstaclesPosX = elm.position.x + elm.collisionMargin
            let obstaclesPosY = elm.position.y + elm.collisionMargin

            let obstaclesWidth = elm.size.width - (elm.collisionMargin * 2)
            let obstaclesHeight = elm.size.height - (elm.collisionMargin * 2)

            if (playerSpaceData.posX < obstaclesPosX + obstaclesWidth &&
                playerSpaceData.posX + playerSpaceData.width > obstaclesPosX &&
                playerSpaceData.posY < obstaclesPosY + obstaclesHeight &&
                playerSpaceData.posY + playerSpaceData.height > obstaclesPosY) {

                this.player.shock()
            }

        })

    },

    bulletsCollision() {

        // If the array is not empty
        if (this.bullets.length) {

            this.bullets.forEach(elm => {

                const bulletPosX = elm.position.x
                const bulletPosY = elm.position.y
                const bulletWidth = elm.image.shoot.size.width
                const bulletHeight = elm.image.shoot.size.height

                // Collision with walkersBack
                const backWalkersToKill = []

                this.walkersBack.forEach(e => {

                    if (!e.isExploding) {

                        const walkersPosX = e.position.x
                        const walkersPosY = e.position.y
                        const walkersWidth = e.size.width
                        const walkersHeight = e.size.height

                        if (bulletPosX < walkersPosX + walkersWidth &&
                            bulletPosX + bulletWidth > walkersPosX &&
                            bulletPosY < walkersPosY + walkersHeight &&
                            bulletPosY + bulletHeight > walkersPosY) {

                            backWalkersToKill.push(e)

                            //this.destroyWalker(elm, this.walkersBack)
                        }
                    }


                })

                // Collision with walkersFront
                const frontWalkersToKill = []

                this.walkersFront.forEach(e => {

                    if (!e.isExploding) {

                        const walkersPosX = e.position.x
                        const walkersPosY = e.position.y
                        const walkersWidth = e.size.width
                        const walkersHeight = e.size.height

                        if (bulletPosX < walkersPosX + walkersWidth &&
                            bulletPosX + bulletWidth > walkersPosX &&
                            bulletPosY < walkersPosY + walkersHeight &&
                            bulletPosY + bulletHeight > walkersPosY) {

                            frontWalkersToKill.push(e)

                            //this.destroyWalker(elm, this.walkersFront)
                        }
                    }


                })
//                const carsToKill = []
                this.cars.forEach(elm => {
                    if(bulletPosX < elm.position.x + elm.size.width
                        && bulletPosX + bulletWidth > elm.position.x + 100 //
                        && bulletPosY < elm.position.y + elm.size.height
                        && bulletPosY + bulletHeight > elm.position.y){

                        this.destroyCar(elm)

                    }


                })

                backWalkersToKill.forEach(e => {

                    this.destroyWalker(e, this.walkersBack)

                })

                frontWalkersToKill.forEach(e => {

                    this.destroyWalker(e, this.walkersFront)

                })
            })

            //----- FLOOR -----


            // Collision with floor
            const touchingFloorBullets = []

            this.bullets.forEach(elm => {

                const bulletPosX = elm.position.x
                const bulletPosY = elm.position.y
                const bulletWidth = elm.image.shoot.size.width
                const bulletHeight = elm.image.shoot.size.height

                // If it touches the floor
                if (elm.position.y >= this.canvas.baseLine - 15) {

                    const index = this.player.bullets.indexOf(elm)

                    touchingFloorBullets.push(elm)

                }

            })

            // We delete form the bullets array all the elements touching floor
            touchingFloorBullets.forEach(elm => {

                elm.explode()

                this.bullets.splice(this.bullets.indexOf(elm), 1)
                this.explodedBullets.push(elm)

            })

        }

    },

    checkShellsOut() {

        this.bulletShells.forEach(elm => {

            if (elm.position.x + elm.size.width <= 0 || elm.position.y >= this.canvas.size.height) {

                const index = this.bulletShells.indexOf(elm)

                this.bulletShells.splice(index, 1)

            }

        })

    },

    checkCoinsOut() {

        this.coins.forEach(elm => {

            if (elm.position.x + elm.size.width <= 0) {

                const index = this.coins.indexOf(elm)

                this.coins.splice(index, 1)

            }

        })

    },

    checkRocketsOut() {

        //for each performs the specified action for each element in an array.
        this.rockets.forEach(elm => {
            if (elm.position.x + elm.size.width <= 0) {
                this.destroyRocket(elm)
            }
        })
    },

    checkObstaclesOut() {

        this.obstacles.forEach(elm => {

            if (elm.position.x + elm.size.width <= 0) {

                this.destroyObstacle(elm)
            }
        })

    },

    checkWalkersOut() {

        this.walkersBack.forEach(elm => {

            if (elm.position.x + elm.size.width <= 0) {

                this.destroyWalker(elm, this.walkersBack)

            }
        })

        this.walkersFront.forEach(elm => {

            if (elm.position.x + elm.size.width <= 0) {

                this.destroyWalker(elm, this.walkersFront)

            }
        })
    },

    checkCarOut(){
        this.cars.forEach(elm => {
            if (elm.position.x + elm.size.width <= 0) {
                this.destroyCar(elm)
            }
        })

    },


    //----- MOTION METHODS -----

    moveAll() {

        this.moveBackground()
        this.moveLoadingScreen()
        this.movePlayer()
        this.moveBullets()
        this.moveBulletShells()
        this.moveCoins()
        this.moveRockets()
        this.moveObstacles()
        this.moveWalkersBack()
        this.moveWalkersFront()
        this.moveCars()
    },

    moveBackground() {
        // If the left image is out from the canvas
        if (this.background.right.position.x <= 0) {
            this.background.left.position.x = this.background.right.position.x
            this.background.right.position.x += this.canvas.size.width
        }

        this.background.left.move(this.player.speedX)
        this.background.right.move(this.player.speedX)

    },

    moveLoadingScreen() {
        this.background.up.move()
        this.background.down.move()
    },

    movePlayer() {
        this.player.move(this.player.speedX)
    },

    moveBullets() {
        this.bullets.forEach((elm) => {
            elm.move(this.player.speedX)
        })
    },

    moveBulletShells() {
        this.bulletShells.forEach((elm) => {
            elm.move(this.player.speedX)
        })
    },

    moveCoins() {
        this.coins.forEach(elm => {
            elm.move(this.player.speedX)
        })
    },

    moveRockets() {

        // We move the warnings
        this.rocketWarnings.forEach(elm => {
            elm.move(this.player.position.y)
        })

        // We move the rockets
        this.rockets.forEach(elm => {
            elm.move()
        })
    },


    moveObstacles() {

        this.obstacles.forEach(elm => {

            elm.move(this.player.speedX)

        })

    },

    moveWalkersBack() {

        this.walkersBack.forEach(elm => {

            elm.move(this.player.speedX)

        })

    },

    moveWalkersFront() {

        this.walkersFront.forEach(elm => {

            elm.move(this.player.speedX)

        })

    },

    moveCars(){
        this.cars.forEach(elm => {
            elm.move(this.player.speedX)
        })
    },


    //----- RENDERING IMAGE-----

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvas.size.width, this.canvas.size.height)
    },


    drawAll() {

        this.drawBackgrond()
        this.drawObstacles()
        this.drawWalkersBack()
        this.drawCoins()
        this.drawBullets()
        this.drawBulleShells()
        this.drawRockets()
        this.drawPlayer()
        this.drawWalkersFront()
        this.drawCars()
        this.drawScore()
        this.drawInitialBackground()
        this.drawGameOver()
        this.drawLoadingScreen()



    },

    drawInit() {

        this.drawBackgrond()
        this.drawPlayer()

    },

    async drawMenuBackground(){
        this.ctx.drawImage(this.background.menu.imageInstance, 0,  0, this.canvas.size.width, this.canvas.size.height)

        // draw tool bar
        this.toolbar.draw()
        // this.ctx.drawImage(this.toolbar.imageInstance, 0, 120, this.toolbar.width, this.toolbar.height, 300, 0, this.toolbar.width/2, this.toolbar.height/2)

        // draw each buttons
        for (let i = 0; i < this.arenas.length; i++){
            var elm = this.arenas[i].button
            this.ctx.drawImage(elm.imageInstance, 0, 0, this.canvas.size.width, this.canvas.size.height)
        }

        // draw price for each arena
        for (const elem of this.arenas) {
            var button = elem.button
            const x = button.x
            const y = button.y
            const width = button.width
            const height = button.height
            const price = elem.price_draw
            const priceToDraw = `${price} SHIBX`
            this.ctx.font = 'italic bold 35px arial,serif'
            this.ctx.fillStyle = 'orange'
            this.ctx.lineWidth = 2

            // getting the number of player in the Arena
            if( elem.playersIn === undefined){
                await elem.updatePlayersIn()
            }
            const countToDraw = `${elem.playersIn} / ${elem.capacity}`

        if(this.inArenaMenu){
            if (elem.name === "Lava"){
                this.ctx.fillText(countToDraw, x, y + height + 50)
                this.ctx.strokeText(countToDraw, x, y + height + 50)
                this.ctx.fillText(priceToDraw, x - 60, y + height  - 300)
                this.ctx.strokeText(priceToDraw, x - 60, y + height - 300)
            }
            if (elem.name === 'Ice'){
                this.ctx.fillText(countToDraw, x + 10, y + height + 50)
                this.ctx.strokeText(countToDraw, x + 10, y + height + 50)
                this.ctx.fillText(priceToDraw, x - 50, y + height  - 300)
                this.ctx.strokeText(priceToDraw, x - 50, y + height - 300)
            }
            if (elem.name === 'Desert'){
                this.ctx.fillText(countToDraw, x + 20, y + height + 50)
                this.ctx.strokeText(countToDraw, x + 20, y + height + 50)
                this.ctx.fillText(priceToDraw, x - 50, y + height  - 300)
                this.ctx.strokeText(priceToDraw, x - 50, y + height - 300)
            }
            if (elem.name === 'Night'){
                this.ctx.fillText(countToDraw, x + 27, y + height + 50)
                this.ctx.strokeText(countToDraw, x + 27, y + height + 50)
                this.ctx.fillText(priceToDraw, x - 30, y + height  - 300)
                this.ctx.strokeText(priceToDraw, x - 30, y + height - 300)
            }

        }

        }

    },


    drawBackgrond() {

        if (this.isPlaying) {

            this.ctx.drawImage(this.background.left.imageInstance,
                this.background.left.position.x,
                0,
                this.canvas.size.width,
                this.canvas.size.height)
            this.ctx.drawImage(this.background.right.imageInstance,
                this.background.right.position.x,
                0,
                this.canvas.size.width,
                this.canvas.size.height)

        }


    },

    drawInitialBackground() {

        if (!this.isPlaying) {

            this.ctx.drawImage(this.background.initial.imageInstance, 0, 0, this.canvas.size.width, this.canvas.size.height)

        }


    },

    drawLoadingScreen() {

        if (this.isLoading) {

            this.ctx.drawImage(this.background.up.imageInstance, 0, this.background.up.position.y, this.canvas.size.width, this.canvas.size.height / 2)
            this.ctx.drawImage(this.background.down.imageInstance, 0, this.background.down.position.y, this.canvas.size.width, this.canvas.size.height / 2)

        }


    },

    drawPlayer() {

        if (!this.player.isDead && !this.player.isShocking) {

            if (!this.player.isShooting) {

                this.player.spriteChangeTime = .1

            } else {

                this.player.spriteChangeTime = .05

            }

            // We change the sprite row depending on is touching floor (run) or not (fly)
            if (this.player.isTouchingFloor) {

                this.player.image.player.rowIndex = 0

            } else {

                this.player.image.player.rowIndex = 1

            }

            // We change the running sprite
            if (!this.player.isTouchingFloor && !this.player.isShooting) {

                this.player.image.player.frameIndex = 3

            } else {

                if (this.time.framesCount % (this.time.FPS * this.player.spriteChangeTime) === 0) {

                    if (this.player.image.player.frameIndex === this.player.image.player.frames - 1) {

                        this.player.image.player.frameIndex = 0
                        this.player.image.gunFire.frameIndex = 0

                    } else {

                        this.player.image.player.frameIndex += 1
                        this.player.image.gunFire.frameIndex += 1
                    }

                }
            }

            if (!this.player.isShooting) {

                this.player.image.gunFire.frameIndex = 3

            }


            // Draw player
            this.ctx.drawImage(
                this.player.image.player.imageInstance,
                this.player.image.player.frameIndex * Math.floor(this.player.image.player.imageInstance.width / this.player.image.player.frames),
                this.player.image.player.rowIndex * Math.floor(this.player.image.player.imageInstance.height / this.player.image.player.rows),
                Math.floor(this.player.image.player.imageInstance.width / this.player.image.player.frames),
                Math.floor(this.player.image.player.imageInstance.height / this.player.image.player.rows),
                this.player.position.x,
                this.player.position.y,
                (this.player.size.width * 2) / this.player.image.player.frames,
                this.player.size.height)

            // Draw gun fire
            this.ctx.drawImage(
                this.player.image.gunFire.imageInstance,
                this.player.image.gunFire.frameIndex * Math.floor(this.player.image.gunFire.imageInstance.width / this.player.image.gunFire.frames),
                0,
                Math.floor(this.player.image.gunFire.imageInstance.width / this.player.image.gunFire.frames),
                this.player.image.gunFire.imageInstance.height,
                this.player.gunFire.position.x,
                this.player.gunFire.position.y,
                (this.player.gunFire.size.width * 2) / this.player.image.gunFire.frames,
                this.player.gunFire.size.height)

        } else if (this.player.isShocking) {    // Shocking

            this.ctx.drawImage(
                this.player.image.playerElectric.imageInstance,
                this.player.position.x,
                this.player.position.y,
                this.player.size.width / 2,
                this.player.size.height

            )

        } else {

            this.ctx.drawImage(
                this.player.image.playerDead.imageInstance,

                this.player.position.x,
                this.player.position.y,
                this.player.size.width / 1.8,
                this.player.size.height / 1.8
            )

        }


    },

    drawBullets() {

        // If there is some bullet in the array

        this.bullets.forEach(elm => {

            this.ctx.drawImage(elm.image.shoot.imageInstance, elm.position.x, elm.position.y, elm.image.shoot.size.width, elm.image.shoot.size.height)

        })

        // If there is some exploded bullet

        this.explodedBullets.forEach(elm => {

            this.ctx.drawImage(
                elm.image.explosion.imageInstance,
                elm.image.explosion.frameIndex * Math.floor(elm.image.explosion.imageInstance.width / elm.image.explosion.frames),
                0,
                elm.image.explosion.imageInstance.width / 2,
                elm.image.explosion.imageInstance.height,


                elm.position.x,
                elm.position.y,
                elm.image.explosion.size.width,
                elm.image.explosion.size.height)

        })
    },

    drawBulleShells() {

        // TODO: this.bulletShells.forEach(elm => {                  /// EHHHHHHHH!!! HEREEEEEEEE!!

        //     this.ctx.drawImage(
        //         elm.image.imageInstance,
        //         elm.image.frameIndex * (elm.image.imageInstance.width / elm.image.frames),
        //         0,
        //         elm.image.imageInstance.width / elm.image.frames,
        //         elm.image.imageInstance.height,
        //         elm.position.x,
        //         elm.position.y,
        //         elm.size.width,
        //         elm.size.height)

        // })


        this.bulletShells.forEach(elm => {                  /// EHHHHHHHH!!! HEREEEEEEEE!!

            if (this.time.framesCount % (this.time.FPS * this.bulletShells[0].image.spriteChangeTime) === 0) {

                if (elm.image.frameIndex !== 7) {

                    elm.image.frameIndex++

                } else {

                    elm.image.frameIndex = 0

                }

            }

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.image.frameIndex * (elm.image.imageInstance.width / elm.image.frames),
                0,
                elm.image.imageInstance.width / elm.image.frames,
                elm.image.imageInstance.height,
                elm.position.x,
                elm.position.y,
                elm.size.width,
                elm.size.height)

        })

    },

    drawCoins() {

        // we change the sprite Coins
        if (this.coins.length) {

            if (this.time.framesCount % (this.time.FPS * this.coins[0].flipCoinTime) === 0) {

                this.coins.forEach(elm => {

                    const index = this.coins.indexOf(elm)

                    if (elm.image.frameIndex !== elm.image.frames - 1) {

                        elm.image.frameIndex += 1

                    } else {

                        elm.image.frameIndex = 0

                    }
                })
            }
        }

        this.coins.forEach(elm => {

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.image.frameIndex * Math.floor(elm.image.imageInstance.width / elm.image.frames),
                0,
                Math.floor(elm.image.imageInstance.width / elm.image.frames),
                elm.image.imageInstance.height,
                elm.position.x,
                elm.position.y,
                elm.size.width,
                elm.size.height)

        })


    },

    drawScore() {

        // We draw distance
        const distanceToDraw = `${Math.floor(this.distanceDone)}M`

        this.ctx.font = 'italic bold 25px arial,serif'
        this.ctx.fillStyle = 'orange'
        this.ctx.fillText(distanceToDraw, 20, 50)
        this.ctx.lineWidth = 2
        this.ctx.strokeText(distanceToDraw, 20, 50)

        // We draw coins
        const coinsToDraw = `${this.collectedCoins} SHIBX`

        this.ctx.font = 'italic bold 25px arial,serif'
        this.ctx.fillText(coinsToDraw, 20, 80)
        this.ctx.strokeText(coinsToDraw, 20, 80)

        // We draw the global score
        const score = Math.floor(this.distanceDone) + 5 * this.collectedCoins
        const scoreToDraw = `SCORE: ${score}`
        this.ctx.fillText(scoreToDraw, 20, 110)
        this.ctx.strokeText(scoreToDraw, 20, 110)
        if (this.player.isDead){
            const score = Math.floor(this.distanceDone) + 5 * this.collectedCoins
            const scoreToDraw = `YOUR FINAL SCORE IS: ${score}`
            this.ctx.font = 'italic bold 40px arial, serif'
            this.ctx.fillText(scoreToDraw, 330, 400)
            this.ctx.strokeText(scoreToDraw, 330, 400)
        }

    },

    drawRockets() {

        // We draw the warnings
        this.rocketWarnings.forEach(elm => {

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.image.frameIndex * Math.floor(elm.image.imageInstance.width / elm.image.frames),
                0,
                Math.floor(elm.image.imageInstance.width / elm.image.frames),
                elm.image.imageInstance.height,
                elm.position.x,
                elm.position.y,
                (elm.size.width * 2) / elm.image.frames,
                elm.size.height
            )

        })

        // We draw the rockets
        this.rockets.forEach(elm => {

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.position.x,
                elm.position.y,
                elm.size.width,
                elm.size.height
            )
        })

    },

    drawObstacles() {

        this.obstacles.forEach(elm => {

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.position.x,
                elm.position.y,
                elm.size.width,
                elm.size.height
            )

        })

    },

    drawWalkersBack() {

        this.walkersBack.forEach(elm => {

            elm.spriteChangeTime = .1
            if (this.time.framesCount % (this.time.FPS * elm.spriteChangeTime) === 0) {

                if (elm.image.frameIndex === elm.image.frames - 1) {
                    elm.image.frameIndex = 0

                } else {
                    elm.image.frameIndex += 1
                }
            }

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.image.frameIndex * Math.floor(elm.image.imageInstance.width / elm.image.frames),
                elm.image.rowIndex * Math.floor(elm.image.imageInstance.height / elm.image.rows),
                Math.floor(elm.image.imageInstance.width / elm.image.frames),
                Math.floor(elm.image.imageInstance.height / elm.image.rows),
                elm.position.x,
                elm.position.y,
                elm.size.width,
                elm.size.height
            )

        })

    },

    drawWalkersFront() {

        this.walkersFront.forEach(elm => {

            elm.spriteChangeTime = .1
            if (this.time.framesCount % (this.time.FPS * elm.spriteChangeTime) === 0) {

                if (elm.image.frameIndex === elm.image.frames - 1) {
                    elm.image.frameIndex = 0

                } else {
                    elm.image.frameIndex += 1
                }
            }


            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.image.frameIndex * Math.floor(elm.image.imageInstance.width / elm.image.frames),
                elm.image.rowIndex * Math.floor(elm.image.imageInstance.height / elm.image.rows),
                Math.floor(elm.image.imageInstance.width / elm.image.frames),
                Math.floor(elm.image.imageInstance.height / elm.image.rows),
                elm.position.x,
                elm.position.y,
                elm.size.width,
                elm.size.height
            )

        })

    },

    drawCars(){
        this.cars.forEach(elm => {

            this.ctx.drawImage(
                elm.image.imageInstance,
                elm.position.x,
                elm.position.y
            )
        })


    },

    drawGameOver() {

        if (this.isGameOver) {

            this.ctx.drawImage(this.background.gameOver.imageInstance, 0, 0, this.canvas.size.width, this.canvas.size.height)

        }


    },

    animateDead() {

        this.player.isShooting = false
        this.player.forces.totalForce = 0 - this.player.forces.gravityForce

        this.audio.track.shotsSong.pause()

    },


    //----- GAME OVER -----

    gameOver() {
        //SAVE DATA
        save_data(this.transaction.hash)
        this.activateGameOver=true

        setTimeout(() => {
            this.isPlaying = false
            this.isGameOver = true
            this.arenaMenu = this.arenaMenu.bind(this)
            this.canvas.obejectInDOM.addEventListener('click', this.arenaMenu)
            // We stop the automatic creation
            clearTimeout(this.timeOuts.rockets)
            clearTimeout(this.timeOuts.coins)
            clearTimeout(this.timeOuts.walkers)
            clearTimeout(this.timeOuts.obstacles)
            clearTimeout(this.timeOuts.cars)

            // We empty all the arrays
            this.rocketWarnings = []
            this.rockets = []
            this.coins = []
            this.walkersBack = []
            this.walkersFront = []
            this.obstacles = []
            this.cars = []
            //transaction_empty

        }, 3000)

    },

    //----- LOADING SCREEN -----

    loadingScreen() {
        this.isLoading = true
    },



    //----- SCORE SYSTEM -----
    addPoints() {
        this.collectedCoins++
    },

    change_speed() {
        this.player.speedX = this.player.speedX + (0.002)
    },

    addDistance() {
        this.distanceDone = this.distanceDone + (this.player.speedX / 30)

        switch (Math.floor(this.distanceDone)) {
            case 300:
                // from 300 meters, the number of rockets begins to become crazy
                this.rocketsRandomTime.minTime = 1 //todo: la cause du bug : .2
                this.rocketsRandomTime.maxTime = 5 //todo: la cause du bug : .5

                break;

            case Game.canvas.height:
                this.rocketsRandomTime.minTime = this.rocketsRandomTime.minInicial
                this.rocketsRandomTime.maxTime = this.rocketsRandomTime.maxInicial

            default:
                break;
        }
    },

    //----- AUDIOS -----

    initiateAudio() {

        const tracksArray = Object.keys(this.audio.tracks)

        tracksArray.forEach(elm => {

            this.audio.tracks[elm].volume = this.audio.overallVolume

        })
        this.audio.tracks.runFloorSong.volume = .1
        this.audio.tracks.coinsSong.volume = .1
        this.audio.tracks.warningSong.volume = .1
        this.audio.tracks.truck.volume = .1

        this.audio.tracks.breakWallSong.play()

        setTimeout(() => {

        }, 1000)


    },

    playRunAudio() {

        this.audio.tracks.runFloorSong.play()

    },

    stopRunAudio() {

        this.audio.tracks.runFloorSong.pause()

    },



    //----- EVENT HANDLERS -----

    setEventHandlers() {

        // Controls
        window.onmousedown = (e) => {

            if (!this.player.isDead && this.isPlaying) {

                this.player.isShooting = true
                this.player.forces.totalForce = this.player.forces.shootingForce - this.gravityForce

                // We play the shot audio
                this.audio.tracks.shotsSong.play()

            }

        }

        window.onkeypress = (e) => {

            if (!this.player.isDead && this.isPlaying) {

                if (e.keyCode === this.keys.SPACE) {

                    this.player.isShooting = true
                    this.player.forces.totalForce = this.player.forces.shootingForce - this.gravityForce

                    // We play the shot audio
                    this.audio.tracks.shotsSong.play()

                }

            }
        }

        window.onmouseup = (e) => {

            this.player.isShooting = false
            this.player.forces.totalForce = 0 - this.player.forces.gravityForce

            this.audio.tracks.shotsSong.pause()

            this.player.fireTime = 0

        }

        window.onkeyup = (e) => {

            if (e.keyCode === this.keys.SPACE) {

                this.player.isShooting = false
                this.player.forces.totalForce = 0 - this.player.forces.gravityForce

                this.audio.tracks.shotsSong.pause()

            }

            this.player.fireTime = 0

        }



    },

    linearTransition(initialX, initialY, finalX, finalY, currentX) {

        const slope = (initialY - finalY) / (initialX - finalX)
        const n = initialY - (slope * initialX)

        return slope * currentX + n

    }
}
/**
 * event handler for choosing arena
 * @param event
 */
function checkArena(event)
{
    pos = MapClickPosToCanvas(event)
    Game.arenas.forEach(elem => {
        elem.onclick(pos.x, pos.y)
    })
}

function map(v,n1,n2,m1,m2){
    return (v-n1)/(n2-n1)*(m2-m1)+m1;
}
function isFullscreen()
{
    return !((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
        (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
        (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
        (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen));
}
function MapClickPosToCanvas(event){
    var x = event.offsetX
    var y = event.offsetY
    if (isFullscreen()){
        var element = event.target
        let br = element.getBoundingClientRect()
        let ratio = window.innerWidth/ Game.canvas.size.width;
        let offset = (window.innerHeight-(Game.canvas.size.height*ratio))/2;
        x = map(event.clientX-br.left,0,Game.canvas.size.width*ratio,0,element.width);
        y = map(event.clientY-br.top-offset,0,Game.canvas.size.height*ratio,0,element.height);

    }
    return {x: x, y:y}

}
function checkToolbar(event)
{
    pos = MapClickPosToCanvas(event)

    Game.toolbar.onclick(pos.x, pos.y)
}
function checkToolbarHover(event){
    pos = MapClickPosToCanvas(event)

    // if not on the help button we clear the help rendering
    if(!Game.toolbar.onmouseover(pos.x, pos.y) && Game.isHelpActive){
        Game.drawMenuBackground()
        Game.isHelpActive = false
    }

}


async function save_data(hash){
        const eth_address = Game.user.get("ethAddress");
        const object = Moralis.Object.extend(Game.transaction.arena)
        Game.player_data = new object()
        Game.player_data.setACL(new Moralis.ACL(Game.user))
        Game.player_data.set("points", Game.distanceDone + (5 * Game.collectedCoins))
        Game.player_data.set("address", eth_address)
        Game.player_data.set("hash", hash)
        Game.transaction = new Transaction()
        await Game.player_data.save(null, {useMasterKey:true})

}

async function get_winning(){
    var dict = [];
    const Value = Moralis.Object.extend("Winners")
    const query = new Moralis.Query(Value);
    const data = await query.find();
    try{
        for(var i = 0; i < data.length; i++){
            dict.push([i, data.at(i).attributes.address,data.at(i).attributes.score, data.at(i).attributes.money])
        }
        console.log(dict)
        return dict
    }
    catch (e) {
        console.log("error winners data")
    }
}
function rules_btn_handler()
{
    Game.canvas.obejectInDOM.removeEventListener('click', this.arenaMenu)
    Game.canvas.obejectInDOM.removeEventListener('click', checkArena)
    Game.canvas.obejectInDOM.removeEventListener('click', checkToolbar)
    Game.canvas.obejectInDOM.removeEventListener('mousemove', checkToolbarHover)
    Game.inArenaMenu = false
    Game.drawGameExplanation()
}
function help_btn_handler(){
    Game.isHelpActive = true
    Game.drawHelpExplanation()
}

function update_btn_handler(){
    Game.arenas.forEach(elem => {
        elem.playersIn = undefined
    })
    Game.drawMenuBackground()

}
function full_screen_handler(){
    var docElm = document.querySelector('#my-canvas');

    if (!isFullscreen()) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

}
async function ranking_btn_handler(){
    Game.canvas.obejectInDOM.removeEventListener('click', this.arenaMenu)
    Game.canvas.obejectInDOM.removeEventListener('click', checkArena)
    Game.canvas.obejectInDOM.removeEventListener('click', checkToolbar)
    Game.canvas.obejectInDOM.removeEventListener('mousemove', checkToolbarHover)
    Game.inArenaMenu = false

    // not available in full screen
    if (isFullscreen()){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }}


    // get data
    console.log('ranking')
    var winners = await get_winning()
    console.log('retrieved data')



    // Drawing bg
    Game.ctx.clearRect(0, 0, Game.canvas.size.width, Game.canvas.size.height);
    // Game.ctx.drawImage(Game.background.rank.imageInstance, 0, 0, Game.canvas.size.width, Game.canvas.size.height)
    Game.ctx.fillStyle = "orange";
    Game.ctx.fillRect(0, 0, Game.canvas.size.width, Game.canvas.size.height);
    Game.ctx.fillStyle = "#040331";
    Game.ctx.fillRect(0, 0, Game.canvas.size.width, Game.canvas.size.height / 7);

    Game.ctx.font = 'italic bold 50px arial,serif'
    Game.ctx.fillStyle = 'orange'
    Game.ctx.fillText('Ranking', 500, 70)
    Game.ctx.lineWidth = 2
    Game.ctx.strokeText('Ranking', 500, 70)


    // winners =[['1', 'dddfssc', '5'], ['2', 'fejfbhsjcj', '10'], ['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],
    // ['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],
    // ['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],['3', 'ncdichie', -40],
    // ['3', 'ncdichie', -40],['3', 'ncdichie', -40]]

    // creating a table div
    var new_table = document.createElement('table')
    new_table.setAttribute('id', 'my-table')
    new_table.setAttribute('class', 'display')
    var currentDiv = document.getElementById('table-div');
    currentDiv.appendChild(new_table)

    // creation of the table
    $(document).ready(function() {
        var t = $('#my-table').DataTable( {
            data: winners,
            "bLengthChange": false,
            "aoColumnDefs": [
                { 'bSortable': false, 'aTargets': [ 0 ] }
            ],
            "order": [[ 3, "desc" ]],
            columns: [
                {title: 'Rank'},
                { title: "Adress" },
                { title: "Score" },
                { title: "Balance" },
            ]
        } );
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            } );
        } ).draw();
    } );

    // adding back button
    Game.ctx.font = 'italic bold 30px arial,serif'
    Game.bck_btn = new Button(560, 630, 100, 50, Game, undefined, undefined, back_tbn_handler,undefined, undefined)
    Game.bck_btn.draw('Back')
    Game.canvas.obejectInDOM.addEventListener('click', back_tbn_handler)

}

function back_tbn_handler(event){
    pos = MapClickPosToCanvas(event)
    if(Game.bck_btn.onclick(pos.x, pos.y)){

        //delete table
        var parent = document.getElementById('table-div')
        while( parent.lastElementChild){
            parent.removeChild(parent.lastElementChild)
        }
        Game.bck_btn = undefined

        // back to arena menu
        Game.arenaMenu()
        console.log('click on back')
        Game.canvas.obejectInDOM.removeEventListener('click', back_tbn_handler)
    }
}

function iotex_btn_handler(){
    window.open("https://iotexscan.io/token/0x838403e073a79719a0927a16642ca7dcdc642bd5#token_transfer", '_blank')
}