import styled from "styled-components";
import {
  VerticalButtons,
  Background,
  Logo,
  SearchBar,
  Text,
} from "@components/common";
import BgImage from "@assets/images/list/bg.png";
import RestCardList from "@components/List/RestCardList";
import Modal from "@pages/Modal";
import { useState } from "react";
import { useRestaurants } from "@hooks/queries/restaurant";
import useSearch from "@hooks/useSearch";

export default function ListPage() {
  const { keyword, handleSearchChange } = useSearch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRest, setCurrentRest] = useState("");

  const { data } = useRestaurants(keyword);

  const handleCardClick = (restName: string) => {
    setIsModalOpen((prev) => !prev);
    setCurrentRest(restName);
  };

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo isMain={false} />
      <VerticalButtons isMap={false} isList={true} />
      <Wrapper>
        <SearchBar handleOnChange={handleSearchChange} />
        <Text
          text={`검색 결과 : ${data.length}개`}
          size="t4"
          bold={true}
          style={{ color: "#8D8DE5" }}
        />
        <RestCardList restData={data} handleOnClick={handleCardClick} />
      </Wrapper>
      {isModalOpen && (
        <Modal restName={currentRest} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 8vmax;
  gap: 1vh;
`;
