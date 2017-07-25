import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { FormattedMessage } from 'react-intl';

import pageWithIntl from '../src/components/PageWithIntl';
import Layout from '../src/components/App/Layout';
import { initStore } from '../src/redux/store';
import { nextPage } from '../src/components/Post/actions';
import List from '../src/components/Post/List';

class Post extends React.Component {
  static async getInitialProps(props) {
    if (props.store.getState().posts.entities.length === 0) {
      await props.store.dispatch(nextPage());
    }

    return { };
  }

  constructor() {
    super();
    this.handlePagination = this.handlePagination.bind(this);
  }

  async handlePagination() {
    await this.props.nextPage();
  }

  render() {
    return (
      <Layout title="Post page">
        <h1>
          <FormattedMessage
            id="title.custom"
            defaultMessage="Hi link home"
            values={{
              name: 'Post',
            }}
          />
        </h1>
        <List
          posts={this.props.posts}
        />
        <button onClick={this.handlePagination}>Pagination</button>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.entities,
});

const mapDispatchToProps = dispatch => ({
  nextPage: bindActionCreators(nextPage, dispatch),
});

const PostRedux = withRedux(initStore, mapStateToProps, mapDispatchToProps)(Post);
export default pageWithIntl(PostRedux);
