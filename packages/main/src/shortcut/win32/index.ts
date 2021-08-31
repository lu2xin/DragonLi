import lsDir from 'list-files-in-dir'
import os from 'os'
import path from 'path'
import { parse } from './lnk'

async function _getpath(folder) {
    const files = await lsDir.listFiles(folder);

    const getTarget = async (myItem) => {
        try {
            const lnkObj = await parse(myItem)
            return {
                filename: myItem,
                workingDir: lnkObj.stringData.workingDir,
                nameString: lnkObj.stringData.nameString,
                targetPath: lnkObj.linkInfo.localBasePath,
            }
        } catch (e) {
            return ""
        }
    }
    const promises = [];
    for (const item of files) {
        let ext = path.extname(item);

        if (ext.toLowerCase() === ".lnk") {
            promises.push(getTarget(item))
        }
    }

    return (await Promise.all(promises)).filter(ele => ele !== "")

}

export default async function getApps() {

    const homePath = os.homedir();
    const usersPath = path.dirname(homePath);
    const drivePath = path.dirname(usersPath);
    const folders = [
        homePath + "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs",
        usersPath + "\\Default\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs",
        drivePath + "ProgramData\\Microsoft\\Windows\\Start Menu\\Programs",
        homePath + "\\Desktop"
    ]
    const promises = [];
    folders.forEach(f => promises.push(_getpath(f)))
    const pResult = await Promise.all(promises);
    const allNodes = []
    pResult.forEach(r => allNodes.push(...r))
    return await Promise.all(allNodes.map(async r => {
        const ret = {}
        // try {
        //     const buffer = await extractIcon(r.targetPath, 'small')
        //     ret.icon = buffer
        // } catch (error) {
        //     console.warn(error)
        // }
        return {
            ...ret,
            name: path.basename(r.filename, '.lnk'),
            descriptioin: r.nameString || r.targetPath,
            exec: r.targetPath
        }
    }))
}
