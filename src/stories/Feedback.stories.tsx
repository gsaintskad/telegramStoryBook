import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, Badge, Placeholder, Progress, Spinner, CircularProgress, Skeleton, Tooltip, Snackbar, Modal, Banner, Card, Info } from "@telegram-apps/telegram-ui";
import React, { useState } from "react";

const meta: Meta = {
  title: "Telegram UI/Feedback and Data Display",
  tags: ["autodocs"],
};

export default meta;

export const AvatarStory: StoryObj<typeof Avatar> = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} acronym="A" size={28} />
      <Avatar {...args} acronym="B" size={40} />
      <Avatar {...args} acronym="C" size={48} />
      <Avatar {...args} acronym="D" size={96} />
    </div>
  ),
};

export const BadgeStory: StoryObj<typeof Badge> = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge {...args} type="number">1</Badge>
      <Badge {...args} type="dot" />
    </div>
  ),
};

export const PlaceholderStory: StoryObj<typeof Placeholder> = {
  render: (args) => <Placeholder {...args} />,
  args: {
    header: "Nothing Found",
    description: "Try searching for something else",
  },
};

export const ProgressStory: StoryObj<typeof Progress> = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 50,
  },
};

export const SpinnerStory: StoryObj<typeof Spinner> = {
  render: (args) => <Spinner {...args} />,
  args: {
    size: "m",
  },
};

export const CircularProgressStory: StoryObj<typeof CircularProgress> = {
  render: (args) => <CircularProgress {...args} />,
  args: {
    progress: 75,
  },
};

export const SkeletonStory: StoryObj<typeof Skeleton> = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Skeleton {...args} style={{ height: 24, borderRadius: 12, width: 200 }} />
      <Skeleton {...args} style={{ height: 16, borderRadius: 8, width: 150 }} />
      <Skeleton {...args} style={{ height: 16, borderRadius: 8, width: "100%" }} />
    </div>
  ),
};

export const TooltipStory: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <div style={{ padding: "50px" }}>
      <Tooltip {...args} content="This is a simple tooltip">
        <div style={{ display: "inline-block", color: "var(--tg-theme-text-color)" }}>Hover or tap me</div>
      </Tooltip>
    </div>
  ),
};

export const SnackbarStory: StoryObj<typeof Snackbar> = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ color: "var(--tg-theme-text-color)" }}>Show Snackbar</button>
        {open && (
          <Snackbar {...args} onClose={() => setOpen(false)}>
            This is a popup notification
          </Snackbar>
        )}
      </>
    );
  },
};

export const InfoStory: StoryObj<typeof Info> = {
  render: (args) => <Info {...args} />,
  args: {
    type: "text",
    subtitle: "Welcome back",
    children: "This is some informational text that gives more context to the user.",
  },
};

export const BannerStory: StoryObj<typeof Banner> = {
  render: (args) => (
    <Banner
      {...args}
      header="Update Available"
      subheader="A new version is ready to be installed."
    >
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <button style={{ padding: "8px 16px", borderRadius: "8px", background: "var(--tg-theme-button-color)", color: "var(--tg-theme-button-text-color)", border: "none" }}>Update</button>
      </div>
    </Banner>
  ),
};

export const CardStory: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args}>
      <React.Fragment>
        <Card.Cell readOnly subtitle="Card Subtitle">Card Header</Card.Cell>
        <div style={{ padding: "16px" }}>This is the main body of the card component with additional text.</div>
      </React.Fragment>
    </Card>
  ),
};

export const ModalStory: StoryObj<typeof Modal> = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ color: "var(--tg-theme-text-color)" }}>Open Modal</button>
        <Modal
          {...args}
          header={<Modal.Header>Modal Title</Modal.Header>}
          open={open}
          onOpenChange={(isOpen) => setOpen(isOpen)}
        >
          <div style={{ padding: "16px" }}>
            This is the modal content. You can place any standard React elements here.
          </div>
        </Modal>
      </>
    );
  },
};
