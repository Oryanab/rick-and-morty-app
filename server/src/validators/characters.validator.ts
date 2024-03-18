import { TypeOf, object, string } from "zod";

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
