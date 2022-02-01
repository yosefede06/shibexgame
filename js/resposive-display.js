'use strict';

// Force landscape mode
function lockLandscapeDisp(){
    let de = document.documentElement;
    if( de.requestFullscreen) { de.requestFullscreen();}
    else if (de.mozRequestFullscreen) {de.mozRequestFullscreen();}
    else if (de.webkitRequestFullscreen) {de.webkitRequestFullscreen();}
    else if (de.msRequestFullscreen) {de.msRequestFullscreen();}
    screen.orientation.lock('landscape');
    console.log('lock')
}