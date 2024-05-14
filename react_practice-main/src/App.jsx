import { useState } from "react";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootPage/>
  },
  {
    path:'/home',
    element: <HomePage/>
  },

])

function App() {
  return <RouterProvider router={router} />

}

export default App;
