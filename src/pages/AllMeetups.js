import { useContext } from 'react';

import MeetupList from '../components/meetups/MeetupList';
import MeetupsContext from '../store/meetups-context';

function AllMeetupsPage() {
  const meetupsCtx = useContext(MeetupsContext);

  const { meetups, isLoading, errorMessage } = meetupsCtx;

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section>
        <p>{errorMessage}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
