import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Course from "../Pages/Course/Course";
import Blog from "../Pages/Blog/Blog";
import Faq from "../Pages/Faq/Faq";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Category from "../Pages/Category/Category";
import NotFound from "../Pages/404/NotFound";
import Checkout from "../Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-risaadodx.vercel.app/course"
          ),
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-risaadodx.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-risaadodx.vercel.app/course"
          ),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-risaadodx.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
