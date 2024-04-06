import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';

const router = createBrowserRouter([{
  path: "/",
  element: <Home />,
},
 {
  path: "/sobre",
  element: <About />,
 },
 {
  path: "/projetos",
  element: <Projects />,
 }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
