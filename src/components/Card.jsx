import React, { Component, Link } from "react";

export default class Card extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <a href={"/article/" + this.props.content.id}>
        <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url('${this.props.content.image.formats.medium.url}')`,
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
      </a>
    );
  }
}
