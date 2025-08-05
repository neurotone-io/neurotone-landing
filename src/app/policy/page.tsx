"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";

export function Policy() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-screen pt-16 font-outfit bg-[#09090B]">
      {/* Hero Section */}
      <header
        className="bg-gradient-to-r from-[#FF6333] to-[#8d361c] bg-amber-900 py-8 md:py-12 px-4 text-center text-[#FFF0BC]">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FFF0BC]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#FFF0BC]">
          Your privacy is important to us at neurotone
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Section 1: Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">Overview</h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            {`At neurotone (“we,” “our,” or “us”), your privacy is a top priority. This Privacy Policy
            explains how we collect, use, store, and protect your information when you use our website,
            services, and AI-powered audio/video analysis tools (collectively, the “Platform”).`}
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            By accessing or using neurotone, you agree to the terms of this Privacy Policy. If you do not
            agree, please do not use our services.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Information We Collect
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We collect the following types of information to deliver and improve our services:
          </p>
          <h3 className="text-[#FFF0BC]">a. Media and Analytical Data</h3>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            When you use neurotone to upload or process media files, we may collect:
          </p>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              Video recordings you submit.
            </li>
            <li className="text-[#FFF0BC]">
              AI-generated insights (e.g., emotional patterns, transcripts, speaker data, visual
              signals).
            </li>
            <li className="text-[#FFF0BC]">
              Metadata (e.g., duration, timestamps).
            </li>
          </ul>

          <h3 className="text-[#FFF0BC] mt-3">b. Usage Data</h3>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We automatically collect:
          </p>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              Log data (e.g., IP address, browser type, operating system).
            </li>
            <li className="text-[#FFF0BC]">
              Platform usage (e.g., session length, feature access).
            </li>
            <li className="text-[#FFF0BC]">
              Cookies and similar technologies (to enhance user experience and performance).
            </li>
          </ul>
        </section>

        {/* Section 3: How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            How We Use Your Information
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We use your information to:
          </p>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              Provide and improve our services.
            </li>
            <li className="text-[#FFF0BC]">
              Deliver AI analysis results.
            </li>
            <li className="text-[#FFF0BC]">
              Monitor system usage and maintain platform security.
            </li>
            <li className="text-[#FFF0BC]">
              Develop new features and conduct internal research (in aggregated or anonymized
              form).
            </li>
          </ul>
          <p className="text-[#FFF0BC] leading-relaxed mt-4">
            We <strong>do not</strong> use your media files for model training unless you give explicit, written
            consent.
          </p>
        </section>

        {/* Section 4: Data Sharing and Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Data Sharing and Disclosure
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We <strong>do not</strong> sell your data. We may share your information only in the following
            circumstances:
          </p>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              <strong>Service Providers:</strong> Trusted third-party vendors that help us operate the platform (e.g.,
              cloud storage), under strict confidentiality agreements.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Legal Requirements:</strong> If required by law or in response to valid legal requests.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, you will be
              notified of any changes in data ownership or practices.
            </li>
          </ul>
        </section>

        {/* Section 5: Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Data Security
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We implement industry-standard security measures to protect your data:
          </p>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              Secure cloud infrastructure.
            </li>
            <li className="text-[#FFF0BC]">
              Access controls and authentication procedures.
            </li>
          </ul>
          <p className="text-[#FFF0BC] leading-relaxed mt-4">
            However, no system is completely immune to breaches. We encourage users to safeguard
            their login credentials and report any suspicious activity.
          </p>
        </section>

        {/* Section 6: Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Data Retention
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            We retain your data only as long as necessary to fulfill the purposes outlined in this policy or
            as required by law. Media files may be deleted upon request or based on custom retention
            settings agreed upon with your organization.
          </p>
        </section>

        {/* Section 7: Your Rights and Choices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Your Rights and Choices
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              Request deletion of your data.
            </li>
            <li className="text-[#FFF0BC]">
              Object to or restrict certain types of processing.
            </li>
            <li className="text-[#FFF0BC]">
              Download a copy of your data (data portability).
            </li>
          </ul>
          <p className="text-[#FFF0BC] leading-relaxed mt-4">
            To exercise these rights, contact us at: <a href="mailto:info@neurotone.io">info@neurotone.io</a>
          </p>
        </section>

        {/* Section 8: International Users */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            International Users
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            Our servers may be located in different jurisdictions. By using neurotone, you consent to the
            transfer and processing of your data outside of your country, where privacy laws may differ.
          </p>
        </section>

        {/* Section 9: Children Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            {`Children’s Privacy`}
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            neurotone is not intended for use by individuals under the age of 18. We do not knowingly
            collect data from children. If you believe a child has submitted data to us, please contact us so
            we can delete it.
          </p>
        </section>

        {/* Section 10: Changes to this Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Changes to This Policy
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            {`We may update this Privacy Policy periodically. Well notify you of significant changes via
            email or within the platform. Continued use of the platform after such updates constitutes
            acceptance of the revised policy.`}
          </p>
        </section>

        {/* Section 11: Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">Contact Us</h2>
          <p className="text-[#FFF0BC] leading-relaxed">
            If you have questions or concerns about this Privacy Policy, {" "}
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
          <p className="text-[#FFF0BC] leading-relaxed">August 2025</p>
        </section>
        {showForm && <ContactForm onClose={() => setShowForm(false)}/>}
      </main>
    </div>
  );
}
