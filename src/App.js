import { Route, Switch } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import MeetupsContext from './store/meetups-context';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  const meetupsCtx = useContext(MeetupsContext);

  const { getAllMeetups } = meetupsCtx;

  // Get all meetups when the app is loaded for the first time.
  useEffect(() => {
    getAllMeetups();
  }, [getAllMeetups]);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
