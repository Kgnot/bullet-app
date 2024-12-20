import {app, BrowserWindow} from 'electron';
import path from 'path';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';

let child : ChildProcessWithoutNullStreams;
const JAR= "App.jar";

const executeJar = ()=> {
    const jarPath = path.join(app.getAppPath(), '..', JAR);

    child = spawn('java', ['-jar', jarPath, '']);


    child.on('error', (err) => {
        console.error('Error ejecutando el archivo .jar:', err);
    });

    child.on('close', (code) => {
        console.log("el jarPath es: ",jarPath)
        console.log(`Proceso hijo terminado con código ${code}`);
    });
}

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
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5173');
    }
    else {
        mainWindow.loadFile(path.join(app.getAppPath()) + "/dist-react/index.html");
    }
};

app.on("ready", () => {
    executeJar();
    createWindow();
})
app.on('window-all-closed', () => {
    if (child) {
        child.kill(); 
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});