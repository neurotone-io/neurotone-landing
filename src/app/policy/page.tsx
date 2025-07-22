"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Policy() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-screen pt-16 font-outfit bg-[#09090B]">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#FF6333] to-[#8d361c] bg-amber-900 py-8 md:py-12 px-4 text-center text-[#FFF0BC]">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FFF0BC]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#FFF0BC]">
          Your privacy is important to us at BeyondLink
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Section 1: Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">Overview</h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            At BeyondLink, we are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            Please read this policy carefully to understand our practices
            regarding your personal data.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Information We Collect
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We collect information that you voluntarily provide when you
            register on our website, express interest in our services,
            participate in activities, or contact us.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            The personal information we collect depends on the context of your
            interactions with us and the features you use.
          </p>
        </section>

        {/* Section 3: How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              <strong>Service Improvement:</strong> We use your information to
              provide, maintain, and improve our services.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Communication:</strong> We may use your information to
              send you updates, newsletters, and promotional materials.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Analytics:</strong> Aggregated data helps us understand
              how our services are used and enhances your overall experience.
            </li>
          </ul>
        </section>

        {/* Section 4: Data Sharing and Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Data Sharing and Disclosure
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We do not sell or trade your personal information. However, we may
            share your data with trusted third-party vendors, service providers,
            or business partners who help us operate our website and provide our
            services, provided they agree to keep this information confidential.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            We may also disclose your information when required by law or to
            protect our rights.
          </p>
        </section>

        {/* Section 5: Your Rights and Choices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Your Rights and Choices
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal
            information. Additionally, you may have the right to restrict or
            object to certain processing activities and withdraw your consent
            where applicable.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            Please contact us if you have any questions about your rights.
          </p>
        </section>

        {/* Section 6: Changes to this Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Changes to This Policy
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            BeyondLink reserves the right to update this Privacy Policy at any
            time. Any changes will be posted on this page with an updated
            effective date.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            We encourage you to review this policy periodically to stay informed
            about our practices.
          </p>
        </section>

        {/* Section 7: Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">Contact Us</h2>
          <p className="text-[#FFF0BC] leading-relaxed">
            If you have any questions or concerns regarding this Privacy Policy,
            please{" "}
            <span
              onClick={() => setShowForm(true)}
              className="text-[#FF6333] hover:underline cursor-pointer"
            >
              contact us
            </span>
            .
          </p>
        </section>
        <section className="mb-12">
          <p className="text-[#FFF0BC] leading-relaxed">April 2025</p>
        </section>
        {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      </main>
    </div>
  );
}
