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

