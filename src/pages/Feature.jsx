import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Features = () => {
  const features = [
    {
      title: "Instant Loan Approval",
      desc: "Get your loan approved within minutes with our AI-powered system.",
      icon: "✅",
    },
    {
      title: "Secure Transactions",
      desc: "Your transactions are encrypted and safe with industry-standard security.",
      icon: "🔒",
    },
    {
      title: "Flexible Repayments",
      desc: "Choose a repayment plan that suits your financial needs.",
      icon: "💳",
    },
    {
      title: "User-Friendly Dashboard",
      desc: "Manage loans easily with an intuitive and simple dashboard.",
      icon: "📊",
    },
    {
      title: "24/7 Customer Support",
      desc: "We are here to assist you anytime, anywhere.",
      icon: "☎️",
    },
    {
      title: "Low Interest Rates",
      desc: "Enjoy the lowest interest rates on the market.",
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      {/* Helmet Meta Tags for SEO and Social Sharing */}
      <Helmet>
        <title>Loan Features | Geet Enterprises</title>
        <meta
          name="description"
          content="Explore the features offered by Geet Enterprises including instant loan approval, flexible repayment, secure transactions, and more."
        />
        <meta
          name="keywords"
          content="loan features, instant approval, secure loans, low interest loans, Geet Enterprises features"
        />
        <meta name="author" content="Geet Enterprises" />

        {/* Open Graph for Facebook/Instagram/WhatsApp */}
        <meta property="og:title" content="Features of Geet Enterprises" />
        <meta
          property="og:description"
          content="Instant loan approval, low interest rates, and 24/7 customer support. Explore all our features!"
        />
        <meta
          property="og:url"
          content="https://geetenterprises.info/features"
        />
        <meta
          property="og:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Features of Geet Enterprises" />
        <meta
          name="twitter:description"
          content="Explore our loan features including instant approval, flexible repayment, and secure transactions."
        />
        <meta
          name="twitter:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta
          name="twitter:url"
          content="https://geetenterprises.info/features"
        />

        <link rel="canonical" href="https://geetenterprises.info/features" />
      </Helmet>

      <h2 className="text-4xl font-bold text-center mb-8">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
