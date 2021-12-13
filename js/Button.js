class Button {
    constructor(x, y, width, height, img, imgHovering, fn, fn_args) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.imageInstance = new Image()
        this.imageInstance.src = img
        this.imgHovering = imgHovering;
        this.fn = fn;
        this.fn_args = fn_args;
    }
}
Button.prototype.onclick = function(mousex, mousey){
    if ( this.x <= mousex && mousex <= this.x + this.width && this.y <= mousey && mousey <= this.y + this.height){
        this.fn(this.fn_args)
    }
}