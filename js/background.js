// Images of Background
const imageBackGround = './images/bgVolcan.jpg';
const imageInitialBackGround = './images/initialBackgroundShibex.png';
const imageGameOver = './images/gameoverShibex.png';
const imageClosureIronUpYellow = './images/shibexUp.png';
const imageClosureIronDownYellow = './images/shibexDown.png';
const imageMenuBackground = './images/principal_arenas.png'
const imageGameExplanation = './images/game_explanation.jpeg'
const imageHelp = './images/help.png'

// Types of Background
const presentation_down = 'iron-down';
const presentation_up = 'iron-up';
const mainBg = 'main';
const initialBg = 'initial';
const gameOverBg = 'gameOver';
const closeState = 'close';
const menu = 'menu';
const game_explanation = 'game_explanation';
const help = 'help'

class Background {

    /**
     * Constructor of the Background
     * @param canvas the canvas that fills the background (dimensions)
     * @param ctx the game context
     * @param initialPosX the initial position on the x axis
     * @param FPS frame rate
     * @param backgroundType the type of the background
     * @param gameCtx
     */
    constructor(canvas, ctx, initialPosX, FPS, backgroundType = mainBg, gameCtx = null) {

        this.ctx = ctx
        this.gameCtx = gameCtx

        this.position = {
            x: initialPosX,
            y: 0
        }

        this.size = {
            width: canvas.size.width,
            height: canvas.size.height
        }

        this.FPS = FPS

        this.imageInstance = undefined
        this.imagePathMain = imageBackGround
        this.imagePathInitial = imageInitialBackGround
        this.imagePathGameOver = imageGameOver
        this.imagePathTransitionUp = imageClosureIronUpYellow
        this.imagePathTrasitionDown = imageClosureIronDownYellow
        this.imageMenuBackground = imageMenuBackground
        this.imageGameExplanation = imageGameExplanation
        this.imageHelp = imageHelp

        this.loadingTransitionTime = .5
        this.loadingTransitionWaitTime = 1.3
        this.loadingTransitionCurrentTime = 0
        this.loadingTransitionState = closeState
        this.backgroundType = backgroundType

        this.init()

    }

    /**
     * This function initializes the image of the background on the window of the website
     */
    init() {
        if (this.backgroundType === presentation_up || this.backgroundType === presentation_down) {
            this.size.height /= 2 // we only take the half image
            this.position.x = 0
        }

        this.imageInstance = new Image() // HTML image element
        // The switch gives to the imageInstance the source of all the images
        switch (this.backgroundType) {
            case mainBg:
                this.imageInstance.src = this.imagePathMain
                break;

            case initialBg:
                this.imageInstance.src = this.imagePathInitial
                break;

            case gameOverBg:
                this.imageInstance.src = this.imagePathGameOver
                break;

            case presentation_up:
                this.imageInstance.src = this.imagePathTransitionUp
                break;

            case presentation_down:
                this.imageInstance.src = this.imagePathTrasitionDown
                break;

            case menu:
                this.imageInstance.src = this.imageMenuBackground
                break;

            case game_explanation:
                this.imageInstance.src = this.imageGameExplanation
                break;

            case help:
                this.imageInstance.src = this.imageHelp
                break;

            default:
                break;
        }
    }

    /**
     * The goal of the function is to make the background move with the player
     * @param playerSpeed the player's speed
     */
    move(playerSpeed) {
        // Movement for regular background which allows the background to move
        if (this.backgroundType !== presentation_up && this.backgroundType !== presentation_down) {
            const compesatedSpeed = ((60 / this.FPS) * playerSpeed)
            this.position.x -= compesatedSpeed

        }
        else if (this.gameCtx.isLoading) { // Movement for transition screen

            const closeStartTime = 0
            const closeEndTime = this.loadingTransitionTime
            const waitStartTime = closeEndTime
            const waitEndTime = waitStartTime + this.loadingTransitionWaitTime
            const openStartTime = waitEndTime
            const openEndTime = openStartTime + this.loadingTransitionTime
            const currentTime = this.loadingTransitionCurrentTime

            let initialPosY = undefined
            let finalPosY = undefined

            if (currentTime < closeEndTime) { // Close animation
                if (this.backgroundType === presentation_up) {
                    initialPosY = -this.size.height
                    finalPosY = 0

                } else {
                    initialPosY = this.size.height * 2
                    finalPosY = this.size.height
                }

                this.position.y = this.gameCtx.linearTransition(closeStartTime, initialPosY, closeEndTime, finalPosY, currentTime)

            } else if (currentTime >= waitStartTime && currentTime <= waitEndTime) { // Waiting time

                if (this.backgroundType === presentation_up) {
                    this.position.y = 0

                } else {
                    this.position.y = this.size.height
                }

            } else if (currentTime < openEndTime) {         // Open animation
                this.gameCtx.isPlaying = true
                this.gameCtx.isGameOver = false

                if (this.backgroundType === presentation_up) {
                    initialPosY = 0
                    finalPosY = -this.size.height

                } else {
                    initialPosY = this.size.height
                    finalPosY = this.size.height * 2
                }

                this.position.y = this.gameCtx.linearTransition(openStartTime, initialPosY, openEndTime, finalPosY, currentTime)

            } else {
                if (this.backgroundType === presentation_up) {
                    this.position.y = -this.size.height

                } else {
                    this.position.y = this.size.height * 2
                }

                this.gameCtx.isLoading = false
                this.loadingTransitionState = closeState
                this.loadingTransitionCurrentTime = 0
                return

            }
            this.loadingTransitionCurrentTime += 1 / (this.loadingTransitionTime * 60)
        }


    }

}