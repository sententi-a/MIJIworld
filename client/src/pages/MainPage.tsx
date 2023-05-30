import styled from "styled-components";
import Main from "../assets/images/main/main.png";
import { useNavigate } from "react-router-dom";
import { MemoizedBackground } from "../components/Background";

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/map");
  };

  return (
    <>
      <MemoizedBackground bgPath={Main} isMain={true} />
      <div style={{ position: "relative" }}>
        <Heading1>
          Eat the World, <br />
          Meet the World!
        </Heading1>
        <Heading2>당신이 알지 못했던 세계 음식 맛집 소개 서비스</Heading2>
        <Button onClick={handleButtonClick}>맛보러 가기</Button>
      </div>
    </>
  );
}

const Heading1 = styled.h1`
  font-size: 3.7vw;
  font-family: yg-jalnan;
  line-height: 1.18;
  color: #b0b0ef;
  margin-left: 10vw;
  margin-top: 15vh;
`;

const Heading2 = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  font-family: yg-jalnan;
  line-height: 1.43;
  color: #979797;
  margin-left: 10vw;
  margin-top: 1.3vh;
`;

const Button = styled.button`
  padding: 10px 30px 10px 30px;
  height: 6vh;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 2vw;
  margin-left: 10vw;
  margin-top: 6vh;
  background-color: #8d8de5;

  :hover {
    color: #8d8de5;
    background-color: white;
  }
`;
