import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function submit(e) {
    e.preventDefault();
    setStatus("sending");
    axios
      .post("http://localhost:4000/api/contact", form)
      .then((r) => {
        setStatus("sent");
        setForm({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => setStatus("error"));
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info@nepalcanvas.com</p>
            <p className="text-gray-600">support@nepalcanvas.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">Kathmandu, Nepal</p>
            <p className="text-gray-600">Opening Soon</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                Twitter
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={submit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option>General Inquiry</option>
                <option>Partnership Opportunity</option>
                <option>Feedback & Suggestions</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-40"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "sent" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <span className="mr-2">✓</span>
                <span>
                  Message sent successfully! We'll get back to you soon.
                </span>
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                <span className="mr-2">✕</span>
                <span>Error sending message. Please try again later.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
