import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";

type PlaygroundProps = {
  size?: "sm" | "md" | "lg";
  closeOnOverlay?: boolean;
  hideCloseButton?: boolean;
};

const ModalPlayground: React.FC<PlaygroundProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <Button variant="primary" onClick={() => setOpen(true)}>
        Открыть модалку
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Подтвердите действие"
        size={args.size}
        closeOnOverlay={args.closeOnOverlay}
        hideCloseButton={args.hideCloseButton}
        footer={
          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
              size="sm"
            >
              Отмена
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                console.log("confirmed");
                setOpen(false);
              }}
            >
              Подтвердить
            </Button>
          </div>
        }
      >
        <p className="text-sm md:text-base text-gray-700 mb-3">
          Это действие нельзя будет отменить. Убедитесь, что вы всё проверили.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Запись будет удалена из системы</li>
          <li>Это повлияет на связанные отчёты</li>
          <li>Уведомления будут отправлены участникам процесса</li>
        </ul>
      </Modal>
    </div>
  );
};

const meta: Meta<typeof ModalPlayground> = {
  title: "UI/Modal",
  component: ModalPlayground,
  args: {
    size: "md",
    closeOnOverlay: true,
    hideCloseButton: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    closeOnOverlay: {
      control: "boolean",
    },
    hideCloseButton: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalPlayground>;

export const Playground: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const WithoutCloseButton: Story = {
  args: {
    hideCloseButton: true,
  },
};

export const NoOverlayClose: Story = {
  args: {
    closeOnOverlay: false,
  },
};
