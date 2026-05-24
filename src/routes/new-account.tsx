import React, { useState } from 'react'
import { Button } from '../components/ui/Button'

export function NewAccount() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [waitlistDetails, setWaitlistDetails] = useState<{
    fullName: string
    email: string
    position: number
    etaWeeks: number
    progress: number
    inviteCode: string
  } | null>(null)

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
                const formData = new FormData(event.currentTarget)
                const fullName = String(formData.get('fullName') ?? '').trim()
                const email = String(formData.get('email') ?? '').trim()
                if (!fullName || !email) return

                const position = Math.floor(Math.random() * 900) + 100
                const etaWeeks = Math.max(1, Math.ceil(position / 120))
                const progress = Math.max(5, Math.min(95, 100 - Math.round((position / 1000) * 100)))
                const inviteSeed = Math.random().toString(36).slice(2).toUpperCase()
                const inviteCode = `ORY-${inviteSeed.padEnd(6, 'X').slice(0, 6)}`

                setWaitlistDetails({
                  fullName,
                  email,
                  position,
                  etaWeeks,
                  progress,
                  inviteCode,
                })
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
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome to the Waitlist</h1>
            <p className="text-on-surface-variant">
              Thanks {waitlistDetails?.fullName || 'there'} — your signup is confirmed.
            </p>

            <div className="rounded-2xl border border-white/10 bg-base-950 p-6 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-white font-semibold">Queue Position</p>
                <p className="text-primary font-bold text-xl">#{waitlistDetails?.position}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-on-surface-variant">
                  <span>Waitlist progress</span>
                  <span>{waitlistDetails?.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-700"
                    style={{ width: `${waitlistDetails?.progress ?? 0}%` }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 bg-base-900 p-4">
                  <p className="text-on-surface-variant mb-1">Estimated Invite</p>
                  <p className="text-white font-semibold">
                    ~{waitlistDetails?.etaWeeks} {waitlistDetails?.etaWeeks === 1 ? 'week' : 'weeks'}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-base-900 p-4">
                  <p className="text-on-surface-variant mb-1">Invite Code</p>
                  <p className="text-white font-semibold">{waitlistDetails?.inviteCode}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-white/15 p-4 text-sm text-on-surface-variant">
              This is a demo waitlist UI only. No backend or real account was created for {waitlistDetails?.email}.
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsSubmitted(false)
                setWaitlistDetails(null)
              }}
            >
              Sign up with another email
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
