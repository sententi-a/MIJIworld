import { Meta, StoryObj } from "@storybook/react";
import ReviewCard from "@components/Modal/ModalCommon/ReviewCard";

const meta: Meta<typeof ReviewCard> = {
  title: "components/modal/ModalCommon/ReviewCard",
  component: ReviewCard,
};

export default meta;

type Story = StoryObj<typeof ReviewCard>;

export const Review_Card: Story = {
  args: { restName: "samarkant", mapType: "kakao" },
};
