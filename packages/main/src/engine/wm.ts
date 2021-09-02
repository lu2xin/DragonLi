import { BrowserWindow } from 'electron'

let windows: StringMap<BrowserWindow> = {}


export function getWindow(code: string): BrowserWindow | null {
    if(code in windows) {
        return windows[code]
    }
    return null
}

export function createWindow(code: string, opts?: any): BrowserWindow {
    if (getWindow(code)) {
        throw Error(`window already exists, code: ${code}`)
    }

    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.on('ready-to-show', () => {
        win?.show();

        if (import.meta.env.MODE === 'development') {
            win?.webContents.openDevTools();
        }
    });
    windows[code] = win

    win.on('closed', () => {
        delete windows[code]
    })

    return win
}