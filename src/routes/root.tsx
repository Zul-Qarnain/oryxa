import React from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute, createBrowserHistory } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from './index'
import { TermsConditions } from './TermsConditions'
import { PrivacyPolicy } from './PrivacyPolicy'
import { RefundPolicy } from './RefundPolicy'
import { Contact } from './Contact'

const RootRoute = createRootRoute({
  component: MainLayout,
})

const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
})

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

const RefundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/refund',
  component: RefundPolicy,
})

const ContactRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/contact',
  component: Contact,
})

RootRoute.addChildren([IndexRoute, TermsRoute, PrivacyRoute, RefundRoute, ContactRoute])

const router = createRouter({
  routeTree: RootRoute,
  history: createBrowserHistory(),
})

export function Root() {
  return <RouterProvider router={router} />
}
