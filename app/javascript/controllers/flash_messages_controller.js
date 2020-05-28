import { Controller } from 'stimulus'
import { current } from '../src/utils'
import Noty from 'noty'

export default class extends Controller {
  connect () {
    console.log(this.messages)
    if (this.messages !== '') {
      new Noty({
        text: JSON.parse(this.messages).text,
        layout: 'topRight',
        theme: 'mint',
        closeWith: ['click', 'button'],
        timeout: 3000,
        progressBar: true,
        animation: {
          open: 'animated fadeInRight',
          close: 'animated fadeOutRight'
        }
      }).show()
    }
  }

  get messages () {
    return current.flash.messages
  }
}
