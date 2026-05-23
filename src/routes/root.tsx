import React from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute, createBrowserHistory } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from './index'
import { NewAccount } from './new-account'
import { TermsConditions } from './TermsConditions'
import { PrivacyPolicy } from './PrivacyPolicy'

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
const TermsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/terms',
  component: TermsConditions,
})

const PrivacyRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/privacy',
  component: PrivacyPolicy,
})

RootRoute.addChildren([IndexRoute, TermsRoute, PrivacyRoute])

const router = createRouter({
  routeTree: RootRoute,
  history: createBrowserHistory(),
})

export function Root() {
  return <RouterProvider router={router} />
}
