import React, { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    duration: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_gea2i47";
    const templateId = "template_yns84d7";
    const publicKey = "hiLMTs0JNE3laF7_D";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      amount: formData.amount,
      duration: formData.duration,
      reason: formData.reason,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully:", response);
      alert("Loan application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        amount: "",
        duration: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit the loan application.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      {/* SEO Helmet */}
      <Helmet>
        <title>Apply for a Loan | Geet Enterprises</title>
        <meta
          name="description"
          content="Apply for a private loan online with Geet Enterprises. Quick approval, low interest rates, and simple documentation."
        />
        <meta
          name="keywords"
          content="apply loan, online loan, private loan, personal loan, funding, finance, Geet Enterprises"
        />
        <meta name="author" content="Geet Enterprises" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://geetenterprises.info/apply" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (Facebook, WhatsApp, Instagram) */}
        <meta
          property="og:title"
          content="Apply for a Loan - Geet Enterprises"
        />
        <meta
          property="og:description"
          content="Simple and fast loan application process. Submit your private funding request with Geet Enterprises."
        />
        <meta property="og:url" content="https://geetenterprises.info/apply" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://geetenterprises.info/banner.png"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Apply for a Loan - Geet Enterprises"
        />
        <meta
          name="twitter:description"
          content="Quick and secure online loan application. Get funding with ease from Geet Enterprises."
        />
        <meta name="twitter:url" content="https://geetenterprises.info/apply" />
        <meta
          name="twitter:image"
          content="https://geetenterprises.info/banner.png"
        />
      </Helmet>

      <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
          pattern="[0-9]{10}"
          maxLength="10"
        />
        <input
          type="number"
          name="amount"
          placeholder="Loan Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (Months)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          name="reason"
          placeholder="Reason for Loan"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
