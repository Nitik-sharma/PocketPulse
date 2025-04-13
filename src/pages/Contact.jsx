import React, { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_gea2i47";
    const templateId = "template_nsi0idt";
    const publicKey = "hiLMTs0JNE3laF7_D";
    const ownerEmail = "pocketpulse2001@gmail.com";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          to_email: ownerEmail,
        },
        publicKey
      );

      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: `Thank you, ${formData.name}! We have received your message and will get back to you soon.`,
          to_email: formData.email,
        },
        publicKey
      );

      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email Send Failed:", error);
      alert("Failed to send message. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6">
      {/* SEO for Contact Page */}
      <Helmet>
        <title>
          Contact Geet Enterprises | Loan Assistance & Private Funding
        </title>
        <meta
          name="description"
          content="Reach out to Geet Enterprises for private loan assistance and funding solutions. Get in touch with our team today."
        />
        <meta
          name="keywords"
          content="Geet Enterprises contact, apply loan help, loan customer support, contact for private loan, funding contact"
        />
        <meta name="author" content="Geet Enterprises" />

        {/* Open Graph (for Facebook, WhatsApp, Instagram) */}
        <meta property="og:title" content="Contact Geet Enterprises" />
        <meta
          property="og:description"
          content="Need help with a loan? Contact Geet Enterprises for quick support and private funding solutions."
        />
        <meta
          property="og:url"
          content="https://geetenterprises.info/contact"
        />
        <meta
          property="og:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Geet Enterprises" />
        <meta
          name="twitter:description"
          content="Need help with a loan? Contact us now."
        />
        <meta
          name="twitter:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta
          name="twitter:url"
          content="https://geetenterprises.info/contact"
        />

        {/* Favicon and Canonical URL */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://geetenterprises.info/contact" />
      </Helmet>

      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
        <form onSubmit={sendEmail}>
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              name="name"
              className="mt-2 block w-full p-2 border rounded-md"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              className="mt-2 block w-full p-2 border rounded-md"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              className="mt-2 block w-full p-2 border rounded-md"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
