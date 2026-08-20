import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For teaching purposes we just log the data
    console.log("Form submitted:", formData);

    // Show success message
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Have a question? Send us a message and we’ll get back to you.
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="john@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;