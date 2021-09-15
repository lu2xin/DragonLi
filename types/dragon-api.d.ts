
interface DragonApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>
  search(text: string): Array<string>
  setWinExtendHeight(height: number): void
}

declare interface Window {
  dragon: Readonly<DragonApi>
}
