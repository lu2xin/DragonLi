import { ipcRenderer } from "electron";
export function open(opts) {
    console.log('%ccube.ts line:2 options', 'color: #007acc;', opts);
    ipcRenderer.send('railway', opts)
}

export function send(channel, opts) {
    ipcRender.send(channel, opts)
}

export function invoke(channel, opts) {
    return ipcRenderer.invoke(channel, opts)
}