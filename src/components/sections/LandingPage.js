import React from "react";
import styled, { keyframes } from "styled-components";
//import SignUp from "../SignUp";
import { themes } from "../styles/ColorStyles";
import LogIn from "../LogIn";
import { H1, MediumText } from "../styles/TextStyles";
import { TypeAnimation } from "react-type-animation";
import NFTs from "../NFT";

function LandingPage() {
  return (
    <>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Gladius <br />
            Earn <br />
            <TypeAnimation
              sequence={[
                // Same String at the start will only be typed once, initially
                "Win",
                1000,
                "Succeed",
                1000,
                "Triumph",
                1000,
                "Excel",
                1000,
              ]}
              speed={50}
              style={{ fontWeight: "bold", fontSize: "60px" }}
              repeat={Infinity}
            />
          </Title>
          <Description>
            Unlock your athletic potential with our student-focused platform!
            Train, compete, and earn rewards in your favorite sports. Embrace
            challenges, excel, and become an elite sports star on this exciting
            journey!
          </Description>
        </TextWrapper>
        <LoginWrapper>
          <>
            <p>Email: bob@123.com Password: 123456</p>
            <LogIn />
          </>
        </LoginWrapper>
      </ContentWrapper>
      <NFTs></NFTs>
    </>
  );
}

export default LandingPage;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 100px 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% auto;
`;

const LoginWrapper = styled.div``;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;
    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
  }
`;

const Description = styled(MediumText)``;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  margin-bottom: 10px;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }
`;
