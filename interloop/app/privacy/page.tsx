import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Interloop News',
  description: 'Privacy Policy for Interloop News — interloop.news',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="px-6 pt-28 sm:pt-32 pb-12 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B8CAE' }}>
          Legal
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-base" style={{ color: '#A8B8CC' }}>
          interloop.news &nbsp;&middot;&nbsp; Effective Date: February 24, 2026
        </p>
      </section>

      {/* Content */}
      <section className="flex-1 px-6 pb-20">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="prose-content" style={{ color: '#C8D8E8' }}>

            {/* Intro */}
            <p className="leading-relaxed mb-10" style={{ color: '#A8B8CC' }}>
              This Privacy Policy describes how Interloop News (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operating at
              interloop.news, collects, uses, stores, and protects your personal information when you subscribe to
              our mailing list or otherwise interact with our services. By subscribing to our mailing list, you
              agree to the practices described in this policy.
            </p>

            <hr className="mb-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

            {/* Section 1 */}
            <Section number="1" title="Information We Collect">
              <Subsection title="1.1 Information You Provide Directly">
                <p className="mb-3">When you subscribe to our mailing list, we collect:</p>
                <ul>
                  <li>Email address (required)</li>
                  <li>First and/or last name (if provided)</li>
                  <li>Any preferences or interests you indicate during signup</li>
                  <li>Any additional information you voluntarily share in forms or communications with us</li>
                </ul>
              </Subsection>
              <Subsection title="1.2 Information Collected Automatically">
                <p className="mb-3">When you interact with our emails or website, we may automatically collect:</p>
                <ul>
                  <li>Email open rates and click-through data (via tracking pixels)</li>
                  <li>IP address and general geographic location (country/region level)</li>
                  <li>Device type, operating system, and email client used</li>
                  <li>Date and time of interactions</li>
                  <li>Pages visited on interloop.news, referring URLs, and browsing behavior on our site</li>
                  <li>Cookies and similar tracking technologies (see Section 7)</li>
                </ul>
              </Subsection>
              <Subsection title="1.3 Information from Third Parties">
                We may receive information about you from third-party sources, such as email service providers,
                analytics platforms, or social media platforms if you interact with us through those channels.
              </Subsection>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="How We Use Your Information">
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul>
                <li>To deliver our newsletter and email communications you have subscribed to</li>
                <li>To personalize content and recommendations based on your interests</li>
                <li>To send transactional emails (e.g., subscription confirmations, password resets)</li>
                <li>To analyze and improve the performance of our emails and website</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To detect and prevent fraud, spam, or other abusive behavior</li>
                <li>To communicate updates about changes to our services or policies</li>
                <li>To conduct surveys or research to improve our offerings (with your consent where required)</li>
              </ul>
              <p className="mt-4">
                We will not use your personal information for purposes incompatible with those described above
                without your prior consent.
              </p>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Legal Basis for Processing (GDPR / International Users)">
              <p className="mb-4">
                If you are located in the European Economic Area (EEA), United Kingdom, or other jurisdictions
                with similar privacy laws, we process your personal data under the following legal bases:
              </p>
              <ul>
                <li><strong className="text-white">Consent:</strong> You have given explicit consent to receive our newsletter by subscribing.</li>
                <li><strong className="text-white">Legitimate Interests:</strong> To analyze and improve our services in ways that do not override your rights.</li>
                <li><strong className="text-white">Legal Obligation:</strong> Where we are required to process data to comply with applicable law.</li>
                <li><strong className="text-white">Contract Performance:</strong> To fulfill our obligations when you subscribe or use our services.</li>
              </ul>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="How We Share Your Information">
              <p className="mb-6">
                We do not sell, rent, or trade your personal information to third parties. We may share your data
                in the following limited circumstances:
              </p>
              <Subsection title="4.1 Service Providers">
                <p className="mb-3">
                  We work with trusted third-party vendors who assist us in operating our services, including:
                </p>
                <ul>
                  <li>Email delivery and marketing automation providers (e.g., Mailchimp, ConvertKit, or similar)</li>
                  <li>Website hosting and content delivery providers</li>
                  <li>Analytics and reporting tools</li>
                  <li>Customer support platforms</li>
                </ul>
                <p className="mt-3">
                  These providers are contractually bound to use your data only for the purposes we specify and
                  to maintain appropriate security standards.
                </p>
              </Subsection>
              <Subsection title="4.2 Legal Requirements">
                We may disclose your information if required to do so by law, court order, or governmental
                authority, or where we believe disclosure is necessary to protect our rights, your safety, or
                the safety of others.
              </Subsection>
              <Subsection title="4.3 Business Transfers">
                In the event of a merger, acquisition, or sale of all or part of our assets, your information
                may be transferred as part of that transaction. We will notify you via email and/or a prominent
                notice on our website of any such change in ownership.
              </Subsection>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Data Retention">
              <p className="mb-4">
                We retain your personal information for as long as you remain subscribed to our mailing list.
                If you unsubscribe, we will remove your email from our active mailing lists within 30 days.
                However, we may retain certain records (such as a record of your unsubscribe request) for a
                reasonable period to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>You may request deletion of your data at any time (see Section 8).</p>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Data Security">
              <p className="mb-4">
                We take the security of your personal information seriously and implement industry-standard
                technical and organizational measures to protect it, including:
              </p>
              <ul>
                <li>Encrypted transmission of data using SSL/TLS</li>
                <li>Secure storage with access controls limiting who can view your data</li>
                <li>Regular security assessments and updates to our systems</li>
                <li>Data minimization practices — we only collect what we need</li>
              </ul>
              <p className="mt-4">
                Despite our efforts, no method of transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security, but we will notify you promptly in the event of
                a data breach that affects your personal information, as required by applicable law.
              </p>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Cookies and Tracking Technologies">
              <p className="mb-4">
                Our website (interloop.news) uses cookies and similar technologies to enhance your experience
                and collect analytics data. Types of cookies we use include:
              </p>
              <ul>
                <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function (e.g., session management).</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics).</li>
                <li><strong className="text-white">Marketing/Tracking Pixels:</strong> Embedded in our emails to measure open rates and engagement.</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. Note that disabling certain
                cookies may affect the functionality of our website. You may also opt out of email tracking by
                disabling image loading in your email client.
              </p>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="Your Rights and Choices">
              <p className="mb-6">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <Subsection title="8.1 Unsubscribe / Opt-Out">
                You can unsubscribe from our mailing list at any time by clicking the &ldquo;Unsubscribe&rdquo; link found
                at the bottom of every email we send, or by emailing us at{' '}
                <a href="mailto:support@interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                  support@interloop.news
                </a>.
              </Subsection>
              <Subsection title="8.2 Access and Portability">
                You have the right to request a copy of the personal data we hold about you in a structured,
                machine-readable format.
              </Subsection>
              <Subsection title="8.3 Correction">
                If any information we hold about you is inaccurate, you have the right to request that we
                correct it.
              </Subsection>
              <Subsection title='8.4 Deletion ("Right to be Forgotten")'>
                You may request that we delete your personal data. We will fulfill this request unless we are
                required to retain it for legal or legitimate business reasons.
              </Subsection>
              <Subsection title="8.5 Restriction and Objection">
                You have the right to request that we restrict processing of your data or to object to certain
                processing activities, including direct marketing.
              </Subsection>
              <Subsection title="8.6 Withdraw Consent">
                Where we rely on your consent to process your data, you may withdraw that consent at any time
                without affecting the lawfulness of processing carried out prior to withdrawal.
              </Subsection>
              <p className="mt-2">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:support@interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                  support@interloop.news
                </a>. We will respond to your request within 30 days (or as required by applicable law).
              </p>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="Children's Privacy">
              <p>
                Our mailing list and services are not directed at children under the age of 13 (or 16 where
                required by applicable law, such as under GDPR). We do not knowingly collect personal
                information from children. If you believe we have inadvertently collected data from a child,
                please contact us immediately at{' '}
                <a href="mailto:support@interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                  support@interloop.news
                </a>{' '}
                and we will take steps to delete it.
              </p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="International Data Transfers">
              <p className="mb-4">
                Our services are operated from the United States. If you are located outside the U.S., please
                be aware that your information may be transferred to and processed in the U.S. or other
                countries that may have different data protection laws than your country of residence.
              </p>
              <p>
                Where required by law (such as GDPR), we ensure appropriate safeguards are in place for such
                transfers, including Standard Contractual Clauses or other approved mechanisms.
              </p>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Third-Party Links">
              <p>
                Our emails and website may contain links to third-party websites or services. This Privacy
                Policy does not apply to those sites. We encourage you to review the privacy policies of any
                third-party services you visit, as we have no control over their practices.
              </p>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Changes to This Privacy Policy">
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices,
                technologies, or legal requirements. When we make material changes, we will:
              </p>
              <ul>
                <li>Update the &ldquo;Effective Date&rdquo; at the top of this policy</li>
                <li>Send a notification to subscribers via email</li>
                <li>Post a prominent notice on interloop.news</li>
              </ul>
              <p className="mt-4">
                Your continued subscription to our mailing list after changes take effect constitutes your
                acceptance of the updated policy.
              </p>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Contact Us" last>
              <p className="mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p className="font-semibold text-white mb-1">Interloop News</p>
                <p className="mb-1">
                  Website:{' '}
                  <a href="https://interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                    interloop.news
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:support@interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                    support@interloop.news
                  </a>
                </p>
              </div>
              <p className="mt-6" style={{ color: '#A8B8CC' }}>
                If you are located in the EU/EEA and believe your rights have not been adequately addressed,
                you have the right to lodge a complaint with your local data protection authority.
              </p>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ── Sub-components ─────────────────────────────────────────── */

function Section({
  number,
  title,
  children,
  last = false,
}: {
  number: string
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div className={last ? '' : 'mb-10'}>
      <h2 className="font-display text-xl font-semibold text-white mb-4 flex items-baseline gap-3">
        <span
          className="text-xs font-bold tracking-widest shrink-0 mt-0.5"
          style={{ color: '#6B8CAE' }}
        >
          {number}.
        </span>
        {title}
      </h2>
      <div className="text-base leading-relaxed space-y-3" style={{ color: '#A8B8CC' }}>
        {children}
      </div>
      {!last && <hr className="mt-10" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />}
    </div>
  )
}

function Subsection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="font-display text-base font-semibold text-white mb-2">{title}</h3>
      <div className="text-base leading-relaxed" style={{ color: '#A8B8CC' }}>
        {children}
      </div>
    </div>
  )
}
