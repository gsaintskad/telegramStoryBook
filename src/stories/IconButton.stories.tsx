import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@telegram-apps/telegram-ui";
import React from "react";

const meta: Meta<typeof IconButton> = {
  title: "Telegram UI/Actions/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["bezeled", "plain", "gray", "outline"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const ExampleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Default: Story = {
  args: {
    children: <ExampleIcon />,
    size: "m",
    mode: "bezeled",
  },
};

export const Modes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <IconButton mode="bezeled"><ExampleIcon /></IconButton>
      <IconButton mode="plain"><ExampleIcon /></IconButton>
      <IconButton mode="gray"><ExampleIcon /></IconButton>
      <IconButton mode="outline"><ExampleIcon /></IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton size="s"><ExampleIcon /></IconButton>
      <IconButton size="m"><ExampleIcon /></IconButton>
      <IconButton size="l"><ExampleIcon /></IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: <ExampleIcon />,
    disabled: true,
  },
};
