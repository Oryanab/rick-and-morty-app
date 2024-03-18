import { useQuery } from "@apollo/client";
import { Box, Button, Flex, Skeleton } from "@radix-ui/themes";
import gql from "graphql-tag";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Characters } from "../types";
import ActionsDialog from "./ActionsDialog";

export const queries = {
  characters: (page: number) => `
    query GetCharacters {
        characters(page: ${page}) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                species
                origin {
                    name
                }
                location {
                    name
                }
            }
        }
    }
  `,
  singleCharacter: (id: number) => `
    query GetSingleCharacter {
        character (id: $${id}) {
            id
            name
            species
            status
            type
            gender
            origin{name}
            location {name}
            image
            episode {
                name
                episode
            }
        }
    }
  `,
};

const CharactersTableContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 300px;
`;

const PaginationContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 
  width: 100%;
  padding: 20px 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;

  .pagination-buttons {
    display: flex;
    gap: 10px;
    padding-right: 50px;
    
    button {
        width: 70px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 12px;
    }
  }
`;

interface CharactersTableRowProps {
  type: "row" | "header";
  id?: string;
  name?: string;
  species?: string;
  origin?: Characters["characters"]["results"][0]["origin"];
  location?: Characters["characters"]["results"][0]["location"];
}

const CharactersTableRow: React.FC<CharactersTableRowProps> = ({
  type,
  id,
  name,
  species,
  origin,
  location,
}) => {
  return (
    <Flex
      style={{
        alignItems: "center",
        marginBottom: 10,
        background: type === "header" ? "#14203C" : "#fff",
        color: type === "header" ? "#fff" : "#14203C",
        height: "50px",
        borderRadius: "4px",
      }}
    >
      <Box style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
        {type === "header" ? "Name" : name}
      </Box>
      <Box style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
        {type === "header" ? "Species" : species}
      </Box>
      <Box
        style={{ flex: 1, marginLeft: 10, marginRight: 10, minWidth: "300px" }}
      >
        {type === "header" ? "Origin" : origin?.name}
      </Box>
      <Box
        style={{ flex: 1, marginLeft: 10, marginRight: 10, minWidth: "300px" }}
      >
        {type === "header" ? "Location" : location?.name}
      </Box>
      <Box
        style={{
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
          textAlign: "center",
        }}
      >
        {type === "header" ? "Actions" : <ActionsDialog characterId={id!} />}
      </Box>
    </Flex>
  );
};

const LoadingTable = () => (
  <>
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
    <Skeleton
      style={{ height: "50px", borderRadius: "4px", marginBottom: 10 }}
    />
  </>
);

interface CharactersTableProps {
  initalDataInfo?: Characters["characters"]["info"];
}

const CharactersTable: React.FC<CharactersTableProps> = ({
  initalDataInfo = {} as Characters["characters"]["info"],
}) => {
  const [page, setPage] = useState<number>(1);
  const [dataInfo, setDataInfo] =
    useState<Characters["characters"]["info"]>(initalDataInfo);
  const { data, loading } = useQuery<Characters>(gql`
    ${queries.characters(page)}
  `);

  const handleNextPage = useCallback(() => {
    if (data?.characters.info?.next && !loading) {
      setPage(data?.characters.info?.next);
    }
  }, [data]);

  const handlePrevPage = useCallback(() => {
    if (data?.characters.info?.prev && !loading) {
      setPage(data?.characters.info?.prev);
    } else {
      setPage(1);
    }
  }, [data]);

  const displayShowing = useMemo(() => {
    if (dataInfo) {
      if (page * 20 < dataInfo?.count) {
        return page * 20;
      } else {
        return (page - 1) * 20 + (dataInfo?.count % (page - 1));
      }
    }
  }, [dataInfo]);

  useEffect(() => {
    if (data?.characters.info) {
      setDataInfo(data?.characters.info);
    }
  }, [data?.characters.info]);

  return (
    <CharactersTableContainer>
      <h1>Characters</h1>
      <>
        <CharactersTableRow type="header" />

        <Box
          style={{ maxHeight: "400px", height: "400px", overflow: "scroll" }}
        >
          {loading ? (
            <LoadingTable />
          ) : (
            <>
              {data?.characters.results.map((character) => (
                <CharactersTableRow
                  key={character.id}
                  type="row"
                  {...character}
                />
              ))}
            </>
          )}
        </Box>

        <PaginationContainer>
          <span>
            Showing {displayShowing} of {dataInfo?.count} entries
          </span>
          <div className="pagination-buttons">
            <Button
              disabled={dataInfo && !dataInfo?.prev}
              onClick={handlePrevPage}
            >
              Previous
            </Button>
            <Button
              disabled={dataInfo && !dataInfo?.next}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        </PaginationContainer>
      </>
    </CharactersTableContainer>
  );
};

export default CharactersTable;
