export function Services() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Header ===== */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-semibold text-gray-900">
            Our Services
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Built on trust, security, and reliability — our services are designed
            to deliver a seamless and protected shopping experience.
          </p>
        </div>

        {/* ===== Services Grid (same pattern) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Secure Payments */}
          <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              Payments
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transactions are protected with SSL encryption and verified
              payment gateways. Card details, UPI, and banking information are
              processed securely and never misused.
            </p>
          </div>

          {/* Data Privacy */}
          <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <span className="inline-block text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4">
              Privacy
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Data Privacy & Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your personal data is collected responsibly and safeguarded using
              strict security practices, complying with applicable data
              protection regulations.
            </p>
          </div>

          {/* Delivery */}
          <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <span className="inline-block text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
              Delivery
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fast & Reliable Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Partnered with trusted logistics providers to ensure timely
              delivery, real-time tracking, and consistent service quality.
            </p>
          </div>

          {/* Returns */}
          <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <span className="inline-block text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
              Returns
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Easy Returns & Refunds
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transparent return policies and fast refunds ensure a worry-free
              experience on eligible products.
            </p>
          </div>

          {/* Support */}
          <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
              Support
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dedicated support channels are available to assist with orders,
              payments, refunds, and account-related queries.
            </p>
          </div>

          {/* Authentic Products */}
          <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <span className="inline-block text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4">
              Trust
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Authentic Products
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Products are sourced from verified sellers and quality-checked to
              ensure authenticity and accurate representation.
            </p>
          </div>

        </div>

        {/* ===== Trust Highlight (same placement, enhanced look) ===== */}
        <div className="mt-16 rounded-xl border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Security & Trust at Every Step
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            From encrypted payments to responsible data handling and transparent
            policies, every service is built to protect your interests and earn
            long-term trust.
          </p>
        </div>

      </div>
    </section>
  );
}


