import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Layout/AppLayout";
import { Home } from "./Pages/Home";
import { Category } from "./Pages/CategoryPage";
import { Services } from "./Pages/Services";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { BuyNow } from "./Pages/BuyNow";
import { Cart } from "./Pages/Cart";

function App() {
  let _a;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category/:endpoint",
          element: <Category />,
        },
        {
          path: "/Services",
          element: <Services />,
        },
        {
          path: "/Privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/Buy-now",
          element: <BuyNow />,
        },
        {
          path: "/Add-to-cart",
          element: <Cart/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
