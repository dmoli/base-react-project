import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
  render() {
    return (
      <section>
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
