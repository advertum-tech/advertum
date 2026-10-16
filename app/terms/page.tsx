import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Advertum",
  description:
    "Terms of Service for advertum.com, the website of Advertum Tech OÜ, an Estonian software development and automation studio.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto w-[90%] max-w-[70ch] py-16 max-sm:py-10 leading-relaxed">
      <h1 className="text-4xl max-sm:text-3xl mt-0 mb-3">Terms of Service</h1>
      <p className="mb-10 opacity-60">Last updated: 12 June 2026</p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">1. About us</h2>
      <p className="mb-4">
        This website, advertum.com (the &quot;Website&quot;), is operated by
        Advertum Tech OÜ, a private limited company incorporated in Estonia
        (&quot;Advertum&quot;, &quot;we&quot;,
        &quot;us&quot;). You can contact us at{" "}
        <a href="mailto:hello@advertum.com">hello@advertum.com</a>.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">2. Our services</h2>
      <p className="mb-4">
        Advertum provides custom software development, product development and
        product management services to business clients. We work with clients
        under individually negotiated service agreements. Nothing on this
        Website constitutes an offer capable of acceptance; all engagements are
        subject to a separate written agreement between Advertum and the
        client.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        3. Use of the Website
      </h2>
      <p className="mb-4">
        You may use the Website for lawful informational purposes only. You
        agree not to misuse the Website, including by attempting to gain
        unauthorised access to it or to any connected systems, introducing
        malicious code, or scraping content in an automated manner without our
        consent.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        4. Intellectual property
      </h2>
      <p className="mb-4">
        All content on the Website, including text, graphics, logos and
        software, is owned by or licensed to Advertum and is protected by
        applicable intellectual property laws. You may not reproduce,
        distribute or create derivative works from this content without our
        prior written consent, except as permitted by law.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        5. Disclaimer and limitation of liability
      </h2>
      <p className="mb-4">
        The Website and its content are provided &quot;as is&quot; for general
        information. We make no warranties, express or implied, as to the
        accuracy, completeness or availability of the Website. To the maximum
        extent permitted by law, Advertum shall not be liable for any indirect
        or consequential loss arising from the use of, or inability to use, the
        Website. Nothing in these Terms limits liability that cannot be limited
        under applicable law.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        6. Third-party links
      </h2>
      <p className="mb-4">
        The Website may contain links to third-party websites. We are not
        responsible for the content or privacy practices of such websites.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">7. Changes</h2>
      <p className="mb-4">
        We may update these Terms from time to time. The current version is
        always available on this page with the date of the last update.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        8. Governing law and jurisdiction
      </h2>
      <p className="mb-4">
        These Terms are governed by the laws of the Republic of Estonia. Any
        disputes arising out of or in connection with these Terms shall be
        subject to the jurisdiction of the Estonian courts, with Harju County
        Court as the court of first instance, unless mandatory law provides
        otherwise.
      </p>
    </article>
  );
}
