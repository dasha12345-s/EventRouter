import  { Link } from 'react-router-dom';

function HomePage(){
  return(
    <>
    <h1>MY HOME PAGE</h1>
    <p> GO to <Link to='/events'>Events</Link> page</p>
    </>
  )
}

export default HomePage;