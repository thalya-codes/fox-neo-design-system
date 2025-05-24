import { Modal } from "./compositions";
import type { TModalHeader, TModalRoot } from "./types";
import { useState, useEffect } from "react";
import { Button } from "../Button";
import type { Meta } from "@storybook/react";

const meta = {
  title: "Dialog/Modal",
  component: Modal.Header,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "danger"],
      description: "Define o tipo do Modal",
    },
    title: {
      control: "text",
      description: "Define o título do Modal",
    },
    open: {
      control: "boolean",
      description: "Define a visibilidade do Modal",
    },
    onClose: {
      description: "Definie uma função responsável por fechar o Modal",
    },
  },
  args: {
    title: "Título do Modal",
    variant: "default",
    open: false,
  },
  tags: ["autodocs"],
} satisfies Meta<TModalHeader & TModalRoot>;

export default meta;

export const Default = ({
  open,
  title,
  variant,
}: TModalHeader & TModalRoot) => {
  const [show, setShow] = useState(open);
  const onClose = () => setShow(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <>
      <Button onClick={() => setShow(true)}>Abrir modal</Button>
      <Modal.Root open={show} onClose={onClose}>
        <Modal.Header variant={variant} title={title} onClose={onClose} />
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            odit, quibusdam quam ad ipsa minima adipisci accusamus vitae,
            corporis tenetur temporibus doloremque rerum. Quisquam itaque
            numquam ullam at nobis impedit.
          </p>
        </Modal.Body>
      </Modal.Root>
    </>
  );
};

export const WithFooter = ({
  open,
  title,
  variant,
}: TModalHeader & TModalRoot) => {
  const [show, setShow] = useState(open);
  const onClose = () => setShow(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <>
      <Button onClick={() => setShow(true)}>Abrir modal</Button>
      <Modal.Root open={show} onClose={onClose}>
        <Modal.Header title={title} variant={variant} onClose={onClose} />
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            odit, quibusdam quam ad ipsa minima adipisci accusamus vitae,
            corporis tenetur temporibus doloremque rerum. Quisquam itaque
            numquam ullam at nobis impedit.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant={variant === "default" ? "primary" : "danger"}
            onClick={onClose}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
};
