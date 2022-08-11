import { createContext, useCallback, useState } from 'react';

const MeetupsContext = createContext({
  meetups: [],
  getAllMeetups: () => {},
  addMeetup: meetup => {},
  isLoading: null,
  errorMessage: null,
});

export function MeetupsContextProvider(props) {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const firebaseUri =
    'https://firebase-default-rtdb.europe-west1.firebasedatabase.app/';

  const addMeetupHandler = async meetupData => {
    await fetch(firebaseUri + 'meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Get all meetups again from the database,
    // This allows the home page to be updated with the new data.
    await getAllMeetupsHandler();
  };

  const getAllMeetupsHandler = useCallback(async () => {
    setIsLoading(true);
    await fetch(firebaseUri + 'meetups.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const loadedMeetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          loadedMeetups.push(meetup);
        }

        setIsLoading(false);
        setMeetups(loadedMeetups);
      })
      .catch(err => {
        setIsLoading(false);
        setErrorMessage('Error loading meetups!');
      });
  }, []);

  const context = {
    meetups,
    getAllMeetups: getAllMeetupsHandler,
    addMeetup: addMeetupHandler,
    isLoading,
    errorMessage,
  };

  return (
    <MeetupsContext.Provider value={context}>
      {props.children}
    </MeetupsContext.Provider>
  );
}

export default MeetupsContext;
