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
    <div className="max-w-7xl mx-auto p-6 mt-12">
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

      <h2 className="text-4xl font-extrabold text-center mb-4 text-indigo-600">
        What Our Users Say
      </h2>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbackList.length > 0 ? (
          feedbackList.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
            >
              <p className="text-gray-700 italic text-lg mb-4">
                "{item.feedback}"
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-white font-semibold">
                  {item.username.charAt(0).toUpperCase()}
                </div>
                <p className="ml-4 text-gray-900 font-semibold">
                  {item.username}
                </p>
              </div>
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
