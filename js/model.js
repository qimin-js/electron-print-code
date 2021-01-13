$('.output_btn').on('click', function () {
    modal_html_change();
    jk('#myModal').modal('show');//显示模态框
    modal_change_click('up_change', up);
    modal_change_click('down_change', down);
    modal_change_click('left_change', left);
    modal_change_click('right_change', right);
    modal_change_click('up_left_change', up_left);
    modal_change_click('up_right_change', up_right);
    modal_change_click('down_right_change', down_right);
    modal_change_click('down_left_change', down_left);
    modal_change_click('stop_btn_change', stop_btn);
    jk('#myModal').on('keydown', function (e) {
        save_data_modal(e);
        console.log('保存');
    })
})
function save_data_modal (e) {
    if (e.ctrlKey == true && e.keyCode == 83) {
        for (var i = 0; i < jk('textarea').length; i++) {
            var textarea_class_name = jk('textarea')[i].className;
            textarea_class_name = textarea_class_name.slice(0, textarea_class_name.length - 7);//去掉_change
            window[textarea_class_name] = jk('textarea')[0].value;//将字符串当变量名使用
        }
        console.log(textarea_class_name);
        save_data();
        read_data();
        modal_html_change();
        jk('#myModal').modal('show');//显示模态框
        jk('.modal-backdrop')[0].remove();//去掉第一个模态框的背景
    }
}
function modal_change_click (title, inner) {
    jk('.' + title + '').one('click', function () {
        jk(this).html(`<textarea class="${title}" cols="70" rows="12">${inner}</textarea>`)
    })
}
function modal_html_change () {
    jk('.model_area').html(`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"w键"}</h4>
            </div>
            <div class="modal-body up_change">${up}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"s键"}</h4>
            </div>
            <div class="modal-body down_change">${down}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"a键"}</h4>
            </div>
            <div class="modal-body left_change">${left}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"d键"}</h4>
            </div>
            <div class="modal-body right_change">${right}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"w+a键"}</h4>
            </div>
            <div class="modal-body up_left_change">${up_left}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"w+d键"}</h4>
            </div>
            <div class="modal-body up_right_change">${up_right}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"s+a键"}</h4>
            </div>
            <div class="modal-body down_left_change">${down_left}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"w+d键"}</h4>
            </div>
            <div class="modal-body down_right_change">${down_right}</div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">${"stop_btn按钮"}</h4>
            </div>
            <div class="modal-body stop_btn_change">${stop_btn}</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>`)
}

$('.color_btn').on('click', function (e) {
    jk('.model_area').html(`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">color</h4>
            </div>
            <div class="modal-body up_change">
                <button class="btn color_btn line_color_red" style="color:red;">red</button>
                <button class="btn color_btn line_color_white">white</button>
                <button class="btn color_btn line_color_blue" style="color:blue;">blue</button>
                <button class="btn color_btn line_color_black" style="color:black;">black</button>
                <button class="btn color_btn line_color_yellow">yellow</button>
                <button class="btn color_btn line_color_pink" style="color:pink;">pink</button>
                <button class="btn color_btn line_color_orange" style="color:orange;">orange</button>
            </div>
            <div class="modal-header">
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>`)
    jk('#myModal').modal('show');//显示模态框
    modal_line_color_change_click('line_color_red', 'red');
    modal_line_color_change_click('line_color_white', 'white');
    modal_line_color_change_click('line_color_blue', 'blue');
    modal_line_color_change_click('line_color_black', 'black');
    modal_line_color_change_click('line_color_yellow', 'yellow');
    modal_line_color_change_click('line_color_pink', 'pink');
    modal_line_color_change_click('line_color_orange', 'orange');
})
function modal_line_color_change_click (title, inner) {
    jk('.' + title + '').on('click', function () {
        localStorage.setItem('line_color', JSON.stringify(inner))
        line_color_loc = JSON.parse(localStorage.getItem('line_color'));
        canvas.ctx.strokeStyle = line_color_loc;
        console.log(inner);
    })
}
$('#help_btn').on('click', function (e) {
    jk('.model_area').html(`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">帮助信息</h4>
            </div>
            <div class="modal-body ">
                <div>欢迎使用本软件</div>
                <div>第一次使用本软件，请完整阅读帮助信息。</div>
                </br>
                <div>方向键：</div>
                <div>在点击开始按钮后，可以使用 w a s d 键进行操作。同时按住两个键可以斜方向前进</div>
                <div>坐标可以使用鼠标点击改变(会以小点的形式反应)</div>
                <div>停止键会输出stop_btn的代码</div>
                </br>
                <div>代码输出：</div>
                <div>上方的输出设置，记录有所有操作会输出的代码，要做出修改时只需鼠标点击即可将每一行要输出的代码以这种格式书写代码
                      结束后使用 Ctrl + s 进行保存(不会触发方向键 s 的效果)</div>
                </br>
                <div>颜色：</div>
                <div>只需点击颜色按钮一次即可</div>
                </br>
                <div>bug:</div>
                <div>有时会无法使用滚轮 在模态框旁边区域使用滚轮即可</div>
                <div>模态框点击旁边区域可以退出，但点击模态框下方是无法退出的</div>
                <div>有时图片会无法打开，因为图片路径有空格。</div>
                </br>
                <div>程序员 qimin</div>
            </div>
            <div class="modal-header">
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        </div>
    </div>
</div>`)
    jk('#myModal').modal('show');//显示模态框
})
$(document).on('shown.bs.modal', function (e) {
    canvas.close();//关闭canvas事件
    console.log('show model');
})
$(document).on('hidden.bs.modal', function (e) {
    canvas.run();
    console.log('hidden model');
})