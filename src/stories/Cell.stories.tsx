import type { Meta, StoryObj } from "@storybook/react";
import { Cell, Avatar, Badge } from "@telegram-apps/telegram-ui";
import React from "react";

const meta: Meta<typeof Cell> = {
  title: "Telegram UI/Cell",
  component: Cell,
  tags: ["autodocs"],
  argTypes: {
    subtitle: {
      control: "text",
      description: "Text under the main cell text.",
    },
    description: {
      control: "text",
      description: "Secondary text block often used for descriptions.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the cell is disabled.",
    },
    hovered: {
      control: "boolean",
      description: "Force hovered state visually.",
    },
    titleBadge: {
      control: "text",
      description: "Badge next to the cell title.",
    },
    multiline: {
      control: "boolean",
      description: "Whether the text can wrap multiple lines.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Default: Story = {
  args: {
    children: "Cell Item",
    subtitle: "Subtitle text details",
  },
};

export const WithAvatarAndDescription: Story = {
  args: {
    before: <Avatar size={48} acronym="JD" />,
    children: "John Doe",
    description: "Software Engineer",
    subtitle: "Active recently",
  },
};

export const Clickable: Story = {
  args: {
    children: "Clickable Cell",
    subtitle: "Tap me",
    onClick: () => alert("Cell clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Cell",
    subtitle: "Cannot be clicked or interacted with",
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    children:
      "This is a long text that wraps across multiple lines. This demonstrates how a multiline configuration on the Cell component operates under @telegram-apps/telegram-ui framework to adapt the internal styling properly.",
    multiline: true,
  },
};

export const WithBadge: Story = {
  args: {
    children: "Notifications",
    titleBadge: <Badge type="number">12</Badge>,
  },
};
