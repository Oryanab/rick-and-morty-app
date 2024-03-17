import { TypeOf, object, string } from "zod";

interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  created: string;
}

interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

interface Character {
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

export const listRequestValidator = object({
  params: object({
    page: string({
      required_error: "Page number is required",
    })
      .regex(/^\d+$/)
      .refine((value) => parseInt(value) > 0, {
        message: "Page number must be greater than 0",
      }),
  }),
});

export const getSingleRequestValidator = object({
  params: object({
    id: string({
      required_error: "Character id is required",
    }),
  }),
});

export type ListRequestValidator = TypeOf<typeof listRequestValidator>;
export type GetSingleRequestValidator = TypeOf<
  typeof getSingleRequestValidator
>;
