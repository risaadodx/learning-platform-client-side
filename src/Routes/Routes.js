import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Blog from "../Pages/Blog/Blog";
import Faq from "../Pages/Faq/Faq";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Category from "../Pages/Category/Category";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
