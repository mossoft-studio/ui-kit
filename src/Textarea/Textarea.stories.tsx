import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";
import { Controller, useForm } from "react-hook-form";

const Demo = () => {
  const { control } = useForm({
    defaultValues: {
      text: "",
    },
    mode: "onChange",
  });

  return (
    <div className="max-w-md mx-auto space-y-4">
      <Controller
        name="text"
        control={control}
        rules={{ required: "Поле обязательно" }}
        render={(inputFields) => (
          <Textarea placeholder="Введите текст..." {...inputFields} />
        )}
      />
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "UI/Textarea",
  component: Demo,
};

export default meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {};
