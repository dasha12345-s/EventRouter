// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage - DONE
//    - EventsPage - DONE
//    - EventDetailPage - DONE
//    - NewEventPage - DONE
//    - EditEventPage - DONE

// 2. Add routing & route definitions for these five pages
//    - / => HomePage - DONE
//    - /events => EventsPage - DONE
//    - /events/<some-id> => EventDetailPage - DONE
//    - /events/new => NewEventPage  - DONE
//    - /events/<some-id>/edit => EditEventPage - DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import RootEventPage from './pages/RootEventPage';

const router = createBrowserRouter([
  {
    path: '/', element: <HomePage/>,
    element: <Root/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: 'events', 
        element: <RootEventPage/>,
        children: [
          { index: true, element: <EventPage/>},
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

