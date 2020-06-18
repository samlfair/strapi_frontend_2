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

function getArticle(id) {
  return service
    .get("/articles/" + id)
    .then((res) => res.data)
    .catch(errorHandler);
}

export default class App extends Component {
  state = {
    articles: null,
  };
  componentDidMount() {
    getArticle(this.props.match.params.id).then((apiRes) => {
      this.setState({ article: apiRes });
    });
  }
  render() {
    return (
      <div className="article">
        {!!this.state.article && (
          <>
            <div
              className="article__image"
              style={{
                backgroundImage: `url('${this.state.article.image.formats.medium.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="article__slug">
                {this.state.article.category.name}
              </div>
              <div className="article__title">{this.state.article.title}</div>
            </div>
            <div className="article__detail">
              <div className="article__date">
                {this.state.article.published_at.split("-").reverse().join("/")}
              </div>
              <div className="article__content">
                {this.state.article.content}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
