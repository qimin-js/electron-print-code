var up = JSON.parse(localStorage.getItem('up'));
var down = JSON.parse(localStorage.getItem('down'));
var left = JSON.parse(localStorage.getItem('left'));
var right = JSON.parse(localStorage.getItem('right'));
var up_left = JSON.parse(localStorage.getItem('up_left'));
var up_right = JSON.parse(localStorage.getItem('up_right'));
var down_left = JSON.parse(localStorage.getItem('down_left'));
var down_right = JSON.parse(localStorage.getItem('down_right'));
var line_color_loc = JSON.parse(localStorage.getItem('line_color'));
var stop_btn = JSON.parse(localStorage.getItem('stop_btn'));
// save_data();
function save_data () {
    localStorage.setItem('up', JSON.stringify(up))
    localStorage.setItem('down', JSON.stringify(down))
    localStorage.setItem('left', JSON.stringify(left))
    localStorage.setItem('right', JSON.stringify(right))
    localStorage.setItem('up_right', JSON.stringify(up_right))
    localStorage.setItem('up_left', JSON.stringify(up_left))
    localStorage.setItem('down_right', JSON.stringify(down_right))
    localStorage.setItem('down_left', JSON.stringify(down_left))
    localStorage.setItem('line_color', JSON.stringify(line_color_loc))
    localStorage.setItem('stop_btn', JSON.stringify(stop_btn))
}
function read_data () {
    up = JSON.parse(localStorage.getItem('up'));
    down = JSON.parse(localStorage.getItem('down'));
    left = JSON.parse(localStorage.getItem('left'));
    right = JSON.parse(localStorage.getItem('right'));
    up_left = JSON.parse(localStorage.getItem('up_left'));
    up_right = JSON.parse(localStorage.getItem('up_right'));
    down_left = JSON.parse(localStorage.getItem('down_left'));
    down_right = JSON.parse(localStorage.getItem('down_right'));
    stop_btn = JSON.parse(localStorage.getItem('stop_btn'));
}