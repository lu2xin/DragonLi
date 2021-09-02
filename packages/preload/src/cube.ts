import { ipcRenderer } from "electron";
export function open(opts) {
    console.log('%ccube.ts line:2 options', 'color: #007acc;', opts);
    ipcRenderer.send('railway', opts)
}