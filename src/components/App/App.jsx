import React from 'react';
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import classnames from 'classnames';
import { useContainerQuery } from 'react-container-query';
import AppErrorBoundary from 'components/AppErrorBoundary';

// import _MainPage from 'components/MainPage';
// import _RecipeDetailPage from 'components/RecipeDetailPage';

const MainPage = React.lazy(() => import('components/MainPage'));
const RecipeDetailPage = React.lazy(() => import('components/RecipeDetailPage'));


const containerQueries = {
  [styles.WidthBetween400And599]: {
    minWidth: 400,
    maxWidth: 599,
  },
  [styles.WidthLargerThan600]: {
    minWidth: 600,
  },
};


function App() {
  
  const [containerClassNames, containerRef] = useContainerQuery(containerQueries);

  return (
    <AppErrorBoundary>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div ref={containerRef} className={classnames(styles.App, containerClassNames)}>

            <Switch>
              <Route path="/recipe/:id" component={RecipeDetailPage} />
              <Route path="/" exact component={MainPage} />
            </Switch>

          </div>
        </Router>
      </React.Suspense>
    </AppErrorBoundary>
  );
}

export default App;
