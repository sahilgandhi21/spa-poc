import React from 'react'
import e from '../event-bus'
import ReactDOM from 'react-dom';

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      personId : window.location.hash.split('/') ? window.location.hash.split('/')[2] : 0
      //message : 'When Angular receives message, we should see a confirmation here 😎'
    }

    // this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
    const apiUrl = 'https://reqres.in/api/users?id=' + this.state.personId;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((resp) => console.log('This is your data', resp['data']));
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

/* ReactDOM.render((
  <Router>
     <Route path = "/" component = {Root}>
        <IndexRoute component = {Home} />
        <Route path = "detail/id" component = {Root} />
     </Route>
  </Router>
), document.getElementById('app')) */