"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_3nepjr3",
        "template_bm06yna",
        form.current,
        "zrC-I1CLlCOXauoFu",
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);

          form.current?.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message!");
          setLoading(false);
        },
      );
  };

  return (
    <div>
      <div className="lg:h-[426px] bg-style blog-bg flex items-end pb-8"></div>

      <section className="min-h-screen bg-[#111827] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-5xl border border-gray-500 rounded-[24px] p-10 md:p-16 bg-[#0f172a]">
          <form ref={form} onSubmit={sendEmail} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="text-gray-300 text-sm">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Phone Number *</label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Your Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-gray-900 px-10 py-4 font-semibold hover:bg-gray-200 transition duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {success && (
              <p className="text-center text-green-400 text-lg">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
