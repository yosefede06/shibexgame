// Obstacles images
const imageSmallVerticalObstacle = './images/shibexObstacle1.png';
const imageSmallHorizontalObstacle = './images/shibexObstacle2.png';
const imageLargeVerticalObstacle = './images/shibexObstacle3.png';
const imageLargeHorizontalObstacle = './images/shibexObstacle4.png';
const imageDiagonalAscendingObstacle = './images/shibexObstacle5.png';
const imageDiagonalDescendingObstacle = './images/shibexObstacle6.png';

// Obstacles index
const smallVerticalObstacle = 0;
const smallHorizontalObstacle = 1;
const LargeVerticalObstacle = 2;
const LargeHorizontalObstacle = 3;
const diagonalAscendingObstacle = 4;
const diagonalDescendingObstacle = 5;

/**
 * This class implements the zappers
 */
class Obstacle {
    /**
     * The constructor of the class
     * @param canvas the canvas where the obstacle will be
     * @param FPS frame rate
     */
    constructor(canvas, FPS) {
        this.canvas = canvas
        this.FPS = FPS

        // 0: small Vertical | 1: small horizontal | 2: large vertical | 3: large horizontal
        this.obstacleType = undefined

        this.position = {
            x: canvas.size.width,
            y: (canvas.size.height / 2) - 20
        }

        this.size = {
            width: undefined,
            height: undefined
        }

        this.image = {
            imageInstance: undefined,
            imageSmallVerticalPath: imageSmallVerticalObstacle,
            imageSmallHorizontalPath: imageSmallHorizontalObstacle,
            imageLargeVerticalPath: imageLargeVerticalObstacle,
            imageLargeHorizontalPath: imageLargeHorizontalObstacle,
            imageDiagonalAscendingPath: imageDiagonalAscendingObstacle,
            imageDiagonalDescendingPath: imageDiagonalDescendingObstacle
        }

        this.collisionMargin = 40 //todo: avant ct 40
        this.init()
    }

    /**
     * This method initializes the obstacle image on the window
     */
    init() {
        // we pick at random an obstacle in the list
        this.obstacleType = Math.floor(Math.random() * 6) // before it was 4
        this.image.imageInstance = new Image()

        let minPosY = undefined
        let maxPosY = undefined
        let randomPosY = undefined

        // We choose the imagePath depending on what random value we have (0, 1, 2, 3)
        switch (this.obstacleType) {
            case smallVerticalObstacle:
                this.image.imageInstance.src = this.image.imageSmallVerticalPath //imageSmallVertical
                this.size.width = 60
                this.size.height = 150
                minPosY = 70
                maxPosY = this.canvas.size.height - 210
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                this.position.y = randomPosY
                break;

            case smallHorizontalObstacle:
                this.image.imageInstance.src = this.image.imageSmallHorizontalPath  //imageSmallHorizontal
                this.size.width = 150
                this.size.height = 60
                minPosY = 70
                maxPosY = this.canvas.size.height - 110
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                this.position.y = randomPosY
                break;

            case LargeVerticalObstacle:
                this.image.imageInstance.src = this.image.imageLargeVerticalPath    //imageLargeVertical
                this.size.width = 60
                this.size.height = 225
                minPosY = 70
                maxPosY = this.canvas.size.height - 280
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                this.position.y = randomPosY
                break;

            case LargeHorizontalObstacle:
                this.image.imageInstance.src = this.image.imageLargeHorizontalPath  //imageLargeHorizontal
                this.size.width = 225
                this.size.height = 60
                minPosY = 70
                maxPosY = this.canvas.size.height - 110
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                this.position.y = randomPosY
                break;

            case diagonalAscendingObstacle:
                this.image.imageInstance.src = this.image.imageDiagonalAscendingPath  //imageDiagonalAscending
                this.size.width = 159
                this.size.height = 159
                minPosY = 130
                maxPosY = this.canvas.size.height - 95
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                break;

            case diagonalDescendingObstacle:
                this.image.imageInstance.src = this.image.imageDiagonalDescendingPath  //imageDiagonalDesending
                this.size.width = 159
                this.size.height = 159
                minPosY = 70
                maxPosY = this.canvas.size.height - 160
                randomPosY = Math.floor(Math.random() * (maxPosY - minPosY)) + minPosY
                break;

            default:
                break;
        }
    }

    /**
     * This function make the obstacle move with the background according to
     * the speed of the player
     * @param playerSpeed the player's speed
     */
    move(playerSpeed) {
        this.position.x -= playerSpeed
    }

    isTouching(minX, minY, maxX, maxY) {
        return (minX < this.position.x + this.size.width && maxX > this.position.x
            && minY < this.position.y + this.size.height && maxY > this.position.y)

    }
}
