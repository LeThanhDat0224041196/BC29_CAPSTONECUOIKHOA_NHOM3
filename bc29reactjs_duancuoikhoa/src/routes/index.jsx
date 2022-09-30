import React, {lazy} from 'react'
import { useRoutes } from 'react-router-dom'

const AuthGuard = lazy(()=>import('../guards/AuthGuard/AuthGuard'));
const AdminGuard = lazy(()=>import('../guards/AdminGuard/AdminGuard'));
const NoAuthGuard = lazy(()=>import('../guards/NoAuthGuard/NoAuthGuard'))
const HomeLayout = lazy(()=>import('../layouts/Home/Home'))

export default function Router() {
  const routing = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/',
          element: <AuthGuard />,
          children: [
            {},
          ],
        },
        {
          path: '/',
          element: <NoAuthGuard />,
          children: [
            {
              path: '/dang-nhap',
              element: <signIn />
            },
            {
              path: '/dang-ky',
              element: <signUp />
            }
          ]
        }
      ]
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: '/admin/',
          element: <AdminGuard />,
          children: [],
        }
      ]
    }
  ]);
  return routing;
}
