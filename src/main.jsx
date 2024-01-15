import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
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
        index: '/contact',
        element: <Contact />
      },
      {
        index: '/projects',
        element: <Projects />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
