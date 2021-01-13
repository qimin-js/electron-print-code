var jk = jQuery.noConflict();
var canvas = new Point();
const fs = require('fs');// File对象 实例
const ipc = require('electron').ipcRenderer;
const { remote } = require('electron');
const { log } = require('console');
const { dialog } = require('electron').remote
console.log(canvas);
jk('#start_btn').on('click', function (e) {
    if (start_one == 1) return;
    canvas.init();
    canvas.run();
    start_one = 1;
    jk('#can').on('mousedown', function (e) {
        console.log(e.offsetX, e.offsetY);
        canvas.moveTo_xy(e.offsetX, e.offsetY);
        canvas.lineTo(e.offsetX, e.offsetY);
        can_x = e.offsetX;
        can_y = e.offsetY;
        jk('#can').on('mousemove', function (e) {
            console.log(e.offsetX, e.offsetY);
            canvas.lineTo(e.offsetX, e.offsetY);
            can_x = e.offsetX;
            can_y = e.offsetY;
        })
        jk('#can').on('mouseup', function (e) {
            jk('#can').off('mousemove');
        })
    })
})
jk(window).on('resize', function (e) {//浏览器改变大小时触发
    var imageData = canvas.ctx.getImageData(0, 0, jk('canvas')[0].width, jk('canvas')[0].height);// 保存当前图像   因为改变canvas的大小canvas会重绘
    console.log(canvas.can.offsetWidth, canvas.can.offsetHeight);
    canvas.can.width = canvas.can.offsetWidth;//改变canvas的大小  但canvas里面的像素不会等比例变化
    canvas.can.height = canvas.can.offsetHeight;
    canvas.ctx.putImageData(imageData, 0, 0);//绘制保存的图形
    canvas.init();//属性初始化
})
//图片拖动开始
const dragWrapper = document.getElementById("can");//获取div对象
dragWrapper.addEventListener("drop", (e) => {//添加拖拽事件监听器
    e.preventDefault();//阻止默认行为
    const files = e.dataTransfer.files;//获取文件列表
    if (files && files.length > 0) {
        const path = files[0].path;//获取文件路径
        console.log('path:', path);
        const content = fs.readFileSync(path);//读取文件内容
        console.log(content.toString());
        canvas.ctx.drawImage(jk("<img src=" + path + ">")[0], 0, 0)
    }
})
dragWrapper.addEventListener("dragover", (e) => {
    e.preventDefault();// 阻止拖拽结束事件默认行为
})
//图片拖动结束

document.getElementById('max_btn').addEventListener('click', () => ipc.send('window-max'));//关闭软件的通信
document.getElementById('min_btn').addEventListener('click', () => ipc.send('window-min'));//最小化软件的通信
document.getElementById('close_btn').addEventListener('click', () => ipc.send('window-close'));//最大化软件的通信

const { BrowserWindow } = require('electron').remote;
jk('#git_btn').on('click', function (e) {
    const win = new BrowserWindow({
        width: 1800,
        height: 800,
        webPreferences: {
            enableRemoteModule: true,
        },
    })
    win.loadURL('https://www.bilibili.com/')
})
jk('#picture_btn').on('click', function (e) {
    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 800,
        show: false,//窗口隐藏jk e
    })
    dialog.showOpenDialog(mainWindow, {
        properties: ['openFile']
    }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths)
        canvas.ctx.drawImage(jk("<img src=" + result.filePaths[0] + ">")[0], 0, 0)
    }).catch(err => {
        console.log(err)
    })
})
jk('.clear_btn').on('click', function (e) {//清屏按钮
    canvas.clear_screen();
    jk('.code_area').empty();
})
jk('.stop_btn').on('click', function (e) {//停止按钮
    jk('.code_area').append('<div class="code_data">' + stop_btn + '</div>');//左
})
jk('button').on('mouseover', function () {
    jk(this).css({
        "opacity": 0.7
    })
})
jk('button').on('mouseout', function () {
    jk(this).css({
        "opacity": 1
    })
})