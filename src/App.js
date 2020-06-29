import React from "react";
import { client } from "./client";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    client
      .getEntries()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Food Blog</h1>
      </div>
    );
  }
}

export default App;
