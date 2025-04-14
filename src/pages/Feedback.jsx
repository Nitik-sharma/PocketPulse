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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-22 sm:px-6 md:px-12 ">
      {/* Helmet Meta Tags */}
      <Helmet>
        <title>Feedback | PocketPulse</title>
        <meta
          name="description"
          content="We value your thoughts! Leave feedback about your experience with PocketPulse."
        />
        <meta
          name="keywords"
          content="feedback, customer feedback, review, PocketPulse feedback"
        />
        <meta name="author" content="PocketPulse" />
        {/* Open Graph */}
        <meta property="og:title" content="Share Your Feedback | PocketPulse" />
        <meta
          property="og:description"
          content="Tell us what you think about our services. Your opinion matters!"
        />
        <meta property="og:url" content="https://pocketpulse.info/feedback" />
        <meta
          property="og:image"
          content="https://pocketpulse.info/banner.png"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Share Your Feedback | PocketPulse"
        />
        <meta
          name="twitter:description"
          content="Your feedback helps us grow and improve. Submit your thoughts here!"
        />
        <meta
          name="twitter:image"
          content="https://pocketpulse.info/banner.png"
        />
        <meta name="twitter:url" content="https://pocketpulse.info/feedback" />
        <link rel="canonical" href="https://pocketpulse.info/feedback" />
      </Helmet>

      <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
        Share Your Feedback
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Your Feedback
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Share your experience..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none transition duration-300 ease-in-out"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
