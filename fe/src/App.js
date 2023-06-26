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
import HourlyHelp, { loader as UserLoader } from "./pages/User/HourlyHelp";
import TotalSanitation from "./pages/User/TotalSanitation";
import FabricCleaning from "./pages/User/FabricCleaning";
import ElectronicCleaning from "./pages/User/ElectronicCleaning";
import HourlyHelpPage, { loader as PriceLoader } from "./pages/HourlyHelpPage";
import FabricCleaningPage from "./pages/FabricCleaningPage";
import TotalSanitationPage from "./pages/TotalSanitationPage";
import ElectronicCleaningPage from "./pages/ElectronicCleaningPage";
import EmployeePage, {
  employeePageLoader,
} from "./pages/Employee/EmployeePage";
import AdminHome, { businessInWeek } from "./pages/Admin/AdminHome";
import EditCustomer, { customerLoader } from "./pages/Admin/EditCustomer";
import OrderService, { orderLoader } from "./pages/Admin/OrderService";
import EditEmployee, { employeeLoader } from "./pages/Admin/EditEmployee";
import EditService, { serviceLoader } from "./pages/Admin/EditService";
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import { billLoader } from "./pages/User/ActionRecord";
import AccountInfor, { customerInfoLoader } from "./pages/User/AccountInfor";
import EmployeePageHistory, {
  employeeHistoryLoader,
} from "./pages/Employee/EmployeePageHistory";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderCheckout from "./pages/User/OrderCheckout";
import HourlyHelpBill from "./pages/User/Bill/HourlyHelpBill";
import FabricCleaningBill from "./pages/User/Bill/FabricCleaningBill";
import ElectronicCleaningBill from "./pages/User/Bill/ElectronicCleaningBill";
import TotalSanitationBill from "./pages/User/Bill/TotalSanitationBill";
import UserHistory, { historyLoader } from "./pages/User/UserHistory";
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
      { path: "hourly-help", element: <HourlyHelp />, loader: UserLoader },
      { path: "history", element: <UserHistory />, loader: historyLoader },
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
      { path: "order", element: <OrderCheckout />, loader: customerInfoLoader },
      {
        path: "action-record",
        loader: billLoader,
        children: [
          {
            index: true,
            element: <HourlyHelpBill />,
            loader: billLoader,
          },
          {
            path: "fabric-cleaning",
            element: <FabricCleaningBill />,
            loader: billLoader,
          },
          {
            path: "electronic-cleaning",
            element: <ElectronicCleaningBill />,
            loader: billLoader,
          },
          {
            path: "total-senitation",
            element: <TotalSanitationBill />,
            loader: billLoader,
          },
        ],
      },
      {
        path: "account-infor",
        element: <AccountInfor />,
        loader: customerInfoLoader,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome />, loader: businessInWeek },
      {
        path: "edit-customer",
        element: <EditCustomer />,
        loader: customerLoader,
        children: [
          {
            path: ":serviceId",
            element: <OrderService />,
          },
        ],
      },
      {
        path: "edit-employee",
        element: <EditEmployee />,
        loader: employeeLoader,
        children: [
          {
            path: ":serviceId",
            element: <OrderService />,
          },
        ],
      },
      {
        path: "edit-service",
        element: <EditService />,
        loader: serviceLoader,
        children: [
          {
            path: ":serviceId",
            element: <OrderService />,
          },
        ],
      },
      {
        path: "order-service",
        element: <OrderService />,
        loader: orderLoader,
        children: [
          {
            path: ":serviceId",
            element: <OrderService />,
          },
        ],
      },
    ],
  },
  {
    path: "/employee",
    element: <EmployeeLayout />,
    children: [
      { index: true, element: <EmployeePage />, loader: employeePageLoader },
      {
        path: "history-emp",
        element: <EmployeePageHistory />,
        loader: employeeHistoryLoader,
      },
    ],
  },
]);

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Afefs1EOTDIKKyThtWc_uRZAPmoJ5fW92WwTWcr0Ejk4vOtcRp_ixdZvcuTc-4BT_vwRNHpcS8CFiA5t",
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </PayPalScriptProvider>
  );
}

export default App;
