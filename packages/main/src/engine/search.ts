interface SearchItem {
    scope?: string,
    id: any,
    name: string
    description: string
    icon: Buffer
}

const itemContainer = {}

export const searchByKeyword = (keyword: string): any => {
    const skey = keyword.trim()
    return Object.values(itemContainer).filter(item => {
        if (item.name.indexOf(skey) > 0) {
            return true
        }
        if (item.name.replace(/[\s]/, '').indexOf(skey) > 0) {
            return true
        }
    })
}

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