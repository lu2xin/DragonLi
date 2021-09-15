
interface DragonApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>
}

declare interface Window {
  dragon: Readonly<DragonApi>
  electronRequire?: NodeRequire
}
