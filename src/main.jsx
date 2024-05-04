/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import ShopContextProvider from './Context/ShopContext';

import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category='men'></ShopCategory>,
      

      },
      {
        path: "/womens",
        element: <ShopCategory banner={women_banner} category='women' ></ShopCategory>,
        

      },
      {
        path: "/kids",
        element: <ShopCategory banner={kid_banner} category='kid' ></ShopCategory>,
        

      },
      {
        path: "/product/:id",
        element: <Product></Product>,

      },
      {
        path: "/cart",
        element: <Cart></Cart>,

      },
      {
        path: "/login",
        element: <LoginSignup></LoginSignup>,

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>,
)
