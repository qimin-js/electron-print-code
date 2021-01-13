var can_x = 10,
    can_y = 10,
    that;
var start_one = 0;
class Point {
    constructor() {
        that = this;
        this.can = jk('canvas')[0];
        this.ctx = can.getContext('2d');
        this.can.height = 706;
        this.can.width = 585;
        this.can_x = 0;
        this.can_y = 0;
        this.one_width = 35;
    }
    init () {//为了解决重绘
        canvas.ctx.lineWidth = 5;
        canvas.ctx.strokeStyle = 'orange';
        canvas.ctx.lineCap = 'round';
        canvas.ctx.lineJoin = 'round';
        canvas.ctx.fillStyle = 'white';
        //canvas.ctx.globalCompositeOperation = 'lighter';
    }
    run () {
        jk(window).on('keydown', that.key_fn)
    }
    close () {
        jk(window).off('keydown');
        jk(window).off('keyup');
    }
    moveTo_xy (x, y) {
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(x, y);
    }
    lineTo (x, y) {
        canvas.ctx.lineTo(x, y);
        that.ctx.stroke();
    }
    clear_path () {
        canvas.ctx.clearPath();
    }
    clear_screen () {//清理屏幕
        canvas.ctx.fillStyle = 'white';
        canvas.ctx.fillRect(0, 0, canvas.can.width, canvas.can.height)
        canvas.ctx.fill();
    }
    move_to () {
        that.ctx.beginPath();
        that.ctx.moveTo(can_x, can_y);
    }
    line () {
        jk(window).one('keyup', function () {
            can_x += that.can_x;
            can_y += that.can_y;
            if (can_x >= canvas.can.width) can_x = canvas.can.width;
            if (can_x <= 0) can_x = 0;
            if (can_y >= canvas.can.height) can_y = canvas.can.height;
            if (can_y <= 0) can_y = 0;
            that.ctx.lineTo(can_x, can_y);
            that.ctx.stroke();
            that.can_x == -that.one_width && that.can_y == 0 && that.code_left();
            that.can_x == that.one_width && that.can_y == 0 && that.code_right();
            that.can_y == -that.one_width && that.can_x == 0 && that.code_up();
            that.can_y == that.one_width && that.can_x == 0 && that.code_down();
            that.can_x == -that.one_width && that.can_y == -that.one_width && that.code_up_left();//左上
            that.can_x == that.one_width && that.can_y == that.one_width && that.code_down_right();//右下
            that.can_y == -that.one_width && that.can_x == that.one_width && that.code_up_right();//右上
            that.can_y == that.one_width && that.can_x == -that.one_width && that.code_down_left();//左下
        })
    }
    change (z, h) {
        that.move_to();
        z == "can_x" ? that.can_x = h : that.can_y = h;
        that.line();
    }
    key_fn (e) {
        e.keyCode == 87 && that.change('can_y', -that.one_width); //w
        e.keyCode == 83 && that.change('can_y', that.one_width); //s
        e.keyCode == 65 && that.change('can_x', -that.one_width); //a
        e.keyCode == 68 && that.change('can_x', that.one_width); //d
        console.log(can_x, can_y);
        jk(window).one('keyup', function () {
            that.ctx.beginPath();
            that.can_x = 0;
            that.can_y = 0;
        })
    }
    code_left () {
        jk('.code_area').append('<div class="code_data">' + left + '</div>');//左
        can_x -= 5;
    }
    code_right () {
        jk('.code_area').append('<div class="code_data">' + right + '</div>');//右
        can_x += 5;
        console.log('left');
    }
    code_up () {
        jk('.code_area').append('<div class="code_data">' + up + '</div>');//上
        can_y -= 5;
    }
    code_down () {
        jk('.code_area').append('<div class="code_data">' + down + '</div>');//下
        can_y += 5;
    }
    code_up_right () {
        jk('.code_area').append('<div class="code_data">' + up_right + '</div>')//右上
        can_x += 5;
        can_y -= 5;
    }
    code_up_left () {
        jk('.code_area').append('<div class="code_data">' + up_left + '</div>')//左上
        can_x -= 5;
        can_y -= 5;
    }
    code_down_right () {
        jk('.code_area').append('<div class="code_data">' + down_right + '</div>')//右下
        can_x += 5;
        can_y += 5;
    }
    code_down_left () {
        jk('.code_area').append('<div class="code_data">' + down_right + '</div>')//左下
        can_x -= 5;
        can_y += 5;
    }
}
