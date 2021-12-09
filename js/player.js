const playerSizeWidth = 180; //100
const playerSizeHeight = 100; //54

const shootingForce = 0.8;

const playerImage = './images/shibex_ride_2.png';
const gunFireImage = './images/gunfire.png';
const playerDeadImage = './images/playerdeadShibex2.png';
const playerElectricImage = './images/electrocutedplayerShibex.png';

class JoyRoide {
    /**
     * The constructor of the Shibex player
     * @param canvas the canvas that fills the player
     * @param ctx
     * @param gameCtx
     * @param FPS
     * @param highLine
     * @param gravityForce the gravity force that works on the player
     */
    constructor(canvas, ctx, gameCtx, FPS, highLine, gravityForce) {

        // Canvas
        this.canvas = canvas
        this.ctx = ctx
        this.gameCtx = gameCtx

        // Measurement
        this.position = {
            x: canvas.size.width / 5,
            y: this.canvas.baseLine,
            initialPosY: this.canvas.baseLine,
            maxPosY: highLine
        }

        this.size = { //120, 100
            width: playerSizeWidth,
            height: playerSizeHeight,
            collisionWidth: undefined,
            collisionHeight: undefined
        }

        this.isTouchingFloor = true
        this.isTouchingRoof = false

        // Physics
        this.speedX = undefined
        this.speedY = 0
        this.shockingSpeedY = 5
        this.initialSpeedX = 7

        this.forces = {
            gravityForce: gravityForce,
            shootingForce: shootingForce,
            totalForce: this.gravityForce
        }

        this.isShooting = false

        this.gunFire = {

            position: {
                x: undefined,
                y: undefined,
                initialX: -7,
                initialY: 45,
                deadBaseLine: undefined
            },

            size: {
                width: 100, //120
                height: 54 //100
            }

        }

        this.isShocking = false
        this.isDead = false

        // Time
        this.FPS = FPS

        // Image
        this.image = {
            player: {
                imageInstance: undefined,
                imagePath: playerImage,
                rows: 2,
                rowIndex: 0,
                frames: 4,
                frameIndex: 0,
            },

            gunFire: {
                imageInstance: undefined,
                imagePath: gunFireImage,
                frames: 4,
                frameIndex: 0,
            },

            playerDead: {
                imageInstance: undefined,
                imagePath: playerDeadImage,
            },

            playerElectric: {
                imageInstance: undefined,
                imagePath: playerElectricImage
            }
        }

        this.spriteChangeTime = .1
        this.bullets = []
        this.explodedBullets = []
        this.bulletShells = []
        this.fireFrequency = 5
        this.fireTime = 0
        this.init()
    }

    /**
     * Initialize all the player properties
     */
    init() {
        // We instantiate the player image
        this.image.player.imageInstance = new Image()
        this.image.player.imageInstance.src = this.image.player.imagePath

        // We instantiate the gunfire image
        this.image.gunFire.imageInstance = new Image()
        this.image.gunFire.imageInstance.src = this.image.gunFire.imagePath

        // We instantiate the playerdead image
        this.image.playerDead.imageInstance = new Image()
        this.image.playerDead.imageInstance.src = this.image.playerDead.imagePath

        // We instantiate the playerelectrocuted image
        this.image.playerElectric.imageInstance = new Image()
        this.image.playerElectric.imageInstance.src = this.image.playerElectric.imagePath

        // We set player speed
        this.speedX = this.initialSpeedX

        // We set the gunfire size
        this.gunFire.position.y = this.position.y + this.gunFire.position.initialY
        this.gunFire.position.x = this.position.x + this.gunFire.position.initialX

        // Collision values
        this.size.collisionWidth = this.size.width / this.image.player.frames
        this.size.collisionHeight = this.size.height / this.image.player.rows

        // Dead baseLine
        this.position.deadBaseLine = this.canvas.baseLine + 30
    }

    /**
     * Make the player move
     */
    move() {

        // If is shocking
        if (this.isShocking) {
            this.speedX = 0
            return
        }

        // For sliding when is dead in the floor
        if (this.isDead && this.isTouchingFloor) {
            if (this.speedX <= 0) {
                this.speedX = 0
                this.gameCtx.gameOver()

            } else {
                this.speedX -= 0.1 // to make him fall naturally
            }
        }

        // If is shooting and is already touching the roof
        if (this.isShooting && this.isTouchingRoof) {
            this.position.y = this.position.maxPosY

        } else if (!this.isShooting && this.isTouchingFloor) {  // If is not shooting and already touching the floor

            if (!this.isDead) {
                this.position.y = this.position.initialPosY

            } else {
                this.position.deadBaseLine
            }

        } else {
            this.speedY = this.speedY + this.forces.totalForce
            this.position.y = this.position.y - this.speedY + (this.forces.totalForce) / 2
        }

        this.gunFire.position.y = this.position.y + this.gunFire.position.initialY
    }

    /**
     * Creates a new bullet and its shell
     */
    shoot() {
        const newBullet = new Bullet(this.canvas, this.ctx, this.FPS, this.position, this.gameCtx)
        this.gameCtx.bullets.push(newBullet)

        const newShell = new BulletShell(this.canvas, this.ctx, this.FPS, this.position, this.gameCtx)
        this.gameCtx.bulletShells.push(newShell)
    }


    /**
     * Called when the player is electrified
     */
    shock() {
        this.gameCtx.audio.tracks.electricitySong.play()
        this.isShocking = true

        setTimeout(() => { //todo: static ?
            //this.speedY = this.shockingSpeedY
            this.isShocking = false
            this.speedX = this.initialSpeedX
            this.speedY = this.shockingSpeedY
            this.die()
        }, 200)
    }

    /**
     * Called when the player dies
     */
    die() {
        this.isShooting = false
        this.isDead = true
        this.forces.totalForce = 0 - this.forces.gravityForce
        this.gameCtx.audio.tracks.shotsSong.pause()
    }

}