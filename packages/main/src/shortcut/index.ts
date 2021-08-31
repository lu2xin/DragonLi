
export async function platform() {
    let fn
    if (process.platform) {
        fn = await import('./win32')
    } else if (process.platform == 'darwin') {
        fn = await import('./darwin')
    }
    return fn.default
}

export default async function getApps() {
    const nativeFun = await platform()
    return nativeFun.call()
}