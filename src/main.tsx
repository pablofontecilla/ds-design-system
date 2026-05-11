import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import NotFoundPage from './demo/pages/NotFoundPage.tsx';
import Homepage from './demo/pages/Homepage.tsx';
import { createBrowserRouter, RouterProvider } from "react-router";
import Examples from './demo/pages/Examples.tsx';
import Contact from './ds/pages/Contact.tsx';
import Roadmap from './demo/pages/Roadmap.tsx';
import PageScrolling from './demo/pages/PageScrolling.tsx';
import PageTest from './demo/pages/PageTest.tsx';


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
    path: '/pages/examples',
    element: <Examples/>
  },
  {
    path: '/demo/pages/test',
    element: <PageTest/>
  },
  {
    path: '/pages/scrolling',
    element: <PageScrolling/>
  },
  {
    path: '/pages/roadmap',
    element: <Roadmap/>
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
