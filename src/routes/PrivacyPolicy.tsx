import React from 'react'

export function PrivacyPolicy() {
  return (
    <div className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="text-on-surface-variant mb-12">Last Updated: June 16, 2026</p>

      <div className="max-w-none space-y-12 text-on-surface-variant leading-relaxed text-lg">
        <section className="space-y-4">
          <p>
            At RR Computers ("RR Computers," "we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, and protect your information when you access our website, platform, and related services ("Services"), including dedicated server rental, VPS hosting, cloud infrastructure, IT solutions, and computer sales.
          </p>
          <p>
            By using RR Computers services, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <hr className="border-white/10" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Account Information</h3>
              <p>When you create an account or use our Services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Business name</li>
                <li>Contact information</li>
                <li>Login credentials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Server & Infrastructure Data</h3>
              <p>To provide infrastructure services, we may process:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Server configuration and usage data</li>
                <li>Network traffic and bandwidth metrics</li>
                <li>Resource utilization statistics</li>
                <li>System logs and diagnostic data</li>
                <li>IP addresses and connection details</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Payment Information</h3>
              <p>For paid services, payment details may be processed securely through third-party payment providers. RR Computers does not directly store full payment card information.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Usage & Analytics Data</h3>
              <p>We automatically collect certain technical information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Usage patterns</li>
                <li>Platform interactions</li>
                <li>Diagnostic and performance data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Communication Data</h3>
              <p>We may collect records of:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>support requests</li>
                <li>emails</li>
                <li>feedback submissions</li>
                <li>customer communications</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>provide and operate our infrastructure services;</li>
            <li>provision and manage servers, hosting, and cloud resources;</li>
            <li>monitor system performance and reliability;</li>
            <li>process subscriptions and billing;</li>
            <li>manage customer support;</li>
            <li>monitor infrastructure security;</li>
            <li>develop new services and improve existing offerings;</li>
            <li>analyze usage trends and performance;</li>
            <li>prevent fraud, abuse, or unauthorized activity;</li>
            <li>comply with legal obligations.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Infrastructure & Server Processing</h2>
          <p>RR Computers operates technology infrastructure systems to provide:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>dedicated server hosting;</li>
            <li>virtual private server (VPS) hosting;</li>
            <li>cloud computing resources;</li>
            <li>managed hosting services;</li>
            <li>IT infrastructure management.</li>
          </ul>
          <p>Certain data may be processed by our systems to maintain server performance, security, and network operations.</p>
          <p>We do not access, monitor, or sell the data stored on your servers without your explicit authorization, except as required by law.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Marketing Communications</h2>
          <p>We may send:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>service updates;</li>
            <li>onboarding emails;</li>
            <li>product announcements;</li>
            <li>infrastructure updates;</li>
            <li>promotional communications.</li>
          </ul>
          <p>You may unsubscribe from marketing communications at any time using the unsubscribe link or by contacting us directly.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Third-Party Services & Integrations</h2>
          <p>RR Computers utilizes third-party services including:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>data center providers</li>
            <li>network connectivity providers</li>
            <li>cloud platform partners</li>
            <li>analytics providers</li>
            <li>payment processors</li>
            <li>hardware suppliers</li>
          </ul>
          <p>These services may collect or process data according to their own privacy policies and terms.</p>
          <p>We are not responsible for third-party privacy practices.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Data Sharing</h2>
          <p>We do NOT sell your personal data.</p>
          <p>We may share limited information only:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>with trusted service providers necessary to deliver our Services;</li>
            <li>when legally required;</li>
            <li>to protect infrastructure security and rights;</li>
            <li>during mergers, acquisitions, or business transfers.</li>
          </ul>
          <p>All third-party providers are expected to maintain appropriate security and confidentiality standards.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">7. Data Security</h2>
          <p>We implement technical, administrative, and organizational safeguards designed to protect your information against:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>unauthorized access;</li>
            <li>misuse;</li>
            <li>disclosure;</li>
            <li>alteration;</li>
            <li>destruction.</li>
          </ul>
          <p>Our infrastructure includes enterprise-grade security measures such as DDoS protection, firewalls, encryption, and regular security audits.</p>
          <p>However, no internet transmission or storage system can be guaranteed 100% secure.</p>
          <p>Users are responsible for maintaining the confidentiality of their account credentials and server access keys.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">8. Data Retention</h2>
          <p>We retain information only as long as necessary to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>provide Services;</li>
            <li>comply with legal obligations;</li>
            <li>resolve disputes;</li>
            <li>enforce agreements;</li>
            <li>maintain infrastructure operations.</li>
          </ul>
          <p>We may securely delete or anonymize data when it is no longer required.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">9. Your Rights</h2>
          <p>Depending on your location and applicable laws, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>access your data;</li>
            <li>update inaccurate information;</li>
            <li>request deletion of personal data;</li>
            <li>object to certain processing activities;</li>
            <li>request a copy of your data;</li>
            <li>opt out of marketing communications.</li>
          </ul>
          <p>Requests may be submitted by contacting us directly.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">10. Cookies & Analytics</h2>
          <p>RR Computers may use:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>cookies;</li>
            <li>analytics tools;</li>
            <li>tracking technologies;</li>
            <li>session storage;</li>
            <li>performance monitoring systems.</li>
          </ul>
          <p>These technologies help us:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>improve user experience;</li>
            <li>understand usage behavior;</li>
            <li>optimize platform performance;</li>
            <li>enhance security.</li>
          </ul>
          <p>You may disable cookies through your browser settings, though some features may not function properly.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">11. International Data Transfers</h2>
          <p>Your information may be processed and stored in countries outside your jurisdiction where our data centers or service providers operate.</p>
          <p>By using RR Computers services, you consent to such transfers where legally permitted.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">12. Children's Privacy</h2>
          <p>RR Computers services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">13. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically.</p>
          <p>Updated versions will be posted on our website with a revised "Last Updated" date. Continued use of our Services after updates constitutes acceptance of the revised policy.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">14. Contact Us</h2>
          <p>If you have questions regarding this Privacy Policy or our data practices, please contact us:</p>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-3 mt-6">
            <p className="font-bold text-white text-xl">RR Computers</p>
            <p>Email: <a href="mailto:support@oryxa.us" className="text-primary hover:text-primary-light transition-colors">support@oryxa.us</a></p>
            <p>Phone: 01881-982949</p>
            <p>Website: <a href="https://oryxa.us" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">https://oryxa.us</a></p>
          </div>
        </section>

        <hr className="border-white/10 mt-12" />
        
        <p className="text-center font-bold text-white pt-8 italic text-xl">
          By using RR Computers services, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  )
}
