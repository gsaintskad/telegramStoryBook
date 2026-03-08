import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Radio, Switch, Slider } from "@telegram-apps/telegram-ui";
import React, { useState } from "react";

const meta: Meta = {
  title: "Telegram UI/Inputs and Forms/Controls",
  tags: ["autodocs"],
};

export default meta;

export const CheckboxStory: StoryObj<typeof Checkbox> = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    disabled: false,
  },
};

export const RadioStory: StoryObj<typeof Radio> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("1");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Radio
            name="radio-group"
            value="1"
            checked={selectedValue === "1"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          Option 1
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Radio
            name="radio-group"
            value="2"
            checked={selectedValue === "2"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          Option 2
        </label>
      </div>
    );
  },
};

export const SwitchStory: StoryObj<typeof Switch> = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    disabled: false,
  },
};

export const SliderStory: StoryObj<typeof Slider> = {
  render: (args) => {
    const [value, setValue] = useState(50);
    return (
      <div style={{ padding: "0 20px" }}>
        <Slider
          min={args.min ?? 0}
          max={args.max ?? 100}
          step={args.step ?? 1}
          multiple={false}
          value={value}
          onChange={(val) => setValue(val as number)}
        />
        <div style={{ marginTop: "16px", textAlign: "center" }}>Value: {value}</div>
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};
