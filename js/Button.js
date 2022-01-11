class Button {
    constructor(x, y, width, height, gctx, img, imgHovering, fn, fn_args) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gctx = gctx
        this.ctx = this.gctx.ctx
        if (img !== undefined) {
            this.imageInstance = new Image()
            this.imageInstance.src = img
        }
        else
        {
            this.imageInstance = undefined
        }

        this.imgHovering = imgHovering;
        this.fn = fn;
        this.fn_args = fn_args;
    }
    draw(text)
    {
        if (this.imageInstance === undefined) {
            var colors = {
                top: '#040331',
                bottom: '#084D79'}
            var halfH = this.height / 2;

            // button
            this.ctx.fillStyle = colors.top;
            this.ctx.fillRect(this.x, this.y, this.width, halfH);
            this.ctx.fillStyle = colors.bottom;
            this.ctx.fillRect(this.x, this.y + halfH, this.width, halfH);

            // text
            var size = this.ctx.measureText(text);
            var x = this.x + (this.width - size.width) / 2;
            var y = this.y + (this.height - 15) / 2 + 12;

            this.ctx.fillStyle = '#FFF';
            this.ctx.fillText(text, x, y);

        }

    }
}

Button.prototype.onclick = function(mousex, mousey){
    return this.x <= mousex && mousex <= this.x + this.width && this.y <= mousey && mousey <= this.y + this.height;

}