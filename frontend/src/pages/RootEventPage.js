import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function RootEventPage(){
  return (
    <>
    <EventsNavigation/>
    <Outlet/>
    </>
  )
}

export default RootEventPage;