import { lazy } from "react";
import ErrorPage from "./pages/errorPage";
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

const Home = lazy(() => import("./pages/main/Home"));
const MyPage = lazy(() => import("./pages/main/MyPage"));
const Checkout = lazy(() => import("./pages/main/Checkout"));

const PrivateRoute = lazy(() => import("./components/privateRoute/index"));

const Footer = lazy(() => import("./components/pageLayout/Footer"));
const Topbar = lazy(() => import("./components/pageLayout/TopBar"));

const AppRoutes = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <div>
        <Topbar />
        <Home />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/my_page",
    element: (
      <PrivateRoute>
        <MyPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute>
        <Topbar />
        <Checkout />
        <Footer />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth/login",
    element: (
      <>
        <Login>
          <Footer />
        </Login>
      </>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <>
        <Register>
          <Footer />
        </Register>
      </>
    ),
  },
];
export default AppRoutes;
