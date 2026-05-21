import React from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute, createBrowserHistory } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from './index'
import { NewAccount } from './new-account'

// Create route tree using TanStack Router helpers
const RootRoute = createRootRoute({
  component: MainLayout,
})

const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
})

const NewAccountRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/new-account',
  component: NewAccount,
})

RootRoute.addChildren([IndexRoute, NewAccountRoute])

const router = createRouter({
  routeTree: RootRoute,
  history: createBrowserHistory(),
})

export function Root() {
  return <RouterProvider router={router} />
}
