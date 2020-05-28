import StackedMenu from 'stacked-menu/src/scripts/stacked-menu.js'
import PerfectScrollbar from 'perfect-scrollbar/dist/perfect-scrollbar.esm.js'

const AsideMenu = () => {
  window.StackedMenu = StackedMenu
  window.PerfectScrollbar = PerfectScrollbar

  let ps
  if (window.StackedMenu && $('#stacked-menu').length > 0) {
    const asideMenu = new StackedMenu() // update perfect scrollbar

    $(asideMenu.selector).on('menu:open menu:close', function () {
      // wait until translation done
      setTimeout(function () {
        if (window.PerfectScrollbar) {
          ps.update()
        }
      }, 300)
    }) // perfect scrollbar for aside menu

    if (window.PerfectScrollbar) {
      ps = new PerfectScrollbar('.aside-menu', {
        suppressScrollX: true
      })
    }
  }
}
export default AsideMenu
