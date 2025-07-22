"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GoogleTag = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", "AW-394525042", {
          page_path: url,
        });
      }
    };

    const url = pathname + searchParams.toString();
    handleRouteChange(url);
  }, [pathname, searchParams]);

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-394525042"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-394525042');
        `,
        }}
      />
    </>
  );
};

export default GoogleTag;
