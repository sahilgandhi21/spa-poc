import React from "react";
import e from "../event-bus";
import ReactDOM from "react-dom";

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personId: window.location.hash.split("/")
        ? window.location.hash.split("/")[2]
        : 0,
      detailData: "",
      message:
        "When Angular receives message, we should see a confirmation here 😎",
    };

    // this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on("received", this.messageHandler);
    const apiUrl = "https://reqres.in/api/users?id=" + this.state.personId;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((resp) => {
        console.log("This is your data", resp["data"]);
        this.setState({
          detailData: resp["data"],
        });
      });
  }

  componentWillUnmount() {
    e.off("received", this.messageHandler);
  }

  messageHandler(message) {
    this.setState({
      message: message.text,
    });
  }

  sendMessage() {
    location.hash = "/list";
    e.emit("message", { text: "Hello from React 👋" });
  }

  render() {
    return (
      <div style={{ marginTop: "25px" }}>
        <h1>Detail View (Built on React)</h1>
        <h2>User detail as follow</h2>
        <table>
        <tr>
          <td><h3>Id</h3></td>
          <td>{this.state.detailData.id}</td>
          </tr>

          <tr>
          <td><h3>Photo</h3></td>
          <td><img alt="" src={this.state.detailData.avatar} /></td>
          </tr>

          <tr>
          <td><h3>First Name</h3></td>
          <td>{this.state.detailData.first_name}</td>
          </tr>

          <tr>
          <td><h3>Last Name</h3></td>
          <td>{this.state.detailData.last_name}</td>
          </tr>

          <tr>
          <td><h3>Email</h3></td>
          <td>{this.state.detailData.email}</td>
          </tr>
         
        </table>
      </div>
    );
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
