import { Box } from "@radix-ui/themes";
import React from "react";
import styled from "styled-components";

import SideBar from "./SideBar";
import TopBar from "./TopBar";

const PannelContainer = styled(Box)`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Pannel = () => {
  return (
    <PannelContainer>
      <TopBar />
    </PannelContainer>
  );
};

export default Pannel;
