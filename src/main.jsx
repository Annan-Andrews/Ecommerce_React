import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx';
import ProductListing from './pages/ProductListing.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductListing />
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
