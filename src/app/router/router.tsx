import { createBrowserRouter } from 'react-router-dom';

import Layout from '../pages/Layout';
import Welcome from '../pages/Welcome';
import Services from '../pages/Services';
import Products from '../pages/Products';
import DoorTune from '../pages/DoorTune';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'door-tune',
        element: <DoorTune />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

export default router
