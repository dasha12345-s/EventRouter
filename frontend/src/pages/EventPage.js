import { useLoaderData, json, defer, Await } from 'react-router-dom';
import {Suspense} from 'react'
import EventsList from '../components/EventsList';

function EventsPage() {
  const {events} = useLoaderData();

  return(
    <Suspense fallback={<p style={{textAlign: 'center'}}> Loading...</p>}>
    <Await resolve={events}>
    {(loadEvenys) => <EventsList events={loadEvenys}/> }
  </Await>
  </Suspense>
  ) 
}

export default EventsPage;

async function loadEvenys(){
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      // //return {isError: true, message: 'error'};
      // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {
      //   status: 500,
      return json(
        {message: 'Could not fetch events.'},
        {status: 500,});
    } else {
      const resData = await response.json();
      return resData.events;
    }
}

export function loader(){
  return defer({
    events: loadEvenys()
  })
  }