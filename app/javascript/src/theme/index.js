import AsideMenu from './aside-menu'

function initTheme () {
  SVGInjector(document.querySelectorAll('img.js-svg-injector'))
  AsideMenu()
}

document.addEventListener('turbolinks:before-cache', function () {
  $('[data-toggle="tooltip"]').tooltip('hide')
  $('[data-toggle="selectpicker"]').selectpicker('destroy')
})
document.addEventListener('turbolinks:load', initTheme)
document.addEventListener('cable-ready:after-morph', initTheme)
