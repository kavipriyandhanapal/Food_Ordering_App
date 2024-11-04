import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import RestroMenu from "./components/RestroMenu";


const ContactUs = lazy(()=> import('./components/ContactUs'))

const AppLayout = () => {
  return (
    <div className="AppLayout ">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contactus",
        element:<Suspense fallback={<h1>Loading wait please...</h1>}> 
        <ContactUs />
        </Suspense>
      },
      {
        path:"/restromenu/:resId",
        element:<RestroMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
