import React from "react";

class Post extends React.Component {
  constructor() {
    super();

    this.title = "Нету ничего";
    this.text = "Что-то есть";
  }

  render() {
    return (
      <article className="post">
        <h1>{this.title}</h1>
        <div>{this.text}</div>
      </article>
    );
  }
}

export default Post;
