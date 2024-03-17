import { Request, Response } from "express";
import {
  ListRequestValidator,
  GetSingleRequestValidator,
} from "../validators/characters.validator";
import logger from "../utils/logger.utils";
import { fetchQuery } from "../services/characters.service";

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

// Characters
export const listCharactersHandler = async (
  req: Request<ListRequestValidator["params"]>,
  res: Response
) => {
  const { page } = req.params;
  try {
    const characters = await fetchQuery(queries.characters(parseInt(page)));
    res.status(200).send(characters);
  } catch (error: any) {
    logger.error(error.message);
    res.status(404).send(error.message);
  }
};

export const getCharacterHandler = async (
  req: Request<GetSingleRequestValidator["params"]>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const character = fetchQuery(queries.singleCharacter(parseInt(id)));
    res.status(200).send(character);
  } catch (error: any) {
    logger.error(error.message);
    res.status(404).send(error.message);
  }
};

// create Character
export const createCharacterHandler = async (
  req: Request<{}, {}, any>,
  res: Response
) => {};

// edit Character
export const editCharacterHandler = async (
  req: Request<{}, {}, any>,
  res: Response
) => {};

// delete Character
export const deleteCharacterHandler = async (
  req: Request<{}, {}, any>,
  res: Response
) => {};
