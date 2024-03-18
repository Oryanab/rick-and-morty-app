import React from "react";
import { SessionProvider } from "./contexts/SessionProvider";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import Pannel from "./components/Pannel";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { CharactersProvider } from "./contexts/CharactersProvider";

const AppContainer = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  font-familty: Roboto;
`;

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <CharactersProvider>
          <AppContainer>
            <SideBar />
            <Pannel />
          </AppContainer>
        </CharactersProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
