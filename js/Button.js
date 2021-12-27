class Button {
    constructor(name, x, y, width, height, img, imgHovering, fn, fn_args, price, price_draw, capacity) {
        this.name = name
        this.capacity = capacity
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //TODO update for last version with images
        // this.imageInstance = new Image()
        // this.imageInstance.src = img
        this.imgHovering = imgHovering;
        this.fn = fn;
        this.fn_args = fn_args;
        this.price = price;
        this.price_draw = price_draw
    }
}
Button.prototype.onclick = function(mousex, mousey){
    if ( this.x <= mousex && mousex <= this.x + this.width && this.y <= mousey && mousey <= this.y + this.height){
        this.fn(this.fn_args, this.price)

    }
}