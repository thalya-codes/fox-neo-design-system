import type { Meta } from "@storybook/react";
import { Select } from ".";
import type { TSelect } from "./types";

const meta = {
  title: "Form/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["default", "error"],
        description: "Define o tipo do Select",
      },
    },
    placeholder: {
      control: {
        type: "text",
        description: "Define o placeholder Select",
      },
    },
    options: {
      control: {
        control: { disabled: true },
        description: "Define as opções do Select",
      },
    },
    defaultValue: {
      control: {
        control: "Text",
        description: "Define o valor padrão do Select",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

export const Default = (args: TSelect) => <Select {...args} />;

Default.args = {
  variant: "default",
  placeholder: "Selecione uma opção",
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
};
