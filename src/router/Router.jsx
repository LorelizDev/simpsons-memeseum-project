import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CreateMeme from "../pages/CreateMeme";
import FullGallery from "../pages/FullGallery";
import Gallery from "../pages/Gallery";
import EditMeme from "../pages/EditMeme"

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
        path: 'full-gallery',
        element: <FullGallery />
      },
      {
        path: 'main-gallery',
        element: <Gallery />
      },
      {
        path: 'edit/:id',
        element: <EditMeme />
      }
    ]
  }
]);
