import type { Meta, StoryFn } from "@storybook/react";
import { Card } from "./compositions";
import type { TCardParagraph, TCardRoot, TCardTitle } from "./types";

const meta = {
  title: "Content/Card",
  component: Card.Root,
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Permite definir o tamanho do título e do parágrafo do card",
    },
    variant: {
      control: "radio",
      options: ["default", "outlined"],
      description: "Permite definir o tipo do Card",
    },
  },
  args: {
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<TCardRoot & TCardTitle & TCardParagraph>;

export default meta;

type Story = StoryFn<TCardRoot & TCardTitle & TCardParagraph>;

export const Default: Story = (args) => (
  <div className="bg-gray-100">
    <Card.Root {...args}>
      <Card.Title size={args.size}>Título do Card</Card.Title>
      <Card.Paragraph size={args.size}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin, nisi nec efficitur tincidunt, nunc ligula facilisis
        ligula, id tincidunt enim nunc ut nisi.
      </Card.Paragraph>
    </Card.Root>
  </div>
);

Default.args = {
  variant: "default",
};

export const Outlined: Story = (args) => (
  <div className="bg-gray-100">
    <Card.Root {...args} variant="outlined">
      <Card.Title size={args.size}>Título do Card</Card.Title>
      <Card.Paragraph size={args.size}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sollicitudin, nisi nec efficitur tincidunt, nunc ligula facilisis
        ligula, id tincidunt enim nunc ut nisi.
      </Card.Paragraph>
    </Card.Root>
  </div>
);

Outlined.args = {
  variant: "outlined",
};
