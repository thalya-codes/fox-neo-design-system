import type { Meta, StoryFn } from "@storybook/react";
import type { TCheckboxField } from "./types";
import { Checkbox } from "./compositions";

const meta = {
  title: "Form/Checkbox",
  component: Checkbox.Field,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "error"],
      description: "Define o tipo do checkbox",
    },
    defaultChecked: {
      control: "boolean",
      description: "Define se o checkbox deve ser marcado por padrão",
    },
    checked: {
      control: "boolean",
      description: "Define se o checkbox deve ser marcado",
    },
    onChange: {
      action: "changed",
      description: "Função chamada quando o checkbox é alterado",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox.Field>;

export default meta;

type Story = StoryFn<typeof Checkbox.Field>;

export const Default: Story = (args: TCheckboxField) => (
  <Checkbox.Field {...args} />
);

export const WithLabel = (args: TCheckboxField) => (
  <Checkbox.Container>
    <Checkbox.Field id="1" {...args} />
    <Checkbox.Label htmlFor="1">Label</Checkbox.Label>
  </Checkbox.Container>
);

export const WithMessage: Story = ({ variant, ...args }: TCheckboxField) => (
  <Checkbox.Root>
    <Checkbox.Container>
      <Checkbox.Field id="2" variant={variant} {...args} />
      <Checkbox.Label htmlFor="2">Label</Checkbox.Label>
    </Checkbox.Container>

    <Checkbox.Message variant={variant}>*Campo obrigatório</Checkbox.Message>
  </Checkbox.Root>
);
