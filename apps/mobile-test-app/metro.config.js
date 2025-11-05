const path = require("path")
const { getDefaultConfig } = require("expo/metro-config")

const config = getDefaultConfig(__dirname)

config.resolver.extraNodeModules = {
  "@configs": path.resolve(__dirname, "../../packages/configs"),
  "@ui-mobile": path.resolve(__dirname, "../../packages/ui-mobile/src"),
}

config.watchFolders = [
  path.resolve(__dirname, "../../packages"),
]

module.exports = config