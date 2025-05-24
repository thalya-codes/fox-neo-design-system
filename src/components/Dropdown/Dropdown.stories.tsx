import type { Meta, StoryFn } from "@storybook/react";
import {Dropdown} from "./index";

const meta = {
  title: "Navigation/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: {
      description:
        "Permite informar uma lista de itens que irão compor o conteúdo do dropdown",
    },
    children: {
      description:
        "Permite usar qualquer componente React como trigger do dropdown",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryFn<typeof Dropdown>;

const items = [
  { text: "Configurações", onClick: () => console.log("click configurações") },
  { text: "Sair", onClick: () => console.log("click sair") },
];

//TODO: Add the component Avatar as trigger of dropdown

export const Template: Story = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Dropdown items={items}>Exibir dropdown</Dropdown>
  </div>
);
