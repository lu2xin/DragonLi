import getMacApps from 'get-mac-apps'
// import { fileIconToBuffer } from 'file-icon'
export default function getApps() {
    return new Promise((resolve, reject) => {
        try {
            getMacApps.getApps().then(async apps => {
                const nodes = apps.map(app => {
                    return {
                        name: app._name,
                        description: app.path,
                        exec: app.path
                    }
                })
                // const buffers = await fileIconToBuffer(nodes.map(r => r.exec))
                // buffers.map((buffer, index) => nodes[index].icon = buffer)
                resolve(nodes)
            })
        } catch (error) {
            reject(error)
        }
    })
}