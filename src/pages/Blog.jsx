import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(blogData.reverse());
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 py-16 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          📚 Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <h4 className="text-2xl font-semibold text-indigo-700 mb-4">
                {blog.title}
              </h4>
              <p className="text-gray-700 text-base">
                {blog.content.substring(0, 150)}...
              </p>
              <a
                href={`/blog/${blog.id}`}
                className="text-indigo-500 font-semibold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
