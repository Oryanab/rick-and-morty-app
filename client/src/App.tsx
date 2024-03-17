import React from "react";
import { SessionProvider } from "./contexts/SessionProvider";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import Pannel from "./components/Pannel";
import styled from "styled-components";
import SideBar from "./components/SideBar";

const AppContainer = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  font-familty: Roboto;
`;

const App = () => {
  return (
    <SessionProvider>
      <AppContainer>
        <SideBar />
        <Pannel />
      </AppContainer>
    </SessionProvider>
  );
};

export default App;
