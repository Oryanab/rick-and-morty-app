import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CharactersTable, { queries } from "./CharactersTable";
import { MockedProvider } from "@apollo/client/testing";
import gql from "graphql-tag";

const mocks = [
  {
    request: {
      query: gql`
        ${queries.characters(1)}
      `,
    },
    result: {
      data: {
        characters: {
          info: {
            count: 826,
            pages: 42,
            next: 2,
            prev: null,
            __typename: "Info",
          },
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              species: "Human",
              origin: {
                name: "Earth (C-137)",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "2",
              name: "Morty Smith",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "3",
              name: "Summer Smith",
              species: "Human",
              origin: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "4",
              name: "Beth Smith",
              species: "Human",
              origin: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "5",
              name: "Jerry Smith",
              species: "Human",
              origin: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "6",
              name: "Abadango Cluster Princess",
              species: "Alien",
              origin: {
                name: "Abadango",
                __typename: "Location",
              },
              location: {
                name: "Abadango",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "7",
              name: "Abradolf Lincler",
              species: "Human",
              origin: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              location: {
                name: "Testicle Monster Dimension",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "8",
              name: "Adjudicator Rick",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "9",
              name: "Agency Director",
              species: "Human",
              origin: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "10",
              name: "Alan Rails",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Worldender's lair",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "11",
              name: "Albert Einstein",
              species: "Human",
              origin: {
                name: "Earth (C-137)",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "12",
              name: "Alexander",
              species: "Human",
              origin: {
                name: "Earth (C-137)",
                __typename: "Location",
              },
              location: {
                name: "Anatomy Park",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "13",
              name: "Alien Googah",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "14",
              name: "Alien Morty",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "15",
              name: "Alien Rick",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "16",
              name: "Amish Cyborg",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "17",
              name: "Annie",
              species: "Human",
              origin: {
                name: "Earth (C-137)",
                __typename: "Location",
              },
              location: {
                name: "Anatomy Park",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "18",
              name: "Antenna Morty",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "19",
              name: "Antenna Rick",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "unknown",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "20",
              name: "Ants in my Eyes Johnson",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Interdimensional Cable",
                __typename: "Location",
              },
              __typename: "Character",
            },
          ],
          __typename: "Characters",
        },
      },
    },
  },
  {
    request: {
      query: gql`
        ${queries.characters(2)}
      `,
    },
    result: {
      data: {
        characters: {
          info: {
            count: 826,
            pages: 42,
            next: 3,
            prev: 1,
            __typename: "Info",
          },
          results: [
            {
              id: "21",
              name: "Aqua Morty",
              species: "Humanoid",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "22",
              name: "Aqua Rick",
              species: "Humanoid",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "23",
              name: "Arcade Alien",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Immortality Field Resort",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "24",
              name: "Armagheadon",
              species: "Alien",
              origin: {
                name: "Signus 5 Expanse",
                __typename: "Location",
              },
              location: {
                name: "Signus 5 Expanse",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "25",
              name: "Armothy",
              species: "unknown",
              origin: {
                name: "Post-Apocalyptic Earth",
                __typename: "Location",
              },
              location: {
                name: "Post-Apocalyptic Earth",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "26",
              name: "Arthricia",
              species: "Alien",
              origin: {
                name: "Purge Planet",
                __typename: "Location",
              },
              location: {
                name: "Purge Planet",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "27",
              name: "Artist Morty",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Citadel of Ricks",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "28",
              name: "Attila Starwar",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Interdimensional Cable",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "29",
              name: "Baby Legs",
              species: "Human",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Interdimensional Cable",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "30",
              name: "Baby Poopybutthole",
              species: "Poopybutthole",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "unknown",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "31",
              name: "Baby Wizard",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "32",
              name: "Bearded Lady",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "33",
              name: "Beebo",
              species: "Alien",
              origin: {
                name: "Venzenulon 7",
                __typename: "Location",
              },
              location: {
                name: "Venzenulon 7",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "34",
              name: "Benjamin",
              species: "Poopybutthole",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "Interdimensional Cable",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "35",
              name: "Bepisian",
              species: "Alien",
              origin: {
                name: "Bepis 9",
                __typename: "Location",
              },
              location: {
                name: "Bepis 9",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "36",
              name: "Beta-Seven",
              species: "Alien",
              origin: {
                name: "unknown",
                __typename: "Location",
              },
              location: {
                name: "unknown",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "37",
              name: "Beth Sanchez",
              species: "Human",
              origin: {
                name: "Earth (C-500A)",
                __typename: "Location",
              },
              location: {
                name: "Earth (C-500A)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "38",
              name: "Beth Smith",
              species: "Human",
              origin: {
                name: "Earth (C-137)",
                __typename: "Location",
              },
              location: {
                name: "Earth (C-137)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "39",
              name: "Beth Smith",
              species: "Human",
              origin: {
                name: "Earth (Evil Rick's Target Dimension)",
                __typename: "Location",
              },
              location: {
                name: "Earth (Evil Rick's Target Dimension)",
                __typename: "Location",
              },
              __typename: "Character",
            },
            {
              id: "40",
              name: "Beth's Mytholog",
              species: "Mythological Creature",
              origin: {
                name: "Nuptia 4",
                __typename: "Location",
              },
              location: {
                name: "Nuptia 4",
                __typename: "Location",
              },
              __typename: "Character",
            },
          ],
          __typename: "Characters",
        },
      },
    },
  },
];

describe(CharactersTable, () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CharactersTable
          initalDataInfo={mocks[0].result.data.characters.info}
        />
      </MockedProvider>
    );
  });

  it("Should render without error", async () => {
    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
    expect(
      await screen.findByText("Showing 20 of 826 entries")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Next"));
    expect(await screen.findByText("Aqua Morty")).toBeInTheDocument();
    expect(
      await screen.findByText("Showing 40 of 826 entries")
    ).toBeInTheDocument();
  });
});
