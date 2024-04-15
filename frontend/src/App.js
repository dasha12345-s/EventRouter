import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage, {loader as eventsLoader} from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
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
          { path: ':eventsId', element: <EventDetailPage/> },
          { path: 'new', element: <NewEventPage/> },
          { path: ':eventsId/edit', element: <EditEventPage/> },
        ]}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

