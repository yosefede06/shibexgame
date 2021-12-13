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
    Game.start()
}

/**
 * change the main bg img
 * @param img_path path to a new bg image
 */
function updateMainBackground(img_path)
{
    Game.background.left.imageInstance.src = img_path
    Game.background.right.imageInstance.src = img_path;
    Game.canvas.obejectInDOM.removeEventListener('click', checkArena)
}
window.onload = function () {

    document.getElementById("start-button").onclick = function () {

        document.getElementById("start-button").disabled = true

    };

    document.getElementById('my-canvas').onclick = function (event) {
        document.getElementById("start-button").disabled = true

        if (!Game.isPlaying) {
            Game.startMenu()
        }
    };

    Game.init()
    document.getElementById('my-canvas').style.opacity = 1

}

