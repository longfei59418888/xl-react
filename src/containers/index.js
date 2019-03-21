import React from 'react';
import { Route } from 'react-router-dom';
// import LazyRoute from 'lazy-route';
import * as Sentry from '@sentry/browser';
import Index from './home';

require('./index.scss');

// Sentry.init({
//   dsn: 'http://18ac34902da74aa29a4328879a58fb0d@localhost:9000/2',
//   release: RELEASE_VERSION,
// });
class Home extends React.Component {
  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setTag(
        'page_locale', 'de-at',
      );

      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }
  render() {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Route
          exact
          path="/home"
          component={Index} />

      </div>
    );
  }
}

export default Home;
