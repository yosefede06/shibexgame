// const rocketSpeed = 20;
// const bulletImage = './images/bullet.png';
// const bulletImpactImage = './images/bullet-impact.png';
// const bulletHeight = 70;
// const bulletWidth = 10;
// const explosionWidth = 50;
// const explosionHeight = 50;
//
// const timeoutBulletDestruction = 100;
// const timeoutBulletExplosion = 50;
class Bullet {

    constructor(canvas, ctx, FPS, playerPos, gameCtx) {

        this.canvas = canvas
        this.ctx = ctx
        this.gameCtx = gameCtx

        this.position = {
            x: playerPos.x -30,
            y: playerPos.y -20
        }

        this.speed = 8
        this.FPS = FPS

        this.image = {

            shoot: {
                imageInstance: undefined,
                imageSource: './images/gunfire-ball.png',

                size: {
                    width: 100,
                    height: 100
                }
            },

            explosion: {
                imageInstance: undefined,
                imageSource: './images/bullet-impact.png',
                frames: 2,
                frameIndex: 0,

                size: {
                    width: 50,
                    height: 50
                }
            },

        }

        this.isExploding = false

        this.init()

    }

    init() {

        const offsetY = 10

        // We set a little offset for the bullets
        this.position.x = this.position.x

        // Image for the shoot
        this.image.shoot.imageInstance = new Image()
        this.image.shoot.imageInstance.src = this.image.shoot.imageSource

        // Image for the bullet impact
        this.image.explosion.imageInstance = new Image()
        this.image.explosion.imageInstance.src = this.image.explosion.imageSource

        // We set the current image
        this.image.current = this.image.shoot.imageInstance

        // We move it
        this.move()

    }

    move(playerSpeed) {

        if (!this.isExploding) {

            this.position.y += this.speed

        } else {

            const compesatedSpeed = ((60 / this.FPS) * playerSpeed)

            this.position.x -= compesatedSpeed

        }


    }

    explode() {

        // Change the sprite
        this.isExploding = true

        if (this.position.y > this.canvas.baseLine) {

            this.position.y = this.canvas.baseLine + 20

        } else {

            this.position.y += Math.random() * (35 - 25) + 20
        }

        this.position.x += Math.random() * (5 + 5) - 30

        setTimeout(() => {

            this.image.explosion.frameIndex = 1

            setTimeout(() => {

                this.gameCtx.destroyBullet(this)

            }, 100);

        }, 50);
    }

}