import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Stepper, { Step } from "./Stepper";
import Button from "../Button/Button";

const steps: Step[] = [
  {
    id: "step-1",
    label: "Основные данные",
    description: "Имя, email, телефон",
  },
  {
    id: "step-2",
    label: "Адрес",
    description: "Город и улица",
  },
  {
    id: "step-3",
    label: "Подтверждение",
    description: "Проверка и отправка",
  },
];

const StepperPlayground: React.FC = () => {
  const [currentStepId, setCurrentStepId] = useState<string>("step-1");
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Stepper
        steps={steps}
        currentStepId={currentStepId}
        onStepChange={setCurrentStepId}
        clickable
      />
    </div>
  );
};

const meta: Meta<typeof StepperPlayground> = {
  title: "UI/Stepper",
  component: StepperPlayground,
};

export default meta;

type Story = StoryObj<typeof StepperPlayground>;

export const Playground: Story = {};
