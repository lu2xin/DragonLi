import getMacApps from 'get-mac-apps'
import { app } from 'electron'
export default function getApps() {
    return new Promise((resolve, reject) => {
        try {
            getMacApps.getApps().then(apps => {
                const nodes = apps.map(async n => {
                    const nativeImage = await app.getFileIcon(n.path)
                    
                    return {
                        name: n._name,
                        description: n.path,
                        exec: n.path,
                        icon: nativeImage.toPNG()
                    }
                })
                resolve(Promise.all(nodes))
            })
        } catch (error) {
            reject(error)
        }
    })
}