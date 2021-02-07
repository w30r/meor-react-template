import React, { Component } from 'react'

class App extends Component {
  state = {
    num: 1,
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
      </div>
    )
  }
}

export default App
