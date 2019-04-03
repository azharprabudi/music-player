import { SearchArtist } from "action_types/artist";

export const searchArtist = search => ({
  type: SearchArtist,
  payload: { search }
});
