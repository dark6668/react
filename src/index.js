
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/login';
import Page1 from './pages/1/blog';
import Page2 from './pages/2/page2';
import Page3 from './pages/3/page3';
import Page4 from './pages/4/page4';
import Page5 from './pages/5/page5';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
const router = createBrowserRouter([



  {
    path: "",
    element: <Login />


  }

  ,
  {
    path: "/page1",
    element: <Page1 />


  }
  ,
  {
    path: "/page2",
    element: <Page2 />


  }
  ,
  {
    path: "/page3",
    element: <Page3 />


  }
  , {

    path: "/page4",
    element: <Page4 />


  }
  , {

    path: "/page5",
    element: <Page5 />


  }


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);