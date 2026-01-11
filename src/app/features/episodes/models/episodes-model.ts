import { Episode } from "./episode-model";

export interface Episodes {
  episodes: Episode[];
  totalEpisodes: number;
  totalPages: number;
  actualPage: number;
  nextPageUrl: string;
  previousPageUrl: string;
}
