require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('trix')
require('@rails/actiontext')
require('channels')
require('typeface-fira-sans')

import 'bootstrap/dist/js/bootstrap'
import 'select2/dist/js/select2.min'
import 'moment'
import 'bootstrap-daterangepicker'
import 'bootstrap-select'
import 'jquery-validation'

import './events'
import './prefetch'
import './utm'
import './theme'

// console.log(window.environment)
// console.log(window)
// console.log(new StackedMenu())
// if (window.StackedMenu) {
//   console.log('window')
// }
// require('imports-loader?define=>false!datatables.net')(window, $)
// require('imports-loader?define=>false!datatables.net-bs4')(window, $)

// window.Noty = require('noty')
// window.Noty.overrideDefaults({
//   layout: 'topRight',
//   theme: 'mint',
//   closeWith: ['click', 'button'],
//   timeout: 3000,
//   progressBar: true,
//   animation: {
//     open: 'animated fadeInRight',
//     close: 'animated fadeOutRight'
//   }
// })
