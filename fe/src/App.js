import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NewsPage from "./pages/NewsPage";
import GuaranteePage from "./pages/GuaranteePage";
import ErrorPage from "./pages/ErrorPage";
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
import HourlyHelpPage from "./pages/HourlyHelpPage";
import FabricCleaningPage from "./pages/FabricCleaningPage";
import TotalSanitationPage from "./pages/TotalSanitationPage";
import ElectronicCleaningPage from "./pages/ElectronicCleaningPage";
import EmployeePage from "./pages/Employee/EmployeePage";
import AdminHome from "./pages/Admin/AdminHome";
import EditCustomer from "./pages/Admin/EditCustomer";
import EditEmployee from "./pages/Admin/EditEmployee";
import EditService from "./pages/Admin/EditService";
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "services",
        children: [
          { path: "hourly-help", element: <HourlyHelpPage /> },
          { path: "total-senitation", element: <TotalSanitationPage /> },
          { path: "fabric-cleaning", element: <FabricCleaningPage /> },
          { path: "electronic-cleaning", element: <ElectronicCleaningPage /> },
        ],
      },
      { path: "contact", element: <ContactPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "guarantee", element: <GuaranteePage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
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
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "edit-customer", element: <EditCustomer /> },
      { path: "edit-employee", element: <EditEmployee /> },
      { path: "edit-service", element: <EditService /> },
    ],
  },
  {
    path: "/employee",
    element: <EmployeeLayout />,
    children: [{ index: true, element: <EmployeePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
