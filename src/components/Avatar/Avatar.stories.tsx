import type { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "./index";

const meta = {
  title: "Content/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: "text",
      description:
        "Permite definir a url ou caminho da imagem a ser utilizada no avatar",
    },
    alt: {
      control: "text",
      description:
        "Permite adicionar um texto alternativo ao avatar, quando o mesmo é uma imagem",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryFn<typeof Avatar>;

const Template: Story = (args) => (
  <div className="flex flex-wrap items-center gap-4">
    <Avatar {...args} />
  </div>
);

export const UserNameInitial = Template.bind({});

UserNameInitial.args = {
  name: "Jonh Doe",
  size: "sm",
};

export const UserPhoto = Template.bind({});

UserPhoto.args = {
  src: "https://images.pexels.com/photos/5653607/pexels-photo-5653607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  size: "sm",
  alt: "Foto do usuário",
  name: "",
};
