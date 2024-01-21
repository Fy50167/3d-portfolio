import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
