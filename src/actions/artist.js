import { SearchArtist } from "action_types/artist";

export const searchArtists = (action$, store$) =>
  action$.ofType(SearchArtist).map(console.log);
