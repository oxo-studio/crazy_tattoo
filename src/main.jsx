import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChiSiamo from './pages/chisiamo.jsx';
import Gallery from './pages/gallery.jsx'
import Contatti from './pages/contati.jsx';
import Privacy from './pages/privacy.jsx'
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chisiamo",
    element: <ChiSiamo />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
