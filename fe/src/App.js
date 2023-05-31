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
import HourlyHelp, { loader as UserLoader } from "./pages/User/HourlyHelp";
import TotalSanitation from "./pages/User/TotalSanitation";
import FabricCleaning from "./pages/User/FabricCleaning";
import ElectronicCleaning from "./pages/User/ElectronicCleaning";
import HourlyHelpPage, { loader as PriceLoader } from "./pages/HourlyHelpPage";
import FabricCleaningPage from "./pages/FabricCleaningPage";
import TotalSanitationPage from "./pages/TotalSanitationPage";
import ElectronicCleaningPage from "./pages/ElectronicCleaningPage";
import EmployeePage from "./pages/Employee/EmployeePage";
import AdminHome from "./pages/Admin/AdminHome";
import EditCustomer from "./pages/Admin/EditCustomer";
import OrderService from "./pages/Admin/OrderService";
import EditEmployee from "./pages/Admin/EditEmployee";
import EditService from "./pages/Admin/EditService";
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import OrderSumation from "./pages/User/OrderSumation";
import OrderCompleted from "./pages/User/OrderCompleted";
import ActionRecord from "./pages/User/ActionRecord";
import AccountInfor from "./pages/User/AccountInfor"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "hourly-help",
        element: <HourlyHelpPage />,
        loader: PriceLoader,
      },
      {
        path: "total-senitation",
        element: <TotalSanitationPage />,
        loader: PriceLoader,
      },
      {
        path: "fabric-cleaning",
        element: <FabricCleaningPage />,
        loader: PriceLoader,
      },
      {
        path: "electronic-cleaning",
        element: <ElectronicCleaningPage />,
        loader: PriceLoader,
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
      { path: "hourly-help", element: <HourlyHelp />, loader: UserLoader },
      {
        path: "total-senitation",
        element: <TotalSanitation />,
        loader: UserLoader,
      },
      {
        path: "fabric-cleaning",
        element: <FabricCleaning />,
        loader: UserLoader,
      },
      {
        path: "electronic-cleaning",
        element: <ElectronicCleaning />,
        loader: UserLoader,
      },
      { path: "order-sumation", element: <OrderSumation /> },
      { path: "order-completed", element: <OrderCompleted /> },
      { path: "action-record", element: <ActionRecord /> },
      { path: "account-infor", element: <AccountInfor /> },
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
      { path: "order-service", element: <OrderService /> },
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
