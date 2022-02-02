'use strict';

// Force landscape screen positioning lock. Works only 
// with full screen mode such as tablets / mobile
function lockLandscapeDisp(){
    let de = document.documentElement;
    if( de.requestFullscreen) { de.requestFullscreen();}
    else if (de.mozRequestFullscreen) {de.mozRequestFullscreen();}
    else if (de.webkitRequestFullscreen) {de.webkitRequestFullscreen();}
    else if (de.msRequestFullscreen) {de.msRequestFullscreen();}
    screen.orientation.lock('landscape');
    console.log('locking screen at portrait mode - only if screen is at "full screen" mode')
}