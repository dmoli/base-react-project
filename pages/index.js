import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import pageWithIntl from '../src/components/PageWithIntl';
import Layout from '../src/components/App/Layout';

class Index extends React.Component {
  render() {
    return (
      <Layout title="Index page">
        <div>
          <h1>
            <FormattedMessage
              id="title.custom"
              defaultMessage="Hi for default"
              values={{
                name: 'Index',
              }}
            />
          </h1>

          <FormattedHTMLMessage
            id="linkemail"
            defaultMessage="Hi for default email"
            values={{
              name: 'HtmlMessage',
              email: 'skumblue@gmail.com',
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default pageWithIntl(Index);
