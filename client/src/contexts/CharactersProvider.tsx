import { gql, useQuery } from "@apollo/client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  created: string;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  image: string;
  episode: Episode[];
  created: string;
}

export interface Characters {
  characters: {
    info: {
      count: number;
      next: number | null;
      pages: number;
      prev: number | null;
    };
    results: {
      id: string;
      location: {
        name: Location["name"];
      };
      name: Character["name"];
      origin: {
        name: Location["dimension"];
      };
      species: string;
    }[];
  };
}

const queries = {
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

interface CharactersContextProps {
  children: React.ReactNode;
}

interface CharactersContextReturnType {
  characters: Character[] | null;
  isLoading: boolean;
  page: number;
  setPage: (page: number) => void;
}

const CharactersContext = createContext<CharactersContextReturnType | null>(
  null
);

export const CharactersProvider: React.FC<CharactersContextProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading, error } = useQuery(
    gql`
      ${queries.characters(page)}
    `
  );

  const value: CharactersContextReturnType = {
    characters,
    isLoading,
    page,
    setPage,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
