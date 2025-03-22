import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "Sreeram P",
    email: "itssreeramp@gmail.com",
    message: "Contact Me",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! (This is just a placeholder)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-400 text-black p-3 rounded-lg font-bold hover:bg-teal-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
