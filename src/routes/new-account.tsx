import React, { useState } from 'react'
import { Button } from '../components/ui/Button'

export function NewAccount() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-28">
      <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-base-900 p-8 md:p-12 shadow-2xl">
        {!isSubmitted ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">New Account</h1>
            <p className="text-on-surface-variant mb-8">
              Create your new account to join our waitlist.
            </p>

            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault()
                setIsSubmitted(true)
              }}
            >
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-base-950 px-4 py-3 text-white placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-base-950 px-4 py-3 text-white placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-base-950 px-4 py-3 text-white placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Your business name (optional)"
                />
              </div>

              <Button size="lg" className="w-full">
                Create Account
              </Button>
            </form>
          </>
        ) : (
          <div className="space-y-5 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">New Account</h1>
            <p className="text-lg text-white">
              Thank you for joining our waitlist.
            </p>
            <p className="text-on-surface-variant">
              You are now in the queue. We will email you as the waiting list progresses.
            </p>
            <p className="text-on-surface-variant">
              We are very thankful for your presence.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
