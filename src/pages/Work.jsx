import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      {/* ✅ SEO Helmet Tags */}
      <Helmet>
        <title>
          How It Works - Fast & Easy Loan Process | Geet Enterprises
        </title>
        <meta
          name="description"
          content="Learn how our simple 6-step loan process helps you get instant approval and funding. Fast, secure, and hassle-free with Geet Enterprises."
        />
        <meta
          name="keywords"
          content="How it works, Loan process, Instant loan approval, Geet Enterprises, Apply loan, Track loan, Loan repayment"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl">Step 1: Apply for a Loan</h3>
          <p className="text-gray-600 mt-2">
            Fill out our simple online application form with basic details.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl">
            Step 2: Get Instant Approval
          </h3>
          <p className="text-gray-600 mt-2">
            Our AI-driven system reviews and approves your loan within minutes.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl">Step 3: Receive Funds</h3>
          <p className="text-gray-600 mt-2">
            Once approved, the loan amount is credited to your account
            instantly.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl">Step 4: Flexible Repayment</h3>
          <p className="text-gray-600 mt-2">
            Choose a repayment plan that best suits your financial situation.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl">Step 5: Track Your Loan</h3>
          <p className="text-gray-600 mt-2">
            Use our dashboard to monitor your loan status and payments.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl">Step 6: Get Support</h3>
          <p className="text-gray-600 mt-2">
            Our 24/7 support team is here to help with any queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
