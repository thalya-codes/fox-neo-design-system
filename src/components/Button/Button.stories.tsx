import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import type { TButton } from "./types";

const meta = {
  title: "Action/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "outline", "link", "danger"],
      description: "Define o tipo do botão",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Define o tamanho do botão",
    },
    children: {
      control: "text",
      description: "Define o conteúdo do botão",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args: TButton) => <Button {...args} />;

Default.args = {
  variant: "primary",
  size: "sm",
  children: "Botão",
}