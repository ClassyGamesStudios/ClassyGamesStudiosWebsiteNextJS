"use client";

import { useEffect } from "react";

export default function ClarityAnalytics() {
  useEffect(() => {
    // Avoid injecting the Clarity script multiple times
    if (document.getElementById("clarity-script")) return;

    const script = document.createElement("script");
    script.id = "clarity-script";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "ucl4qopmu7");
    `;

    document.head.appendChild(script);
  }, []);

  return null;
}