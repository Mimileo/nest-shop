import { useState } from "react";

import { nestApi } from "../config/axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await nestApi.post("/contact", formData);

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        console.log("Form submitted successfully.");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        console.error("Form submission failed." + error);
        setError("An error occurred while submitting the form.");
      }
    } catch (error) {
      setError("An error occurred while submitting the form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form p-8 rounded-2xl shadow-2xl border bg-white border-emerald-100 ">
      <h2 className="text-2xl font-bold mb-4 text-emerald-500">Contact Us</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="mb-4 text-left">
          <label htmlFor="name" className="w-24 text-gray-700 font-bold">
            Name
          </label>
          <input
            disabled={loading}
            value={formData.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-1 focus:outline-emerald-500"
            required
          />
        </div>
        <div className="mb-4 text-left">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            disabled={loading}
            value={formData.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-1 focus:outline-emerald-500"
            required
          />
        </div>
        <div className="mb-4 text-left">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            disabled={loading}
            value={formData.message}
            onChange={handleChange}
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 rounded border border-gray-300  focus:outline-1 focus:outline-emerald-500"
            required
          ></textarea>
        </div>

        <div className="h-6">
          {error && <p className="text-red-500">{error}</p>}

          {success && (
            <p className="text-green-500">Your message has been submitted!</p>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
