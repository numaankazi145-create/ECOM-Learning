import { NavLink } from "react-router-dom";

export function PrivacyPolicy() {
  return (
    <section>
      <div class="max-w-96xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-8">
          <div class="mb-10 flex justify-between items-center">
            <span>
              <h1 class="text-3xl font-semibold text-gray-900">
                Privacy Policy
              </h1>
              <p class="mt-2 text-sm text-gray-500">Last Updated: December 2025</p>
            </span>
            <NavLink to="/" className="text-md text-blue-700 hover:underline hover:bg-accent">Home</NavLink>
          </div>
          <p class="text-gray-700 leading-relaxed">
            We value the trust you place in us and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, store, and share your data when you use our website,
            mobile application, and services.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p class="text-sm text-blue-700">
              <strong>Disclaimer:</strong> In case of any discrepancy or
              difference, the English version of this Privacy Policy shall
              prevail.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, such as
              your name, email address, phone number, delivery address, and
              payment details when you create an account or place an order.
            </p>
            <p class="mt-3 text-gray-700 leading-relaxed">
              We also automatically collect certain information like your IP
              address, browser type, device information, and browsing behavior
              to improve our services and user experience.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>To process and deliver your orders</li>
              <li>To manage payments and refunds</li>
              <li>To communicate updates, offers, and support messages</li>
              <li>To personalize your shopping experience</li>
              <li>To improve platform security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              3. Cookies & Tracking Technologies
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance site
              performance, analyze traffic, and remember your preferences. You
              can control or disable cookies through your browser settings,
              though some features may not function properly.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              4. Sharing of Information
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We may share your information with trusted sellers, logistics
              partners, payment providers, and service partners only to fulfill
              orders or comply with legal obligations. We do not sell your
              personal data to third parties.
            </p>
          </div>
          <div class="rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-2">
              Data Sharing & Disclosure
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Your data may be shared with trusted sellers, logistics partners,
              payment gateways, and service providers solely to deliver
              products, complete transactions, or comply with legal
              requirements. We never sell your personal data.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              6. Your Rights & Choices
            </h2>
            <p class="text-gray-700 leading-relaxed">
              You may access, update, or delete your personal information
              through your account settings. You may also opt out of promotional
              communications at any time.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              7. Children’s Privacy
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Our platform is intended for users aged 18 years and above. We do
              not knowingly collect personal data from children.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              8. Changes to This Policy
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </div>

          <div class="border-t pt-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-2">Contact Us For Help</h2>
            <p class="text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p class="mt-2 text-blue-600 font-medium cursor-pointer hover:underline">
              numaankazi145@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
