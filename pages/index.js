import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      {props.meetups && <MeetupList meetups={props.meetups} />}
      {props.error && <p>{props.error}</p>}
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/meetups');
    const meetups = await response.json();
    return {
      props: {
        meetups: meetups.map(meetup => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        error: 'Error while fetching the data!',
      },
    };
  }
}

export default HomePage;
