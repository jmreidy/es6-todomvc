/* eslint no-console:0 */
import {onLoad} from './app'
import './helpers'

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function(err) {
    console.log('❌  HMR Error:', err)
  })
  if (reloading) {
    console.log('🔁  HMR Reloading.')
    onLoad()
  } else {
    console.info('✅  HMR Enabled.')
    bindToWindow()
  }
} else {
  console.info('❌  HMR Not Supported.')
  bindToWindow()
}

function bindToWindow() {
  window.$on(window, 'load', onLoad)
  window.$on(window, 'hashchange', onLoad)
}
