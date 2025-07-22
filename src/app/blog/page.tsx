"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen pt-16 font-outfit bg-[#09090B]">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#FF6333] to-[#8d361c] bg-amber-900 py-8 md:py-12 px-4 text-center text-[#FFF0BC]">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FFF0BC]">
          Firebase Dynamic Links is Deprecated
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#FFF0BC]">
          Introducing BeyondLink - One-Click Data Migration For Free
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 bg-[#09090B]">
        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFF0BC] mb-4">
            The End of an Era:{" "}
            <span className="text-[#FF6333]">Firebase Dynamic Links</span>
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            Firebase Dynamic Links has been a trusted service for many years,
            enabling deep linking and seamless navigation between mobile and web
            platforms. However, as technology evolves, so do the demands of
            developers and end-users. The deprecation of Firebase Dynamic Links
            means that many projects now face the challenge of migrating to a
            new solution that offers enhanced performance, flexibility, and user
            experience.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            While Firebase Dynamic Links served its purpose, its limited
            flexibility, increased maintenance overhead, and the emergence of
            superior alternatives have paved the way for a new era.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFF0BC] mb-4">
            Introducing BeyondLink:{" "}
            <span className="text-[#FF6333]">
              Your One-Click Migration Solution
            </span>
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            At BeyondLink, we understand that change can be daunting. Migrating
            from a trusted platform like Firebase Dynamic Links is no small
            feat&mdash; especially when critical data and user experience are on
            the line. That&apos;s why we built BeyondLink, a comprehensive
            solution that migrates all your data with just one click.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            BeyondLink is a cutting-edge alternative designed to address the
            limitations of deprecated Firebase Dynamic Links. Our platform
            offers a seamless transition, ensuring that your deep linking
            infrastructure remains intact and even improved upon.
          </p>
        </section>

        {/* Section 3: Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF6333] mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              <strong>One-Click Data Migration:</strong> Say goodbye to manual,
              error-prone data migration. BeyondLink automates the transition
              with a single click.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Enhanced Performance:</strong> Enjoy faster link
              resolution and improved reliability for a smooth user experience.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Customizable Solutions:</strong> Tailor your deep linking
              strategy to your application&apos;s unique requirements.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Future-Proof Technology:</strong> Stay ahead with a
              platform designed to integrate with upcoming technologies and
              standards.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Free of Charge:</strong> BeyondLink is completely free for
              basic features.
            </li>
          </ul>
        </section>

        {/* Section 4: Migration Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFF0BC] mb-4">
            The Migration Process:{" "}
            <span className="text-[#FF6333]">Simple and Efficient</span>
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            Data migration can be intimidating, but BeyondLink makes it
            effortless:
          </p>
          <ol className="list-decimal list-inside marker:text-[#FF6333] space-y-2">
            <li className="text-[#FFF0BC]">
              <strong>Connect Your Firebase Account:</strong> Securely link your
              existing Firebase project to BeyondLink.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Initiate One-Click Migration:</strong> Transfer all your
              data with a single click.
            </li>
            <li className="text-[#FFF0BC]">
              <strong>Seamless Integration:</strong> Once migration is complete,
              your new deep linking infrastructure is ready&mdash;without any
              downtime.
            </li>
          </ol>
        </section>

        {/* Section 5: Why Choose BeyondLink */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFF0BC] mb-4">
            Why Choose <span className="text-[#FF6333]">BeyondLink?</span>
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed mb-4">
            The decision to move away from Firebase Dynamic Links doesn&apos;t
            have to be stressful. BeyondLink not only simplifies the migration
            process but also elevates your application&apos;s performance and
            user experience. With our innovative approach, you gain access to a
            platform that is more flexible, efficient, and built for the future.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed">
            Upgrade to BeyondLink and embrace the future of deep linking.
          </p>
        </section>

        {/* Section 6: Join the Future */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFF0BC] mb-4">
            Join the Future of{" "}
            <span className="text-[#FF6333]">Deep Linking</span>
          </h2>
          <p className="text-[#FFF0BC] leading-relaxed">
            If you&apos;re still relying on deprecated technologies, now is the
            time to upgrade. BeyondLink offers a modern, reliable, and efficient
            solution to ensure your application remains competitive in
            today&apos;s dynamic digital landscape.
          </p>
          <p className="text-[#FFF0BC] leading-relaxed mt-4">
            And the best part? BeyondLink is completely free for basic features!
          </p>
          <p className="text-[#FFF0BC] leading-relaxed mt-4">
            For more details on how BeyondLink can revolutionize your deep
            linking strategy,{" "}
            <span
              className="text-[#FF6333] hover:underline cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              contact us
            </span>{" "}
            today or visit our
            <span className="text-[#FF6333]"> website</span>.
          </p>
          {showForm && <ContactForm onClose={() => setShowForm(false)} />}
        </section>
      </main>
    </div>
  );
}
