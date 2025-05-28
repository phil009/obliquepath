"use client";
import Script from "next/script";

const AIChatWidget = () => {
  return (
    <>
      <Script
        src="https://testmyprompt.com/widget/683621ee71cfcf29f8614015/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.AIChatWidget) {
            window.AIChatWidget.init({
              widgetId: "683621ee71cfcf29f8614015",
            });
          }
        }}
      />
    </>
  );
};

export default AIChatWidget;
