import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../layouts/Home/Home'

export default function Router() {
  const routing = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ]);
  return routing;
}
