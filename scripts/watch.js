const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { mainConfig, rendererConfig } = require('../webpack.config')
const electronPath = require('electron');
const { spawn } = require('child_process');

const mainCompiler = webpack(mainConfig)
const rendererCompiler = webpack(rendererConfig)

const server = new WebpackDevServer({}, rendererCompiler)

/** @type {import('child_process').ChildProcess | null} */
let spawnProcess = null;

server.startCallback(() => {
  mainCompiler.watch({}, (err, res) => {
    if (spawnProcess !== null) {
      spawnProcess.kill()
      spawnProcess = null
    }
    spawnProcess = spawn(String(electronPath), ['.']);
    spawnProcess.stdout.on('data', d => console.log(new Date().toLocaleTimeString(), d.toString()))
    spawnProcess.stderr.on('data', d => console.log(new Date().toLocaleTimeString(), d.toString()))
  })
})

server.stopCallback(() => {
  if (spawnProcess != null) {
    spawnProcess.kill()
  }
})
