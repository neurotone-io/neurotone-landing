"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function TermsOfService() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-screen pt-16 font-outfit bg-[#09090B]">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#FF6333] to-[#8d361c] bg-amber-900 py-8 md:py-12 px-4 text-center text-[#FFF0BC]">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FFF0BC]">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#FFF0BC]">
          Please review our terms and conditions for using neurotone
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Section 1: Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Introduction
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            Welcome to BeyondLink. By accessing and using our services, you
            agree to be bound by these Terms of Service. Please read them
            carefully.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            These terms govern your use of our website, products, and services.
            If you do not agree with any part of these terms, please refrain
            from using our services.
          </p>
        </section>

        {/* Section 2: Use of Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Use of Services
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            BeyondLink provides a platform for seamless data migration and deep
            linking. You are granted a limited, non-exclusive, and
            non-transferable license to use our services in accordance with
            these terms.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            Unauthorized use of our services is strictly prohibited and may
            result in the termination of your access.
          </p>
        </section>

        {/* Section 3: Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Intellectual Property
          </h2>
          <ul className="list-disc list-inside text-[#FFF0BC] space-y-2 marker:text-[#FF6333]">
            <li>
              <strong>Ownership:</strong> All content, trademarks, and data on
              BeyondLink are the property of BeyondLink or its licensors.
            </li>
            <li>
              <strong>Restrictions:</strong> You may not reproduce, distribute,
              or create derivative works from any content without our prior
              written consent.
            </li>
          </ul>
        </section>

        {/* Section 4: User Obligations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            User Obligations
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            You agree to provide accurate information and update your account as
            necessary. You are responsible for maintaining the confidentiality
            of your account and password.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            You further agree not to misuse our services or assist anyone in
            doing so, including any activity that may disrupt or damage our
            services.
          </p>
        </section>

        {/* Section 5: Disclaimers and Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Disclaimers and Limitation of Liability
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            Our services are provided on an &quot;as is&quot; basis without
            warranties of any kind. BeyondLink does not guarantee uninterrupted
            or error-free operation of our services.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            In no event shall BeyondLink be liable for any indirect, incidental,
            or consequential damages arising from your use of our services.
          </p>
        </section>

        {/* Section 6: Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Governing Law and Dispute Resolution
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the applicable jurisdiction. Any
            disputes arising under these terms shall be resolved in the
            appropriate courts.
          </p>
        </section>

        {/* Section 7: Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Changes to Terms of Service
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            BeyondLink reserves the right to modify these Terms of Service at
            any time. Your continued use of our services constitutes acceptance
            of any changes.
          </p>
        </section>

        {/* Section 8: Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Contact Information
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed">
            If you have any questions regarding these Terms of Service, please{" "}
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
