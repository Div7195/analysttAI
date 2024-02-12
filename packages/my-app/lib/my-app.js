import abc from '../../task-library/index.js'

class Counter extends abc.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  view(state, props) {
    return abc.h('div', [
      abc.h('h1', state.count),
      abc.h('button', { on: { click: this.handleClick.bind(this) } }, 'Add')
    ])
  }

  handleClick() {
    this.updateState({ count: this.state.count + 1 })
  }
}

const counter = new Counter()

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  counter.mount(app)
})
