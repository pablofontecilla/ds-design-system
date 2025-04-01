import './scss/index.scss';
import PageFlex from './demo/page/PageFlex';
import Homepage from './demo/pages/Homepage';
import { createBrowserRouter } from 'react-router';
import NotFoundPage from './demo/pages/NotFoundPage';

function App() {
//   let body: any = document.querySelector("body");
//   body.className = "ds-theme ds-theme--dark";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <NotFoundPage/>
//   },
//   {
//     path: '/portfolio',
//     element: <Homepage/>
//   }
  
// ]);

  return (
    <Homepage/>

    // <PageFlex/>
  );
}

export default App;
