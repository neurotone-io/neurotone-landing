import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FF6333] text-black py-8 md:h-[250px] px-4 md:px-12 flex justify-center items-center font-outfit">
      <div className="flex flex-col w-full max-w-[1440px] justify-around h-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Logo Section */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link href="/#Hero">
              <Image
                src="/images/neurotone_2.png"
                width={1000}
                height={600}
                alt="Beyond Link Logo"
                className="h-10 w-auto hover:opacity-90 transition-all"
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 text-md font-medium items-center mb-4 md:mb-0 md:mr-12">
              <Link href="/policy" className="hover:underline">
                Policy
              </Link>
              <Link href="/" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="/#Hero" className="hover:underline">
                Subscribe
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <Link href="#">
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={600}
                  height={600}
                  className="h-7 w-auto bg-black rounded-md p-1"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/twitter.png"
                  alt="Facebook"
                  width={600}
                  height={600}
                  className="h-7 w-auto bg-black rounded-md p-1"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/instagram.png"
                  alt="Facebook"
                  width={600}
                  height={600}
                  className="h-7 w-auto bg-black rounded-md p-1"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/linkedin.png"
                  alt="Facebook"
                  width={600}
                  height={600}
                  className="h-7 w-auto bg-black rounded-md p-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-black my-6" />

        {/* Copyright */}
        <div className=" flex justify-between text-sm text-center">
          <p className="">Copyright © 2025 neurotone |</p>
          <p className="">| All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
