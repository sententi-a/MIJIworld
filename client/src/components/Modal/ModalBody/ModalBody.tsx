import RestOverview from "@components/Modal/ModalBody/RestOverview";
import RestMenu from "@components/Modal/ModalBody/RestMenu";
import RestPhoto from "@components/Modal/ModalBody/RestPhoto";
import RestReview from "./RestReview";
import RestTicket from "./RestTicket";

//TODO: type 절대경로
import { restDataType } from "../../../types/restaurant";

interface ModalBodyProps {
  restName: string;
  restData: restDataType;
}

export default function ModalBody({ restName, restData }: ModalBodyProps) {
  return (
    <ModalBodyWrapper>
      <RestOverview restName={restName} restData={restData} />

      <RestMenu restName={restName} />

      <RestPhoto restName={restName} />

      <RestReview restName={restName} />

      <RestTicket restName={restName} />
    </ModalBodyWrapper>
  );
}

interface ModalBodyWrapperProps {
  children: React.ReactNode;
}

function ModalBodyWrapper({ children }: ModalBodyWrapperProps) {
  return <div>{children}</div>;
}
