const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const erbLoader = require('./loaders/erb')
const jqueryLoader = require('./loaders/jquery')

// Plugins
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    Popper: ['popper.js', 'default'],
    SVGInjector: 'svg-injector',
    lozad: 'lozad'
  }),
  'MomentContextReplacement',
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|pl/)
)

// Loaders
environment.loaders.prepend('jQueryExpose', jqueryLoader)
environment.loaders.prepend('erb', erbLoader)

module.exports = environment
