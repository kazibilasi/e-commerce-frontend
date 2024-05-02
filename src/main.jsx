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

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App> ,
    children:[
      {
        path: "/",
        element:<Shop></Shop>,
      },
      {
        path: "/mens",
        element:<ShopCategory></ShopCategory>,
        
      },
      {
        path: "/womens",
        element:<ShopCategory></ShopCategory>,
        
      },
      {
        path: "/kids",
        element:<ShopCategory></ShopCategory>,
        
      },
      {
        path: "/product/:id",
        element:<Product></Product>,
        
      },
      {
        path: "/cart",
        element:<Cart></Cart>,
        
      },
      {
        path: "/login",
        element:<LoginSignup></LoginSignup>,
        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
