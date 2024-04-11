import { Link } from "react-router-dom";

const PRODUCTS = [
  {id: 'event1', title: 'MY FIRST EVENT'},
  {id: 'event2', title: 'MY FIRST EVENT'},
  {id: 'event3', title: 'MY FIRST EVENT'},
]

function EventPage(){
  return(
    <>
    <h1> all Events </h1>
    <ul>
      {PRODUCTS.map((eve) => (
        <li key={eve.id}>
          <Link to={`/events/${eve.id}`}>
            {eve.title}
            </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default EventPage;