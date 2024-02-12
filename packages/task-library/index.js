
import { h, init } from 'snabbdom'
import {classModule} from 'snabbdom/build/modules/class.js'
import {propsModule} from 'snabbdom/build/modules/props.js'
import {eventListenersModule} from 'snabbdom/build/modules/eventlisteners.js'

const patch = init([classModule, propsModule, eventListenersModule])

class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }

  mount(element) {
    this.element = element
    this.render()
  }

  updateState(newState) {
    this.state = { ...this.state, ...newState }
    this.render()
  }

  render() {
    const vnode = this.view(this.state, this.props)
    this.element = patch(this.element, vnode)
  }
}

export default {
    h,
    Component
  }
