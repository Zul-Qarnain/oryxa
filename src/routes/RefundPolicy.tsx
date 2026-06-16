import React from 'react'

export function RefundPolicy() {
  return (
    <div className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Refund Policy</h1>
      <p className="text-on-surface-variant mb-12">Last Updated: June 16, 2026</p>

      <div className="max-w-none space-y-12 text-on-surface-variant leading-relaxed text-lg">
        <section className="space-y-4">
          <p>
            At RR Computers ("RR Computers," "we," "our," or "us"), we strive to provide reliable technology infrastructure services. This Refund Policy outlines the terms under which refunds may be issued for our products and services.
          </p>
        </section>

        <hr className="border-white/10" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. General Refund Policy</h2>
          <p>Refund eligibility depends on the type of service purchased. Each service category has specific terms outlined below.</p>
          <p>All refund requests must be submitted through our support channels and will be reviewed on a case-by-case basis.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Dedicated Servers</h2>
          <p>Dedicated server rental services are generally non-refundable once the server has been provisioned and access credentials have been delivered.</p>
          <p>Exceptions may be made in cases where:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>the server was not provisioned within the advertised timeframe;</li>
            <li>hardware specifications do not match the ordered configuration;</li>
            <li>the service was charged in error or as a duplicate payment.</li>
          </ul>
          <p>Refund requests for dedicated servers must be submitted within 7 days of the initial provisioning date.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. VPS Hosting</h2>
          <p>VPS hosting plans may be eligible for a prorated refund under the following conditions:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>the request is made within 14 days of the initial purchase;</li>
            <li>the service has not been used extensively (exceeding fair usage limits);</li>
            <li>the service does not meet the specifications advertised at the time of purchase.</li>
          </ul>
          <p>After the 14-day period, VPS hosting fees are generally non-refundable.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Cloud Infrastructure</h2>
          <p>Cloud infrastructure services are billed based on actual resource usage. As such:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>usage-based charges are non-refundable;</li>
            <li>prepaid credits or reserved instances may be eligible for partial refund within 30 days of purchase;</li>
            <li>refunds for billing errors will be credited to the account or refunded to the original payment method.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Managed Hosting</h2>
          <p>Managed hosting services follow the same refund terms as the underlying server product (dedicated or VPS).</p>
          <p>Management fees are non-refundable once services have commenced.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Computer Sales</h2>
          <p>Computer hardware sales are subject to the following terms:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>unopened and unused products may be returned within 14 days of delivery for a full refund;</li>
            <li>opened products may be eligible for exchange or partial refund if defective;</li>
            <li>custom-built systems are non-refundable once assembly has begun;</li>
            <li>return shipping costs are the responsibility of the customer unless the product is defective.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">7. IT Solutions & Consulting</h2>
          <p>Professional services, including IT consulting and infrastructure deployment, are non-refundable once work has commenced.</p>
          <p>If services have not yet begun, a full refund may be issued upon request.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">8. How to Request a Refund</h2>
          <p>To request a refund, please contact our support team:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Email: <a href="mailto:support@oryxa.us" className="text-primary hover:text-primary-light transition-colors">support@oryxa.us</a></li>
            <li>Phone: 01881-982949</li>
          </ul>
          <p>Please include:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>your account details or order number;</li>
            <li>the service or product in question;</li>
            <li>the reason for the refund request;</li>
            <li>any relevant supporting documentation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">9. Refund Processing</h2>
          <p>Approved refunds will be processed within 14 business days and issued to the original payment method.</p>
          <p>Depending on your payment provider, it may take additional time for the refund to appear on your statement.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">10. Non-Refundable Items</h2>
          <p>The following are generally non-refundable:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>domain name registrations and renewals;</li>
            <li>SSL certificates once issued;</li>
            <li>third-party software licenses;</li>
            <li>custom configuration or setup fees;</li>
            <li>services consumed beyond the refund eligibility period.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">11. Chargebacks</h2>
          <p>We strongly encourage customers to contact us before initiating a chargeback with their payment provider. Chargebacks may result in:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>immediate suspension of all services;</li>
            <li>additional chargeback processing fees;</li>
            <li>permanent termination of the account.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">12. Changes to This Policy</h2>
          <p>RR Computers reserves the right to update this Refund Policy at any time. Changes will be effective upon posting to our website.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">13. Contact Us</h2>
          <p>If you have questions regarding this Refund Policy, please contact us:</p>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-3 mt-6">
            <p className="font-bold text-white text-xl">RR Computers</p>
            <p>Email: <a href="mailto:support@oryxa.us" className="text-primary hover:text-primary-light transition-colors">support@oryxa.us</a></p>
            <p>Phone: 01881-982949</p>
            <p>Website: <a href="https://oryxa.us" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">https://oryxa.us</a></p>
          </div>
        </section>

        <hr className="border-white/10 mt-12" />
        
        <p className="text-center font-bold text-white pt-8 italic text-xl">
          By purchasing services from RR Computers, you acknowledge that you have read and understood this Refund Policy.
        </p>
      </div>
    </div>
  )
}
