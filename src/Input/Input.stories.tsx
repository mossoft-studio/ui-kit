import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import Input from "./Input";

type PlaygroundFormValues = {
  value: string | number | null;
};

type FormValues = {
  name: string;
  phone: string;
  amount: number | null;
};

type InputPlaygroundProps = {
  size?: "sm" | "md" | "lg";
  type?: "text" | "password" | "tel" | "number";
  label?: string;
  placeholder?: string;
  floatingLabel?: boolean;
  requiredMark?: boolean;
  format?: string;
  postfix?: string;
  decimalScale?: number;
  disabled?: boolean;
};

const InputPlayground: React.FC<InputPlaygroundProps> = (args) => {
  const { control, handleSubmit, formState } = useForm<PlaygroundFormValues>({
    defaultValues: {
      value: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: PlaygroundFormValues) => {
    console.log("submit", data);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Controller
          name="value"
          control={control}
          rules={{ required: "Поле обязательно" }}
          render={(inputFields) => (
            <Input
              size={args.size}
              type={args.type}
              label={args.label}
              placeholder={args.placeholder}
              floatingLabel={args.floatingLabel}
              requiredMark={args.requiredMark}
              format={args.format}
              postfix={args.postfix}
              decimalScale={args.decimalScale}
              disabled={args.disabled}
              {...inputFields}
            />
          )}
        />

        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

const InputFormDemo: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      amount: null,
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("submit form demo", data);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Введите имя" }}
          render={(inputFields) => (
            <Input
              size="md"
              type="text"
              label="Имя"
              placeholder="Иван Иванов"
              floatingLabel
              requiredMark
              {...inputFields}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{ required: "Введите телефон" }}
          render={(inputFields) => (
            <Input
              size="md"
              type="tel"
              label="Телефон"
              placeholder="+7 (___) ___-__-__"
              format="+7 (###) ###-##-##"
              floatingLabel
              requiredMark
              {...inputFields}
            />
          )}
        />

        <Controller
          name="amount"
          control={control}
          rules={{ required: "Введите сумму" }}
          render={(inputFields) => (
            <Input
              size="md"
              type="number"
              label="Сумма"
              placeholder="0"
              decimalScale={2}
              postfix="₽"
              floatingLabel
              requiredMark
              {...inputFields}
            />
          )}
        />

        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Отправить форму
        </button>
      </form>
    </div>
  );
};

const meta: Meta<typeof InputPlayground> = {
  title: "UI/Input",
  component: InputPlayground,
  args: {
    size: "md",
    type: "text",
    label: "Имя",
    placeholder: "Иван Иванов",
    floatingLabel: true,
    requiredMark: true,
    format: "",
    postfix: "",
    decimalScale: 2,
    disabled: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "inline-radio",
      options: ["text", "password", "tel", "number"],
    },
    floatingLabel: {
      control: "boolean",
    },
    requiredMark: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    format: {
      control: "text",
      description: "Маска для PatternFormat (например: +7 (###) ###-##-##)",
    },
    postfix: {
      control: "text",
      description: "Постфикс для number-поля (₽, $, % и т.п.)",
    },
    decimalScale: {
      control: "number",
      description: "Количество знаков после запятой для number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputPlayground>;

export const Playground: Story = {};

export const Text: Story = {
  args: {
    type: "text",
    label: "Имя",
    placeholder: "Иван Иванов",
    format: "",
    postfix: "",
  },
};

export const Phone: Story = {
  args: {
    type: "tel",
    label: "Телефон",
    placeholder: "+7 (___) ___-__-__",
    format: "+7 (###) ###-##-##",
    postfix: "",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    label: "Сумма",
    placeholder: "0",
    postfix: "₽",
    decimalScale: 2,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FormDemo: Story = {
  render: () => <InputFormDemo />,
  args: {},
};
