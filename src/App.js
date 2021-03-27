import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import { routes } from './helpers/routesConst';
import ScrollToTop from './helpers/scrollToTop';

import Loading from './components/helpers/Loading';
import MainWrapper from './components/wrappers/main';
import BackWrapper from './components/wrappers/back';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <BackWrapper />
          <MainWrapper>
            <Switch>
              <Route path={routes.home} exact component={lazy(() => import('./containers/Home'))} />
              <Route path={`${routes.post}/:id`} exact component={lazy(() => import('./containers/Post'))} />
              <Route component={lazy(() => import('./containers/Error'))} />
            </Switch>
          </MainWrapper>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
