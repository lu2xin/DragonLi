import getApps from './shortcut'
import { SearchEngine } from './engine'

export async function start() {
    const apps = await getApps()

    const items = apps.map(fe => ({
        name: fe.name,
        description: fe.description,
        icon: fe.icon,
        id: fe.name
    }))
    SearchEngine.registerItems(items, 'app-loader')
}