import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import NotFoundPage from './demo/pages/NotFoundPage.tsx';
import Homepage from './demo/pages/Homepage.tsx';
// import { createBrowserRouter } from 'react-router';
import { createBrowserRouter, RouterProvider } from "react-router";


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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
