import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CreateMeme from "../pages/CreateMeme";
import FullGallery from "../pages/FullGallery";
import Gallery from "../pages/Gallery";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'newmeme',
        element: <CreateMeme />
      },
      {
        path: 'gallery',  // Nueva ruta para la galería
        element: <FullGallery />
      },
      {
        path: 'main-gallery',  // Nueva ruta para la galería
        element: <Gallery />
      }
    ]
  }
]);
