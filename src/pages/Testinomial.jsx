import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "./firebase";
import { Helmet } from "react-helmet"; // ✅ Import Helmet

const Testimonials = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedbacks"));
        const feedbackData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbackList(feedbackData);
      } catch (error) {
        console.error("Error fetching feedback: ", error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Testimonials - Hamlet Feedback | Geet Enterprises</title>
        <meta
          name="description"
          content="Read testimonials from our users who experienced Hamlet services with Geet Enterprises. See what they say about our features, performance, and support."
        />
        <meta
          name="keywords"
          content="Hamlet, Testimonials, Feedback, Geet Enterprises, Reviews"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h2 className="text-3xl font-bold text-center mb-2">
        What Our Users Say
      </h2>
      <h3 className="text-xl text-center text-blue-600 font-semibold mb-6">
        Hamlet Testimonials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbackList.length > 0 ? (
          feedbackList.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
              <p className="italic">"{item.feedback}"</p>
              <p className="mt-2 text-gray-700 font-semibold">
                - {item.username}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No feedback yet. Be the first to share your experience!
          </p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
