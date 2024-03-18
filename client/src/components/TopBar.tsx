import { Box } from "@radix-ui/themes";
import React from "react";
import styled from "styled-components";

const TopBarContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 1px 0 0 #dde1e6;
  height: 70px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 0 24px;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <span>Welcome Back</span>
      <img
        style={{ userSelect: "none" }}
        src="/images/Rick_and_Morty_logo.png"
        width={120}
        height={40}
      />
    </TopBarContainer>
  );
};

export default TopBar;
