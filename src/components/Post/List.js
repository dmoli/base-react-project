import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
  render() {
    let error = null;
    if (this.props.error) {
      error = <div className="error">Error</div>;
    }
    return (
      <section>
        {error}
        {this.props.posts
          .map(post => (
            <Item key={post.id} {...post} />
          ))
        }
      </section>
    );
  }
}

export default List;
