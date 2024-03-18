import logger from "../utils/logger.utils";
import axios from "axios";

export const fetchQuery = async (query: string) => {
  try {
    const { data } = await axios.post(
      "https://rickandmortyapi.com/graphql",
      { query },
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  } catch (error) {
    logger.error(error);
  }
};
