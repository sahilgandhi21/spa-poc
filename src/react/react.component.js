import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'When Angular receives message, we should see a confirmation here 😎'
    }

    this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
  }

  componentWillUnmount() {
    e.off('received', this.messageHandler)
  }

  messageHandler(message) {
    this.setState({
      message: message.text
    })
  }

  sendMessage() {
    location.hash="/list";
    e.emit('message', { text: 'Hello from React 👋' })
  }

  render() {
    return (
      <div style={{marginTop: '25px'}}>
        <h1>Detail View (Built on React)</h1>

        <p>
          <button onClick={this.sendMessage}>
            Send a message to Angular
          </button>
        </p>

        <p>
          {this.state.message}
        </p>
      </div>
    )
  }
}
