import type { Meta, StoryFn } from "@storybook/react";
import { FormGroupRoot } from "./compositions/FormGroupRoot";
import { FormGroupLabel } from "./compositions/FormGroupLabel";
import { FormGroupMessage } from "./compositions/FormGroupMessage";
import type { TFormGroupMessage } from "./types";

const meta = {
  title: "Form/FormGroup",
  component: FormGroupRoot,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["default", "error"],
      description: "Define o tipo da mensagem",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormGroupMessage>;

export default meta;

type Story = StoryFn<typeof FormGroupMessage>;

//TODO: Replace html input for the component Input

export const Default: Story = ({ type }: TFormGroupMessage) => (
  <FormGroupRoot>
    <FormGroupLabel htmlFor="field-1">Label</FormGroupLabel>
    <input id="field-1" className="border-brand-400 rounded-sm border" />
    <FormGroupMessage type={type}>Lorem ipsum dolor sit amet</FormGroupMessage>
  </FormGroupRoot>
);

Default.args = {
  type: "default",
};
