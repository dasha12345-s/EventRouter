import { Link, useParams } from "react-router-dom";

function EventDetailPage(){
  const params = useParams();

  return(
    <>
    <h1> about ZALUPA </h1>
    <p>EVENT ID: {params.eventsId}</p>
    </>
    )
}

export default EventDetailPage;