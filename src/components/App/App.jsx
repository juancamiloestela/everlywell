import React from 'react';
import styles from './App.module.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppErrorBoundary from 'components/AppErrorBoundary';

const MainPage = React.lazy(() => import('components/MainPage'));
const RecipeDetailPage = React.lazy(() => import('components/RecipeDetailPage'));


function App() {

  return (
    <AppErrorBoundary>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div className={styles.App}>

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
