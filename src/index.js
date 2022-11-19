import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./screens/home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Generate from './screens/generate';
import Navbar from "./components/Navbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "generate/:id",
    element: <Generate/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
