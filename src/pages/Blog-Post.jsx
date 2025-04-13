import React, { useState, useEffect } from "react";

import { db, collection, getDocs ,addDoc} from "./firebase";

const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(blogData.reverse()); // latest first
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    await addDoc(collection(db, "blogs"), {
      title,
      content,
      createdAt: new Date(),
    });

    setTitle("");
    setContent("");
    fetchBlogs();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        📝 Add a Blog Post
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mb-10 bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 h-32 border rounded-md"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Post Blog
        </button>
      </form>

      <h3 className="text-2xl font-semibold mb-4">📚 Latest Blogs</h3>
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

export default BlogPost;
