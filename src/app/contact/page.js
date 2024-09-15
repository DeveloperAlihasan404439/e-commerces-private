"use client";
import Image from "next/image";
import contact from "../../images/payment/contact.png";
import { useState } from "react";

function ContactUsPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleContact = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate subject
    if (subject.trim() === "") {
      newErrors.subject = "Subject cannot be empty.";
    }

    // Validate message
    if (message.trim() === "") {
      newErrors.message = "Message cannot be empty.";
    }

    // If there are any errors, set the errors state and return early
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log form data if validation passes
    const formData = {
      email,
      subject,
      message,
    };
    console.log("Form Data:", formData);

    // Clear form fields and errors after successful submission
    setEmail("");
    setSubject("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-8 md:py-16 font-robot">
      <div className="border rounded shadow-md p-5">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <div className="lg:flex gap-5 justify-between flex-row-reverse">
          <div className="flex items-center justify-center">
            <Image width={500} height={600} src={contact} alt="contact" />
          </div>
          <div className="space-y-2 w-full lg:w-[50%]">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-3 py-2"
                placeholder="name@flowbite.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-1 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-3 py-2"
                placeholder="Let us know how we can help you"
                required
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-semibold text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-3 py-2"
                placeholder="Send message..."
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="pt-4">
              <button
                onClick={handleContact}
                className="px-4 py-2 border-2 border-[#395bef] rounded bg-[#395bef] text-white font-semibold cursor-pointer"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
        <div className="border mb-5 h-[60vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13841.555034443956!2d88.64746333328979!3d25.66525782167107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4ad48bef3a7f7%3A0x6a3bd22d4257bf5e!2sChehel%20Gazi%20Mazar!5e1!3m2!1sen!2sbd!4v1725812327500!5m2!1sen!2sbd"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
