import type { Preview } from "@storybook/react";
import React from "react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { initTelegramMock } from "../src/utils/mockTelegramEnv";

// Ensure CSS variables are available from library
import "@telegram-apps/telegram-ui/dist/styles.css";

// Initialize mock before any rendering
initTelegramMock();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    appearance: {
      name: "Appearance",
      description: "Global appearance for components",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
      },
    },
    platform: {
      name: "Platform",
      description: "Platform appearance for components",
      defaultValue: "ios",
      toolbar: {
        icon: "mobile",
        items: ["ios", "base"],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { appearance, platform } = context.globals;

      // Update the mock environment to reflect the current theme selection
      if (typeof window !== "undefined" && (window as any).Telegram?.WebApp) {
        (window as any).Telegram.WebApp.colorScheme = appearance;
        (window as any).Telegram.WebApp.platform = platform;

        // Mock bg color to match appearance roughly
        document.body.style.backgroundColor =
          appearance === "dark" ? "#000000" : "#ffffff";
      }

      return (
        <AppRoot appearance={appearance} platform={platform}>
          <div style={{ padding: "20px" }}>
            <Story />
          </div>
        </AppRoot>
      );
    },
  ],
};

export default preview;
