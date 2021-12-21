
const gameName = 'ShibexRide';
const authors = 'Shibex Team';
const version = '1.0.0';
const description = 'Go through the longest distance you can';

const canvasWidth = 1080 * 1.156; //900
const canvasHeight = 600 * 1.156; //500

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
            width: canvasWidth,
            height: canvasHeight
        },
        baseLine: baseLine,
        highLine: highLine,

        obejectInDOM: undefined
    },

    ctx: undefined,
    isPlaying: false,
    isLoading: false,
    isGameOver: false,

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

    arenaButtons :[],

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
    //transaction
    user: undefined,
    transactionValue: undefined,
    player_data: undefined,
    arena_chosed: undefined,
    hash: undefined,
    transaction: undefined,
    chain: undefined,
    transaction_in_proccess: false,

    //----- INITIALIZE METHODS -----

    init() {

        this.setCanvasDimensions()
        this.ctx = this.canvas.obejectInDOM.getContext('2d')

        // init Menu Buttons
        this.initButtons()

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
        transaction_in_proccess = false
        this.isGameOver = false
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



    startMenu()
    {
        // start menu where we choose the arena
        this.canvas.obejectInDOM.addEventListener('click', checkArena)
        this.drawMenuBackground();
    },


    initButtons()
    {
        // here we can add a button for each arena
        var button1 = new Button(120, 310, 80, 100, 'images/tmp_button.png', 'images/tmp_button.png', updateMainBackground,'images/bgVolcan.jpg', '1')
        var button2 = new Button(430, 310, 80, 100, 'images/tmp_button.png', 'images/tmp_button.png', updateMainBackground,'images/ice.jpg', '10')
        var button3 = new Button(750, 300, 80, 100, 'images/tmp_button.png', 'images/tmp_button.png', updateMainBackground,'images/new_desert.png', '100')
        var button4 = new Button(1050, 300, 80, 100, 'images/tmp_button.png', 'images/tmp_button.png', updateMainBackground,'images/night.jpg', '1000')
        this.arenaButtons.push(button1)
        this.arenaButtons.push(button2)
        this.arenaButtons.push(button3)
        this.arenaButtons.push(button4)
    },
    start() {
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
                    // if here the coins is touching the obstacle we want to change the Y position
                    console.log("TOUCHINGGG")
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
                console.log("TOUCHINg")
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

//            this.destroyCar(elm)
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

    drawMenuBackground(){
        this.ctx.drawImage(this.background.menu.imageInstance, 0,  0, this.canvas.size.width, this.canvas.size.height)

        //TODO for now buttons are incrusted in background
        // draw each buttons
        // for (let i = 0; i< this.arenaButtons.length; i++){
        //     var elm = this.arenaButtons[i]
        //     this.ctx.drawImage(elm.imageInstance, elm.x, elm.y, elm.width, elm.height)
        // }
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
        save_data()
        this.isGameOver = true
        setTimeout(() => {

            this.isPlaying = false

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

        }, 1000)

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

            case canvasHeight:
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

        window.onkeyup = (e) => {

            if (e.keyCode === this.keys.SPACE) {

                this.player.isShooting = false
                this.player.forces.totalForce = 0 - this.player.forces.gravityForce

                this.audio.tracks.shotsSong.pause()

            }

            this.player.fireTime = 0

        }

        // Image loading
        this.background.initial.imageInstance.onload = () => {

            this.drawInitialBackground()

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
    console.log(event.offsetX, event.offsetY)
    Game.arenaButtons.forEach(elem => {
        elem.onclick(event.offsetX, event.offsetY)
    })
}

/**
 * change the main bg img
 * @param img_path path to a new bg image
 */
async function updateMainBackground(img_path, price)
{
    Game.chain = await check_iotex_chain()
    if(!Game.chain){
        window.alert("Connect to IoTeX chain")
        add_iotex_chain()
    }
    else if(Game.transaction_in_proccess){
        return false
    }
    else{
        Game.background.left.imageInstance.src = img_path
        Game.background.right.imageInstance.src = img_path;
        Game.canvas.obejectInDOM.removeEventListener('click', checkArena)
        try{
            if(img_path == 'images/bgVolcan.jpg'){
                    Game.arena_chosed = "Lava"
                    transaction(price)
            }
            if(img_path == 'images/ice.jpg') {
                    Game.arena_chosed = "Ice"
                    transaction(price)
            }
            if(img_path == 'images/new_desert.png'){
                    Game.arena_chosed = "Desert"
                    transaction(price)
            }
            if(img_path == 'images/night.jpg') {
                    Game.arena_chosed = "Night"
                    transaction(price)
            }
        }
        catch{
            Game.canvas.obejectInDOM.addEventListener('click', checkArena)
            console.log("error transaction img_path")
        }
        Game.canvas.obejectInDOM.removeEventListener('click', checkArena)
    }
}

async function transaction(price){
    Game.transaction_in_proccess = true;
    console.log("transaction request");
    const options = {type: "erc20",
        amount: Moralis.Units.Token(price, "18"),
        receiver: "0x7D690B97cc136c27dbBF6581D23740977FaD1659",
        contractAddress: "0x838403e073a79719a0927a16642ca7dcdc642bd5",
        awaitReceipt: false
    }
    let result = await Moralis.transfer(options)
    result.on("transactionHash", function(hash){
        Game.hash = hash;
    });
    result.on("receipt", function(receipt) {
        Moralis.web3.eth.getTransaction(Game.hash).then(function(transaction){
            // wait_transaction_receipt()
            Game.transaction = transaction;
            if(Game.transaction.from.toUpperCase() == Game.user.get("ethAddress").toUpperCase()){
                Game.transaction_in_proccess = false
                Game.start();
            }
            else{
                console.log("error with transaction")
            }
        });
    })
    .on("error", (error) => {
        window.alert("transaction denied")
        Game.transaction_in_proccess = false
    });

}
// async function wait_transaction_receipt(){
//
// }
async function save_data(){
    const eth_address = Game.user.get("ethAddress");
    const object = Moralis.Object.extend(Game.arena_chosed)
    Game.player_data = new object()
    Game.player_data.setACL(new Moralis.ACL(Game.user))
    Game.player_data.set("points", Game.distanceDone + (5 * Game.collectedCoins))
    Game.player_data.set("address", eth_address)
    await Game.player_data.save()
}

async function check_iotex_chain(){
    const provider = await detectEthereumProvider()
    if (provider) {
        const chainId = await provider.request({
            method: 'eth_chainId'
        })
        if("0x1251" == chainId){
            return true;
        }
        else{
            return false
        }
    } else {
        console.log("not connected to metamask")
        return false
    }
}


// const Monster = Moralis.Object.extend("Desert");
// const query = new Moralis.Query(Monster);
//
// //get monster with id xWMyZ4YEGZ
// query.get("gHSol8elGGeC8b4ZLrEMgINo")
//     .then((monster) => {
//         console.log(monster.set("hello", 80))
//         monster.save()}, (error) => {
//         // The object was not retrieved successfully.
//         // error is a Moralis.Error with an error code and message.
//     });



