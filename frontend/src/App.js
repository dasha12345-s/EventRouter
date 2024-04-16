import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage, {loader as eventsLoader} from './pages/EventPage';
import EventDetailPage, {loader as detailLoader} from './pages/EventDetailPage';
import NewEventPage, {action as newEventAction} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import RootEventPage from './pages/RootEventPage';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/', element: <HomePage/>,
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: 'events', 
        element: <RootEventPage/>,
        children: [
          { index: true, 
            element: <EventPage/>, 
            loader: eventsLoader 
          },
          {
            path: ':eventId',
            id: 'eve',
            loader: detailLoader,
            children: [
              { index: true, 
                element: <EventDetailPage/>, },
              { path: 'edit', element: <EditEventPage/> }
            ]
          },
          { path: 'new', element: <NewEventPage/>,action: newEventAction },
        ]}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

