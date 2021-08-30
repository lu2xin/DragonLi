import win32 from './win32'

// import darwin from './darwin'

export function getAllNodes() {
    const getters = {
        // darwin,
        win32,
        linux: unimplemented,
        freebsd: unimplemented
    };

    return getters[process.platform]();
}

function unimplemented() {
    throw new Error(`does not support this platform: ${process.platform}`);
}