import win32 from './win32.js'

import darwin from './darwin.js'

export function getAllNodes() {
    const getters = {
        darwin,
        win32,
        linux: unimplemented,
        freebsd: unimplemented
    };

    return getters[process.platform]();
}

function unimplemented() {
    throw new Error('fetch-installed-software module does not currently support this platform.');
}