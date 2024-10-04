import React from "react";
import Home from "./Components/Home";
import Review from "./Components/Review";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/reviews',
      element: <Review />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
