import { Box, Heading } from "@radix-ui/themes";
import React from "react";
import styled from "styled-components";
import UserMenu from "./UserMenu";

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
  font-style: normal;
  font-size: 18px;
  padding: 0 24px;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <span>Welcome, USERNAME</span>
      <UserMenu />
    </TopBarContainer>
  );
};

export default TopBar;
