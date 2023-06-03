import styled from "styled-components";
import React from "react";

interface BackgroundProps {
  bgPath: string;
  //   isMain: boolean;
}

function Background({ bgPath }: BackgroundProps) {
  return (
    <>
      <BackImage path={bgPath} />
      {/* {isMain ? <KoreanLogo src={LogoKr} /> : <EnglishLogo src={LogoEn} />} */}
      {/* </BackImage> */}
    </>
  );
}

const KoreanLogo = styled.img`
  width: 12vw;
  margin-top: 3vw;
  margin-left: 10vw;
  position: absolute;
`;

const EnglishLogo = styled.img`
  width: 10vw;
  margin-top: 2vw;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const BackImage = styled.div<{ path: string }>`
  background: url(${(props) => props.path}) no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
`;

export const MemoizedBackground = React.memo(Background);
