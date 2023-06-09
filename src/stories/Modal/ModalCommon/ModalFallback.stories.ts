import { Meta, StoryObj } from "@storybook/react";
import ModalFallback from "@components/Modal/ModalCommon/ModalFallback";

const meta: Meta<typeof ModalFallback> = {
  title: "components/modal/ModalCommon/ModalFallback",
  component: ModalFallback,
};

export default meta;

type Story = StoryObj<typeof ModalFallback>;

export const Modal_Fallback: Story = {
  args: {},
};
