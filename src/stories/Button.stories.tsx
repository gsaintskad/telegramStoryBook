import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@telegram-apps/telegram-ui";

const meta: Meta<typeof Button> = {
  title: "Telegram UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["filled", "bezeled", "plain", "gray", "outline", "white"],
      description: "The visual mode of the button.",
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
      description: "Button size.",
    },
    disabled: {
      control: "boolean",
      description: "Controls the disabled property.",
    },
    loading: {
      control: "boolean",
      description: "Controls the loading property.",
    },
    stretched: {
      control: "boolean",
      description: "Stretches the button to a 100% width container.",
    },
    children: {
      control: "text",
      description: "Button text.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    size: "m",
    mode: "filled",
    disabled: false,
    loading: false,
    stretched: false,
  },
};

export const Bezeled: Story = {
  args: {
    children: "Bezeled Button",
    mode: "bezeled",
  },
};

export const Plain: Story = {
  args: {
    children: "Plain Button",
    mode: "plain",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    mode: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
  },
};

export const Stretched: Story = {
  args: {
    children: "Stretched Button",
    stretched: true,
  },
};
