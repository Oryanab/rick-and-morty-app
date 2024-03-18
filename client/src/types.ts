export interface Location {
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
