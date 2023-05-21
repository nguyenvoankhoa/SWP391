import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NewsPage from "./pages/NewsPage";
import GuaranteePage from "./pages/GuaranteePage";
import ErrorPage from "./pages/ErrorPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import UserPageLayout from "./layouts/UserPageLayout";
import HomeService from "./pages/User/HomeService";
import UserHistory from "./pages/User/UserHistory";
import UserNotification from "./pages/User/UserNotification";
import ListPrice from "./pages/User/ListPrice";
import HourlyHelp from "./pages/User/HourlyHelp";
import TotalSanitation from "./pages/User/TotalSanitation";
import FabricCleaning from "./pages/User/FabricCleaning";
import ElectronicCleaning from "./pages/User/ElectronicCleaning";
import SignInPageLayout from "./layouts/SignInPageLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "guarantee",
        element: <GuaranteePage />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserPageLayout />,
    children: [
      { index: true, element: <HomeService /> },
      { path: "history", element: <UserHistory /> },
      { path: "notification", element: <UserNotification /> },
      { path: "price", element: <ListPrice /> },
      { path: "hourly-help", element: <HourlyHelp /> },
      { path: "total-senitation", element: <TotalSanitation /> },
      { path: "fabric-cleaning", element: <FabricCleaning /> },
      { path: "electronic-cleaning", element: <ElectronicCleaning /> },
    ],
  },
  {
    path: "/sign",
    element: <SignInPageLayout />,
    children: [
      { path: "in", element: <SignInPage /> },
      { path: "up", element: <SignUpPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
