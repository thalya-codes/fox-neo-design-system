import type { Meta, StoryFn } from "@storybook/react";
import { CreditCard } from "./compositions";
import type { TCreditCardBody, TCreditCardHeader, TCreditCardRoot } from "./types";

const meta = {
  title: "Content/CreditCard",
  component: CreditCard.Root,
  argTypes: {
    type: {
      control: "radio",
      options: ["basic", "black"],
      description: "Define o tipo do cartão de crédito",
    },
    userFullName: {
      control: "text",
      description: "Define o nome do usuário",
    },
    cardNumber: {
      control: "object",
      description: "Define o número do cartão de crédito",
    },
    validity: {
      control: "text",
      description: "Define a validade do cartão de crédito",
    },
    logoSrc: {
      control: "text",
      description: "Define a url da logo"
    },
    logoAlt: {
      control: "text",
      description: "Define um texto alternativo para logo"
    },
    nfcSrc: {
      control: "text",
      description: "Define a url da nfc"
    },
    nfcAlt: {
      control: "text",
      description: "Define um texto alternativo para a nfc"
    }
  },
  args: {
    type: "basic",
    userFullName: "Jonh Doe",
    cardNumber: [1111, 1111, 1111, 1111],
    validity: "00/00",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<TCreditCardRoot & TCreditCardBody & TCreditCardHeader>;

export default meta;

type Story = StoryFn<TCreditCardRoot & TCreditCardBody>;

export const Default: Story = ({
  cardNumber,
  userFullName,
  validity,
  ...args
}) => (
  <CreditCard.Root {...args}>
    <CreditCard.Header />
    <CreditCard.Body
      cardNumber={cardNumber}
      userFullName={userFullName}
      validity={validity}
    />
  </CreditCard.Root>
);
