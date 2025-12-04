import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";
import Button from "../Button/Button";

type ToastItem = {
  id: number;
  variant: "success" | "error" | "info" | "warning";
  title: string;
  description?: string;
};

const ToastPlayground: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const pushToast = (toast: Omit<ToastItem, "id">) => {
    setToasts((prev) => [
      ...prev,
      { ...toast, id: Date.now() + Math.random() },
    ]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="h-[320px] flex flex-col gap-4 items-start justify-start">
      <div className="flex flex-wrap gap-3">
        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            pushToast({
              variant: "success",
              title: "Успешно сохранено",
              description: "Изменения профиля применены.",
            })
          }
        >
          Success
        </Button>

        <Button
          variant="danger"
          size="sm"
          onClick={() =>
            pushToast({
              variant: "error",
              title: "Ошибка",
              description: "Не удалось сохранить изменения.",
            })
          }
        >
          Error
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            pushToast({
              variant: "info",
              title: "Информация",
              description: "Мы обновили условия сервиса.",
            })
          }
        >
          Info
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            pushToast({
              variant: "warning",
              title: "Предупреждение",
              description: "Платёж скоро истечёт.",
            })
          }
        >
          Warning
        </Button>
      </div>

      {/* Контейнер в углу */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              variant={t.variant}
              title={t.title}
              description={t.description}
              onClose={() => removeToast(t.id)}
              autoCloseMs={4000}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const meta: Meta<typeof ToastPlayground> = {
  title: "UI/Toast",
  component: ToastPlayground,
};

export default meta;

type Story = StoryObj<typeof ToastPlayground>;

export const Playground: Story = {};
