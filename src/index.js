import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./screens/home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
