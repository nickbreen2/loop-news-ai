import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | Interloop News',
  description: 'Terms of Service for Interloop News — interloop.news',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="px-6 pt-28 sm:pt-32 pb-12 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B8CAE' }}>
          Legal
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Terms of Service
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
              Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before subscribing to our mailing list or
              otherwise engaging with our services. These Terms constitute a legally binding agreement between you
              (&ldquo;Subscriber,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Interloop News (&ldquo;Interloop,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
              subscribing to our mailing list, you agree to be bound by these Terms.
            </p>
            <p className="leading-relaxed mb-10" style={{ color: '#A8B8CC' }}>
              If you do not agree to these Terms, please do not subscribe to our mailing list.
            </p>

            <hr className="mb-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

            {/* Section 1 */}
            <Section number="1" title="About Interloop News">
              <p>
                Interloop News is a professional industry newsletter service operating at interloop.news. We provide
                curated news, analysis, and commentary delivered exclusively via email to our subscriber base of industry
                professionals. Our service is focused on delivering timely, relevant insights to professionals seeking to
                stay informed within their field.
              </p>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Eligibility">
              <p className="mb-4">By subscribing to our services, you represent and warrant that:</p>
              <ul>
                <li>You are at least 18 years of age and are subscribing in a professional capacity;</li>
                <li>You have the legal capacity to enter into a binding agreement;</li>
                <li>You are not prohibited from using our services under any applicable laws;</li>
                <li>All information you provide to us is accurate, current, and complete.</li>
              </ul>
              <p className="mt-4">We reserve the right to refuse service to anyone at our sole discretion.</p>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Mailing List Subscription">
              <Subsection title="3.1 Subscription">
                By subscribing to our mailing list, you consent to receive periodic email communications from Interloop
                News, which may include industry newsletters, news briefings, editorial analysis, and occasional
                service-related updates relevant to professionals in your field.
              </Subsection>
              <Subsection title="3.2 Opt-Out / Unsubscribe">
                You may unsubscribe from our mailing list at any time by clicking the &ldquo;Unsubscribe&rdquo; link included in
                every email we send, or by contacting us directly at{' '}
                <a href="mailto:support@interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                  support@interloop.news
                </a>. Upon unsubscribing, we will process your request within 30 days. Please note that even after
                unsubscribing from marketing emails, we may still send you essential service-related communications.
              </Subsection>
              <Subsection title="3.3 Email Accuracy">
                You are responsible for providing and maintaining a valid email address. We are not liable for
                undelivered emails resulting from inaccurate or outdated contact information.
              </Subsection>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Acceptable Use">
              <p className="mb-4">When using our services, you agree not to:</p>
              <ul>
                <li>Use our services for any unlawful purpose or in violation of any applicable local, national, or international law or regulation;</li>
                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of our content without our express written permission;</li>
                <li>Transmit any unsolicited commercial communications or spam using our platform;</li>
                <li>Attempt to gain unauthorized access to our systems, servers, or databases;</li>
                <li>Interfere with or disrupt the integrity or performance of our website or services;</li>
                <li>Use any automated means (bots, scrapers, crawlers) to access or collect content from our website without prior written consent;</li>
                <li>Impersonate Interloop News, its staff, or any other person or entity;</li>
                <li>Upload or transmit viruses, malware, or any other malicious code;</li>
                <li>Engage in any conduct that restricts or inhibits any other user&apos;s enjoyment of our services.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to terminate your access to our services immediately and without notice if you
                violate any of these provisions.
              </p>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Intellectual Property">
              <Subsection title="5.1 Ownership">
                All content published in our newsletter, including but not limited to articles, analysis, editorial
                commentary, graphics, logos, and any other materials, is the exclusive property of Interloop News or
                its content licensors and is protected by applicable copyright, trademark, and other intellectual
                property laws.
              </Subsection>
              <Subsection title="5.2 Limited License">
                <p className="mb-3">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our
                  content for your personal, non-commercial use only. This license does not include the right to:
                </p>
                <ul>
                  <li>Reproduce, publish, or distribute our content without prior written permission;</li>
                  <li>Modify or create derivative works based on our content;</li>
                  <li>Use our content for commercial purposes or public display;</li>
                  <li>Remove or alter any copyright, trademark, or other proprietary notices.</li>
                </ul>
              </Subsection>
              <Subsection title="5.3 Trademarks">
                &ldquo;Interloop News,&rdquo; &ldquo;interloop.news,&rdquo; and associated logos and marks are trademarks of Interloop
                News. You may not use these marks without our prior written consent.
              </Subsection>
              <Subsection title="5.4 User-Submitted Content">
                If you submit any content to us (such as letters, feedback, or comments), you grant Interloop News a
                royalty-free, worldwide, perpetual license to use, reproduce, publish, and distribute that content in
                connection with our services. You represent that you own or have the right to submit such content and
                that it does not violate any third-party rights.
              </Subsection>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Disclaimer of Warranties">
              <p className="mb-4 uppercase text-xs tracking-wide font-semibold" style={{ color: '#A8B8CC' }}>
                Our website and services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of
                any kind, either express or implied. To the fullest extent permitted by law, Interloop News disclaims
                all warranties, including but not limited to:
              </p>
              <ul>
                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement;</li>
                <li>Warranties that our services will be uninterrupted, error-free, or free of viruses or other harmful components;</li>
                <li>Warranties regarding the accuracy, reliability, timeliness, or completeness of any content published on our platform.</li>
              </ul>
              <p className="mt-4">
                Content in our newsletter is provided for professional informational purposes only and should not be
                construed as legal, financial, investment, regulatory, or other professional advice specific to your
                situation. You should seek independent professional counsel before acting on any information or
                analysis published in our newsletter.
              </p>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Limitation of Liability">
              <p className="mb-4 uppercase text-xs tracking-wide font-semibold" style={{ color: '#A8B8CC' }}>
                To the maximum extent permitted by applicable law, Interloop News and its officers, directors,
                employees, contributors, and affiliates shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to your use of our services, including
                but not limited to:
              </p>
              <ul>
                <li>Loss of profits, revenue, data, goodwill, or other intangible losses;</li>
                <li>Unauthorized access to or alteration of your data;</li>
                <li>Any errors or omissions in content published on our platform;</li>
                <li>Any interruption or cessation of our services.</li>
              </ul>
              <p className="mt-4">
                In jurisdictions that do not allow the exclusion or limitation of liability for certain types of
                damages, our liability is limited to the fullest extent permitted by law.
              </p>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="Third-Party Links and Content">
              <p>
                Our website and newsletters may contain links to third-party websites, services, or content. These
                links are provided for your convenience only. Interloop News does not endorse, control, or assume
                responsibility for the content, privacy practices, or terms of any third-party sites. We encourage
                you to review the terms and privacy policies of any third-party sites you visit.
              </p>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="Privacy">
              <p>
                Your use of our services is also governed by our Privacy Policy, which is incorporated into these
                Terms by reference. Please review our Privacy Policy to understand our practices regarding the
                collection and use of your personal information. A copy is available upon request at{' '}
                <a href="mailto:support@interloop.news" className="hover:text-white transition-colors" style={{ color: '#6B9FCC' }}>
                  support@interloop.news
                </a>.
              </p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Interloop News and its officers, directors,
                employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs,
                or expenses (including reasonable legal fees) arising out of or in connection with: (a) your use of
                our services; (b) your violation of these Terms; (c) your violation of any third-party rights; or
                (d) any content you submit to us.
              </p>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Modifications to Services and Terms">
              <Subsection title="11.1 Changes to Services">
                We reserve the right to modify, suspend, or discontinue our services (or any part thereof) at any
                time, with or without notice. We shall not be liable to you or any third party for any such
                modification, suspension, or discontinuation.
              </Subsection>
              <Subsection title="11.2 Changes to Terms">
                We may update these Terms from time to time. When we make material changes, we will update the
                &ldquo;Effective Date&rdquo; at the top of this page and notify subscribers via email. Your continued use of
                our services after any changes take effect constitutes your acceptance of the revised Terms. If you
                do not agree to the updated Terms, you must stop using our services and unsubscribe from our mailing
                list.
              </Subsection>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Governing Law and Dispute Resolution">
              <Subsection title="12.1 Governing Law">
                These Terms shall be governed by and construed in accordance with the laws of the United States and
                the state in which Interloop News is headquartered, without regard to its conflict of law provisions.
              </Subsection>
              <Subsection title="12.2 Dispute Resolution">
                Any disputes arising out of or relating to these Terms or our services shall first be attempted to
                be resolved through good-faith negotiation. If a resolution cannot be reached informally, disputes
                shall be submitted to binding arbitration in accordance with applicable arbitration rules, except
                that either party may seek injunctive or other equitable relief in a court of competent jurisdiction
                where necessary to protect intellectual property rights or prevent irreparable harm.
              </Subsection>
              <Subsection title="12.3 Class Action Waiver">
                To the extent permitted by law, you agree to resolve disputes with us on an individual basis only,
                and you waive any right to participate in a class action lawsuit or class-wide arbitration.
              </Subsection>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Termination">
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, without
                notice or liability, for any reason, including if we believe you have violated these Terms. Upon
                termination, your right to use our services will immediately cease. Sections of these Terms that by
                their nature should survive termination (including intellectual property, disclaimers, limitations
                of liability, and indemnification) shall survive.
              </p>
            </Section>

            {/* Section 14 */}
            <Section number="14" title="Severability">
              <p>
                If any provision of these Terms is found to be invalid, unlawful, or unenforceable by a court of
                competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it
                enforceable, or severed if modification is not possible, and the remaining provisions shall continue
                in full force and effect.
              </p>
            </Section>

            {/* Section 15 */}
            <Section number="15" title="Entire Agreement">
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                Interloop News with respect to your use of our services and supersede all prior agreements,
                understandings, or representations, whether written or oral, relating to the same subject matter.
              </p>
            </Section>

            {/* Section 16 */}
            <Section number="16" title="Contact Us" last>
              <p className="mb-6">
                If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
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
                We aim to respond to all inquiries within 5 business days.
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
      <h2
        className="font-display text-xl font-semibold text-white mb-4 flex items-baseline gap-3"
      >
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
