export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  origin: Origin;
  image: string;
  url: string;
}

interface Origin {
  name: string;
}

export interface CharactersSearchResponse {
  characters: CharacterSuggestionDto[];
}

export interface CharacterSuggestionDto {
  id: number;
  name: string;
}
