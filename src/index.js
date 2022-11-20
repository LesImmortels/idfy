import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./screens/home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Browse from './screens/browse';
import Auction from './screens/auction';
import Example from './screens/test';
import Generate from './screens/generate';
import Navbar from "./components/navbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "browse",
    element: <Browse />,
  },
  {
    path: "browse/:productId",
    element: <Auction />,
  },
  {
    path: "generate/:id",
    element: <Generate />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
