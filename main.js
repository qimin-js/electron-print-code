const { app, BrowserWindow, dialog } = require('electron')
const path = require('path')
const cmd = require('node-cmd');
const electron = require('electron')
const ipc = electron.ipcMain
function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 800,
        // show: false,//窗口隐藏jk e
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false,//无边框
        backgroundColor: '#2e2c29',//软件加载的时候会使用这个背景颜色
        webPreferences: {
            nodeIntegration: true,//使前端也能使用node.js
            enableRemoteModule: true
        },
    })
    mainWindow.webContents.openDevTools();//打开开发者工具
    mainWindow.loadFile('index.html');
    //登录窗口最小化
    ipc.on('window-min', function () {
        mainWindow.minimize();
    })
    //登录窗口最大化
    ipc.on('window-max', function () {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();//最大化按最大化按钮，会回到原来大小
        } else {
            mainWindow.maximize();
        }
    })
    ipc.on('window-close', function () {
        mainWindow.close();//关闭软件    app.quit();的话不会触发window-all-closed事件
    })
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    cmd.run('electron .');//关闭是重启
    app.quit();
})