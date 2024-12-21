import {app, BrowserWindow} from 'electron';
import path from 'path';
import {isDev} from './util.js'
import { pollResources } from './resourceManager.js';


const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1100,
        height: 750,
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 20
        }
    });
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5173');
    } else {
        mainWindow.loadFile(path.join(app.getAppPath()) + "/dist-react/index.html");
    }
};

app.on("ready", () => {
    createWindow();
    pollResources();
})