import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import HomePage from "./pages/HomePage";
import IntroductionPage from "./pages/IntroductionPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import PoliciesPage from "./pages/PoliciesPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "introduction", element: <IntroductionPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "policies", element: <PoliciesPage /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
