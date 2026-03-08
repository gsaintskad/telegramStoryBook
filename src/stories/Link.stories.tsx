import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@telegram-apps/telegram-ui";
import React from "react";

const meta: Meta<typeof Link> = {
  title: "Telegram UI/Actions/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Telegram UI Link",
    href: "https://t.me",
    target: "_blank",
  },
};

export const InlineWithText: Story = {
  render: () => (
    <span style={{ color: "var(--tg-theme-text-color)" }}>
      This is a normal text paragraph with an <Link href="#">inline link</Link> inside it.
    </span>
  ),
};
