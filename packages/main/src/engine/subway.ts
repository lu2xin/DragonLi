import { ipcMain } from "electron";
import { BrowserWindow } from "electron";
import * as wm from './wm'

export function start() {
    ipcMain.on('railway', async (event, arg) => {
        console.log('%csubway.ts line:4 arg', 'color: #007acc;', arg);

        const { code } = arg || {}

        if (code === 'markdown') {
            let win = wm.getWindow(code)
            if (win) {
                win.show()
                return
            }

            win = wm.createWindow(code)
            const pageUrl = import.meta.env.MODE === 'development' && import.meta.env.VITE_DEV_SERVER_URL !== undefined
                ? import.meta.env.VITE_DEV_SERVER_URL + 'markdown/index.html'
                : new URL('renderer/markdown.html', 'file://' + __dirname).toString();

            await win.loadURL(pageUrl)
        }
    })
}