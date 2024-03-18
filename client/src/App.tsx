import React from "react";
import { Box } from "@radix-ui/themes";
import Pannel from "./components/Pannel";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

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
    <ApolloProvider client={client}>
      <AppContainer>
        <SideBar />
        <Pannel />
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
