// types/window.d.ts or global.d.ts

export {};

declare global {
  interface Window {
    AIChatWidget: {
      init: (config: { widgetId: string }) => void;
    };
  }
}
