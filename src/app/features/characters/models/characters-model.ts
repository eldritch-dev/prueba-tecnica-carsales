import { Character } from "./character-model";


export interface Characters {
  characters: Character[];
  totalCharacters: number;
  totalPages: number;
  actualPage: number;
  nextPageUrl: string;
  previousPageUrl: string;
}
