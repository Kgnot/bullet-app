import {app, BrowserWindow} from 'electron';
import path from 'path';
import {isDev} from './util.js'
//import { pollResources } from './resourceManager.js';



const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1100,
        height: 750,
        transparent: true,
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 25
        },
        autoHideMenuBar: true,
    });

    if (isDev()) {
        mainWindow.loadURL('http://localhost:5173');
    } else {
        mainWindow.loadFile(path.join(app.getAppPath()) + "/dist-react/index.html");
    }
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})