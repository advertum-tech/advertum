import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Advertum",
  description:
    "Privacy Policy of Advertum Tech OÜ: what personal data advertum.com processes, on what legal bases, and your rights under the GDPR.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-[90%] max-w-[70ch] py-16 max-sm:py-10 leading-relaxed">
      <h1 className="text-4xl max-sm:text-3xl mt-0 mb-3">Privacy Policy</h1>
      <p className="mb-10 opacity-60">Last updated: 12 June 2026</p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">1. Data controller</h2>
      <p className="mb-4">
        The controller of personal data processed in connection with this
        website is Advertum Tech OÜ, Estonia. Contact:{" "}
        <a href="mailto:hello@advertum.com">hello@advertum.com</a>.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        2. What data we process
      </h2>
      <p className="mb-4">
        We process personal data only to the limited extent necessary to
        operate this website and respond to enquiries:
      </p>
      <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
        <li>
          <strong>Contact data</strong> — if you email us or use a contact
          form, we process your name, email address and the content of your
          message.
        </li>
        <li>
          <strong>Technical data</strong> — our hosting provider may process IP
          addresses and request metadata in server logs for security and
          operational purposes.
        </li>
      </ul>
      <p className="mb-4">
        We do not use advertising or behavioural tracking technologies on this
        website.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        3. Purposes and legal bases
      </h2>
      <p className="mb-4">
        We process contact data to respond to your enquiry and, where relevant,
        to negotiate or perform a contract (Article 6(1)(b) GDPR), and
        technical data on the basis of our legitimate interest in keeping the
        website secure and operational (Article 6(1)(f) GDPR).
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">4. Retention</h2>
      <p className="mb-4">
        Enquiry correspondence is retained for as long as necessary to handle
        the matter and for any applicable limitation periods. Server logs are
        retained by our hosting provider for a limited period in accordance
        with its policies. Accounting records are retained as required by
        Estonian accounting and tax law (generally seven years).
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">
        5. Recipients and transfers
      </h2>
      <p className="mb-4">
        We may share personal data with service providers acting on our behalf
        (such as hosting and email providers) under data processing agreements,
        and with public authorities where required by law. If data is
        transferred outside the European Economic Area, we ensure appropriate
        safeguards under Chapter V of the GDPR.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">6. Your rights</h2>
      <p className="mb-4">
        Under the GDPR you have the right to request access to, rectification
        or erasure of your personal data, restriction of processing, data
        portability, and to object to processing based on legitimate interest.
        To exercise these rights, contact us at{" "}
        <a href="mailto:hello@advertum.com">hello@advertum.com</a>. You also
        have the right to lodge a complaint with a supervisory authority; in
        Estonia this is the Data Protection Inspectorate (Andmekaitse
        Inspektsioon, <a href="https://www.aki.ee">www.aki.ee</a>).
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">7. Cookies</h2>
      <p className="mb-4">
        This website uses only technically necessary cookies, if any. We do not
        use analytics or marketing cookies. If this changes, we will update
        this Policy and request consent where required.
      </p>

      <h2 className="text-2xl max-sm:text-xl mt-10 mb-4">8. Changes</h2>
      <p className="mb-4">
        We may update this Policy from time to time. The current version is
        always available on this page with the date of the last update.
      </p>
    </article>
  );
}
