import React from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute, createBrowserHistory } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from './index'

// Create route tree using TanStack Router helpers
const RootRoute = createRootRoute({
  component: MainLayout,
})

const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
})

RootRoute.addChildren([IndexRoute])

const router = createRouter({
  routeTree: RootRoute,
  history: createBrowserHistory(),
})

export function Root() {
  return <RouterProvider router={router} />
}
