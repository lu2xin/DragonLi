import { ipcMain, nativeImage } from 'electron'

interface SearchItem {
    scope?: string,
    id: any,
    name: string
    description: string
    icon: Buffer
}

interface Map<T> {
    [key: string]: T
}

const itemContainer: Map<SearchItem> = {}

const searchByKeyword = (keyword: string): any => {
    const skey = keyword.trim().toLowerCase()
    console.log('%csearch.ts line:19 skey', 'color: #007acc;', skey);
    return Object.values(itemContainer).filter((item: SearchItem)=> {
        if (item.name.toLowerCase().indexOf(skey) > 0) {
            return true
        }
        if (item.name.replace(/[\s]/, '').toLowerCase().indexOf(skey) > 0) {
            return true
        }
        return false
    })
}

ipcMain.handle('quickSearch', async (event, args) => {
    let result = searchByKeyword(args)
    if (result) {
        result = result.map((r: SearchItem) => ({
            ...r,
            icon: nativeImage.createFromBuffer(r.icon).toDataURL(),
        }))
    }
    return result
})

export function registerItem(item: SearchItem, scope?: string) {
    item.scope = item.scope || scope
    itemContainer[getSid(item)] = item
}

export function registerItems(items: SearchItem[], scope?: string) {
    items.forEach(item => {
        item.scope = item.scope || scope
        itemContainer[getSid(item)] = item
    })
}

export function unregisterItem(item: SearchItem, scope?: string) {
    item.scope = item.scope || scope
    delete itemContainer[getSid(item)]
}

function getSid(item: SearchItem): string {
    return `${item.scope??'default'}-${item.id}`
}