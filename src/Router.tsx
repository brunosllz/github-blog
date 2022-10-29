import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { IssueDetails } from './pages/IssueDetails'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'issues/details',
        element: <IssueDetails />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
