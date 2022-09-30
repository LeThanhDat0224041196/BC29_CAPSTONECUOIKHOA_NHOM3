import React, {lazy} from 'react'
import { useRoutes } from 'react-router-dom'

const AuthGuard = lazy(()=>import('../guards/AuthGuard/AuthGuard'));
const AdminGuard = lazy(()=>import('../guards/AdminGuard/AdminGuard'));
const NoAuthGuard = lazy(()=>import('../guards/NoAuthGuard/NoAuthGuard'));

const AdminLayout = lazy(()=>import('../layouts/Admin/Admin'))
const SignIn = lazy(()=>import('../pages/signin/signIn'))
const SignUp = lazy(()=>import('../pages/signup/signUp'))

const HomeLayout = lazy(()=>import('../layouts/Home/Home'));
const Home = lazy(()=>import('../pages/home/home'))

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
              element: <SignIn />
            },
            {
              path: '/dang-ky',
              element: <SignUp />
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
