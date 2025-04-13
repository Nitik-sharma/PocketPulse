import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { db, collection, addDoc } from "./firebase";

const FeedbackForm = () => {
  const [username, setUsername] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !feedback) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "feedbacks"), {
        username,
        feedback,
        timestamp: new Date(),
      });

      // Reset form
      setUsername("");
      setFeedback("");
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback: ", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Helmet Meta Tags */}
      <Helmet>
        <title>Feedback | Geet Enterprises</title>
        <meta
          name="description"
          content="We value your thoughts! Leave feedback about your experience with Geet Enterprises."
        />
        <meta
          name="keywords"
          content="feedback, customer feedback, review, Geet Enterprises feedback"
        />
        <meta name="author" content="Geet Enterprises" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Share Your Feedback | Geet Enterprises"
        />
        <meta
          property="og:description"
          content="Tell us what you think about our services. Your opinion matters!"
        />
        <meta
          property="og:url"
          content="https://geetenterprises.info/feedback"
        />
        <meta
          property="og:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Share Your Feedback | Geet Enterprises"
        />
        <meta
          name="twitter:description"
          content="Your feedback helps us grow and improve. Submit your thoughts here!"
        />
        <meta
          name="twitter:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta
          name="twitter:url"
          content="https://geetenterprises.info/feedback"
        />

        <link rel="canonical" href="https://geetenterprises.info/feedback" />
      </Helmet>

      <h2 className="text-2xl font-bold mb-4">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
