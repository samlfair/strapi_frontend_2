import React, { Component } from "react";

export default class Article extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url('https://source.unsplash.com/900x500/?abstract?sig=${this.props.content.id}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="card__slug">{this.props.content.category.name}</div>
        </div>
        <div className="card__detail">
          <div className="card__title">{this.props.content.title}</div>
          <div className="card__date">
            {this.props.content.published_at.split("-").reverse().join("/")}
          </div>
          <div className="card__content">
            {this.props.content.content.substring(0, 140) + "..."}
          </div>
        </div>
      </div>
    );
  }
}
