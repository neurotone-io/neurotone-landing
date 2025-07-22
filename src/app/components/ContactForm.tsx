"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [visible, setVisible] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error for that field if input is provided
    if (e.target.value.trim() !== "") {
      setFieldErrors((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      message: false,
    };

    if (!form.firstName.trim()) {
      newErrors.firstName = true;
      valid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = true;
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = true;
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = true;
      valid = false;
    }

    if (!valid) {
      setFieldErrors(newErrors);
      setError("All fields are required.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setFieldErrors((prev) => ({ ...prev, email: true }));
      setError("Please enter a valid email address.");
      return false;
    }

    setFieldErrors({
      firstName: false,
      lastName: false,
      email: false,
      message: false,
    });
    return true;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("/api/contact", form);
      if (response.status === 200) {
        setSuccess("Your message was sent successfully!");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setError(response.data.message || "Failed to send message.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to send message."
        );
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Failed to send message.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-60 flex items-center justify-center z-50 px-4 overflow-y-auto font-outfit">
      <div
        className={`transform transition duration-300 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } w-full max-w-[1000px] bg-cover bg-center rounded-xl relative overflow-hidden shadow-xl`}
        style={{ backgroundImage: "url('/images/contact-form-bcg.png')" }}
      >
        <button
          type="button"
          className="absolute top-6 right-6 text-[#FF6333] text-4xl transition hover:scale-110 cursor-pointer"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="bg-opacity-70 px-6 md:px-12 py-14 h-full w-full">
          <h2 className="text-[#FF6333] text-5xl font-bold text-center mb-4">
            Get in touch
          </h2>
          <p className="text-[#FFF0BC] text-center mb-4 md:mb-0 leading-relaxed">
            Have questions or need assistance? We&apos;re here to help!
          </p>
          <p className="text-[#FFF0BC] text-center mb-10 leading-relaxed">
            Fill out the form below, and our team will get back to you as soon
            as possible.
          </p>

          <form
            onSubmit={submitForm}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
          >
            <div>
              <label className="text-[#FFF0BC]">First Name</label>
              <input
                name="firstName"
                placeholder="Enter your first name"
                autoComplete="off"
                className={`w-full bg-transparent border-b ${
                  fieldErrors.firstName
                    ? "border-red-500"
                    : "border-[#b1afcd25]"
                } text-white py-2 outline-none placeholder-[#B1AFCD80] autofill:bg-transparent`}
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[#FFF0BC]">Last Name</label>
              <input
                name="lastName"
                placeholder="Enter your last name"
                autoComplete="off"
                className={`w-full bg-transparent border-b ${
                  fieldErrors.lastName ? "border-red-500" : "border-[#b1afcd25]"
                } text-white py-2 outline-none placeholder-[#B1AFCD80] autofill:bg-transparent`}
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-[#FFF0BC]">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="off"
                className={`w-full bg-transparent border-b ${
                  fieldErrors.email ? "border-red-500" : "border-[#b1afcd25]"
                } text-white py-2 outline-none placeholder-[#B1AFCD80] autofill:bg-transparent`}
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-[#FFF0BC]">Message</label>
              <textarea
                name="message"
                placeholder="Please type your additional message here, details, website, etc..."
                className={`w-full bg-transparent border-b ${
                  fieldErrors.message ? "border-red-500" : "border-[#b1afcd25]"
                } text-white py-2 outline-none placeholder-[#B1AFCD80] resize-y autofill:bg-transparent`}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {(error || success) && (
              <div className="md:col-span-2 text-center">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}
              </div>
            )}

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF6333] hover:bg-orange-600 text-white px-10 py-3 rounded-lg transition w-full md:w-auto md:px-10 cursor-pointer"
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
          transition: background-color 9999s ease-in-out 0s;
          -webkit-text-fill-color: #ffffff !important;
          caret-color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}
