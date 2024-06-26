import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage, {loader as eventsLoader} from './pages/EventPage';
import EventDetailPage, {
  loader as detailLoader,
  action as deleteEventAction
} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import RootEventPage from './pages/RootEventPage';
import ErrorPage from './pages/Error';
import  {action as manipulaitEventAction} from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
const router = createBrowserRouter([
  {
    path: '/', element: <HomePage/>,
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { 
        path: 'events', 
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
                element: <EventDetailPage/>,
                action: deleteEventAction,
              },
              { path: 'edit',
              element: <EditEventPage/>,
              action: manipulaitEventAction }
            ]
          },
          { path: 'new', element: <NewEventPage/>, action: manipulaitEventAction },
        ]},
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        }
      ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

