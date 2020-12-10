import React from 'react';

type TProps = {title: string, text: string};

class Post extends React.Component<TProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {title, text} = this.props;
    return (
      <article className="post">
        <h1 className="post__title">{title}</h1>
        <div className="post__text">{text}</div>
      </article>
    );
  }
}

export default Post;
