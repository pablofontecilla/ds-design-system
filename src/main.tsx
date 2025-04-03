import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import NotFoundPage from './demo/pages/NotFoundPage.tsx';
import Homepage from './demo/pages/Homepage.tsx';
import { createBrowserRouter, RouterProvider } from "react-router";
import Examples from './demo/pages/Examples.tsx';
import Layout from './demo/pages/page-flex/PageFlex.tsx';
import Contact from './ds/pages/Contact.tsx';


let body: any = document.querySelector("body");
  body.className = "ds-theme ds-theme--dark";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/homepage',
    element: <Homepage/>
  },
  {
    path: '/pages/examples',
    element: <Examples/>
  },
  {
    path: '/pages/layout',
    element: <Layout/>
  },
  {
    path: '/pages/contact',
    element: <Contact/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
