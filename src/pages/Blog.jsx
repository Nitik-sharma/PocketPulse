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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Latest Blogs</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">{blog.title}</h4>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
