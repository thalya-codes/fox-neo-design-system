import type { Meta, StoryFn } from "@storybook/react";
import { Input } from ".";
import type { TInput } from "./types";

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "error"],
      description: "Define o tipo do input",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryFn<typeof Input>;

export const Default: Story = (args: TInput) => <Input {...args} />;

Default.args = {
  variant: "default",
  placeholder: "Placeholder",
};
