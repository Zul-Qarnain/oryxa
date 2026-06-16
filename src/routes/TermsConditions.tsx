import React from 'react'

export function TermsConditions() {
  return (
    <div className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
      <p className="text-on-surface-variant mb-12">Last Updated: June 16, 2026</p>

      <div className="max-w-none space-y-12 text-on-surface-variant leading-relaxed text-lg">
        <section className="space-y-4">
          <p>
            Welcome to RR Computers. These Terms & Conditions ("Terms") govern your access to and use of the RR Computers platform, website, infrastructure services, APIs, and related services ("Services"), including dedicated server rental, VPS hosting, cloud infrastructure, IT solutions, and computer sales.
          </p>
          <p>
            By accessing or using RR Computers services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our Services.
          </p>
        </section>

        <hr className="border-white/10" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. About RR Computers</h2>
          <p>
            RR Computers is a technology infrastructure company providing dedicated server rental, VPS hosting, cloud infrastructure, managed hosting, IT consulting, computer sales, and related technology services for businesses, startups, agencies, developers, and enterprises.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and legally capable of entering into binding agreements to use our Services.
          </p>
          <p>By using RR Computers services, you represent and warrant that:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>you have the legal authority to use the services;</li>
            <li>all information provided is accurate and up to date;</li>
            <li>your use complies with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. User Accounts</h2>
          <p>To access certain features, you may need to create an account.</p>
          <p>You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>maintaining the security of your account;</li>
            <li>protecting your login credentials and server access keys;</li>
            <li>all activity conducted under your account;</li>
            <li>ensuring any connected services are properly authorized.</li>
          </ul>
          <p>You must immediately notify us of any unauthorized access or security breach.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Acceptable Use</h2>
          <p>You agree NOT to use RR Computers services to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>violate laws or regulations;</li>
            <li>send spam or unauthorized marketing;</li>
            <li>impersonate individuals or organizations;</li>
            <li>distribute malware or harmful code;</li>
            <li>engage in fraudulent, abusive, or deceptive behavior;</li>
            <li>collect unauthorized data from users;</li>
            <li>interfere with infrastructure security or network operations;</li>
            <li>conduct unauthorized network scanning, penetration testing, or denial-of-service attacks;</li>
            <li>host illegal content or engage in copyright infringement.</li>
          </ul>
          <p>You are solely responsible for the content, applications, and services running on your provisioned infrastructure.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Service Descriptions</h2>
          <p>RR Computers provides the following services:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="text-white">Dedicated Server Rental:</strong> Physical server hardware provisioned exclusively for your use;</li>
            <li><strong className="text-white">VPS Hosting:</strong> Virtual private servers with allocated resources;</li>
            <li><strong className="text-white">Cloud Infrastructure:</strong> Scalable cloud computing resources;</li>
            <li><strong className="text-white">Managed Hosting:</strong> Fully managed server environments with monitoring and support;</li>
            <li><strong className="text-white">IT Solutions:</strong> Infrastructure consulting, deployment, and management;</li>
            <li><strong className="text-white">Computer Sales:</strong> Business-grade hardware and peripherals.</li>
          </ul>
          <p>Service specifications, features, and availability are subject to the details provided at the time of purchase.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Service Level Agreement</h2>
          <p>RR Computers strives to maintain a 99.9% uptime for infrastructure services.</p>
          <p>However, services may occasionally be affected by:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>scheduled maintenance;</li>
            <li>hardware failures;</li>
            <li>network disruptions;</li>
            <li>third-party outages;</li>
            <li>security incidents;</li>
            <li>force majeure events.</li>
          </ul>
          <p>Scheduled maintenance will be communicated in advance where possible. RR Computers is not liable for damages resulting from temporary downtime or interruptions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">7. Subscription & Billing</h2>
          <p>Certain services require a paid subscription or one-time payment.</p>
          <p>By purchasing services, you agree:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>to provide valid billing information;</li>
            <li>to pay all applicable fees;</li>
            <li>that subscriptions may renew automatically unless canceled before the renewal date.</li>
          </ul>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>modify pricing with advance notice;</li>
            <li>update plan specifications;</li>
            <li>suspend unpaid accounts;</li>
            <li>restrict access for abuse or excessive usage.</li>
          </ul>
          <p>Please refer to our Refund Policy for information about refund eligibility.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">8. Fair Usage Policy</h2>
          <p>To maintain infrastructure stability and service quality, users must comply with reasonable usage limits associated with their service plans.</p>
          <p>Excessive or abusive use may result in:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>temporary rate limits;</li>
            <li>account review;</li>
            <li>restricted functionality;</li>
            <li>suspension or termination.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">9. Data & Backups</h2>
          <p>Unless explicitly included in your service plan, RR Computers does not provide automatic data backup services.</p>
          <p>Customers are responsible for:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>maintaining their own backups of all data stored on our infrastructure;</li>
            <li>ensuring data integrity and availability;</li>
            <li>implementing appropriate disaster recovery plans.</li>
          </ul>
          <p>RR Computers is not liable for data loss resulting from hardware failure, user error, or other causes unless caused by our gross negligence.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">10. Intellectual Property</h2>
          <p>All content, branding, software, designs, interfaces, code, graphics, and platform technology related to RR Computers are the exclusive property of RR Computers and its licensors.</p>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>copy or reproduce the platform;</li>
            <li>reverse engineer our systems;</li>
            <li>resell or redistribute our Services;</li>
            <li>exploit our intellectual property without written permission.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">11. Privacy & Data</h2>
          <p>By using RR Computers services, you consent to the collection and processing of data necessary to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>provide and improve Services;</li>
            <li>operate infrastructure systems;</li>
            <li>maintain network security;</li>
            <li>perform analytics and diagnostics;</li>
            <li>deliver customer support.</li>
          </ul>
          <p>We do not sell personal customer data to third parties.</p>
          <p>For more information, please review our Privacy Policy.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, RR Computers shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>indirect damages;</li>
            <li>loss of profits;</li>
            <li>business interruption;</li>
            <li>lost revenue;</li>
            <li>data loss;</li>
            <li>reputational harm;</li>
            <li>consequential or incidental damages.</li>
          </ul>
          <p>Your use of the infrastructure is at your own risk.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">13. Account Suspension & Termination</h2>
          <p>We reserve the right to suspend or terminate accounts that:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>violate these Terms;</li>
            <li>abuse infrastructure systems;</li>
            <li>engage in illegal activities;</li>
            <li>create security risks;</li>
            <li>fail to pay outstanding invoices.</li>
          </ul>
          <p>Termination may occur without prior notice in severe cases. Upon termination, data stored on our infrastructure may be deleted after a reasonable retention period.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">14. Changes to Terms</h2>
          <p>We may update these Terms periodically.</p>
          <p>Updated versions will become effective upon posting to our website. Continued use of the Services after updates constitutes acceptance of the revised Terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">15. Contact Information</h2>
          <p>If you have questions regarding these Terms, please contact us:</p>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-3 mt-6">
            <p className="font-bold text-white text-xl">RR Computers</p>
            <p>Email: <a href="mailto:support@oryxa.us" className="text-primary hover:text-primary-light transition-colors">support@oryxa.us</a></p>
            <p>Phone: 01881-982949</p>
            <p>Website: <a href="https://oryxa.us" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">https://oryxa.us</a></p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">16. Governing Law</h2>
          <p>These Terms shall be governed and interpreted in accordance with applicable laws and regulations within the jurisdiction in which RR Computers operates.</p>
        </section>

        <hr className="border-white/10 mt-12" />
        
        <p className="text-center font-bold text-white pt-8 italic text-xl">
          By using RR Computers services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
        </p>
      </div>
    </div>
  )
}
