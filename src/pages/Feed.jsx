import React, { Component } from "react";
import axios from "axios";
import Card from "../components/Card";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
  // display server error pages here
}

function getArticles() {
  return service
    .get("/articles/")
    .then((res) => res.data)
    .catch(errorHandler);
}

export default class App extends Component {
  state = {
    articles: null,
  };
  componentDidMount() {
    getArticles().then((apiRes) => {
      console.log(apiRes);
      this.setState({ articles: apiRes });
    });
  }
  render() {
    return (
      <div className="list">
        {this.state.articles &&
          this.state.articles.map((article) => {
            return <Card content={article} />;
          })}
      </div>
    );
  }
}
