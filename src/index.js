import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './commponants/product-details/productDetails';
import Leyout from './commponants/leyout/Leyout';

const router =createBrowserRouter([
    {
        path:'/',
        element:<Leyout />,
        children:[
            {
                path:"",
                element:<App />,
            },
            {
                path:"product-details",
                element:<ProductDetails />,
            
            },
        ],
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);


