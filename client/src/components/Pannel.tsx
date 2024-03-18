import React from "react";
import { Box } from "@radix-ui/themes";
import styled from "styled-components";
import TopBar from "./TopBar";
import CharactersTable from "./CharactersTable";

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
      <CharactersTable />
    </PannelContainer>
  );
};

export default Pannel;
