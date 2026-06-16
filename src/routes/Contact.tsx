import React, { useState } from 'react'
import { Button } from '../components/ui/Button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Get In Touch</p>
          <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Contact <span className="gradient-text">RR Computers</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg">
            Ready to upgrade your infrastructure? Our team is here to help you find the perfect solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-green-400 text-4xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-on-surface-variant max-w-md mx-auto">
                    Thank you for contacting RR Computers. Our team will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="glass" size="md">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-base-900">Select a service</option>
                      <option value="dedicated" className="bg-base-900">Dedicated Servers</option>
                      <option value="vps" className="bg-base-900">VPS Hosting</option>
                      <option value="cloud" className="bg-base-900">Cloud Infrastructure</option>
                      <option value="managed" className="bg-base-900">Managed Hosting</option>
                      <option value="it" className="bg-base-900">IT Solutions</option>
                      <option value="computers" className="bg-base-900">Computer Sales</option>
                      <option value="other" className="bg-base-900">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your infrastructure needs..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button size="lg" className="w-full sm:w-auto px-12 py-4">
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Info */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Business Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">storefront</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">RR Computers</p>
                    <p className="text-on-surface-variant text-xs mt-1">Technology Infrastructure Company</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">call</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Phone</p>
                    <a href="tel:01881982949" className="text-on-surface-variant text-xs hover:text-white transition-colors">01881-982949</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <a href="mailto:support@oryxa.us" className="text-on-surface-variant text-xs hover:text-white transition-colors">support@oryxa.us</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">language</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Website</p>
                    <p className="text-on-surface-variant text-xs">oryxa.us</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Support</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="material-symbols-outlined text-green-400 text-lg">support_agent</span>
                  <div>
                    <p className="text-white text-sm font-medium">24/7 Support</p>
                    <p className="text-on-surface-variant text-[10px]">Always available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                  <div>
                    <p className="text-white text-sm font-medium">Response Time</p>
                    <p className="text-on-surface-variant text-[10px]">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="material-symbols-outlined text-accent text-lg">verified</span>
                  <div>
                    <p className="text-white text-sm font-medium">Expert Team</p>
                    <p className="text-on-surface-variant text-[10px]">Certified engineers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
