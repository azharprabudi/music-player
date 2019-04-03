import { mapTo, map, throttleTime } from "rxjs/operators";
import { SearchArtist } from "action_types/artist";

export const searchArtistsEpic = (action$, store$) =>
  action$.ofType(SearchArtist).pipe(
    throttleTime(500),
    map(a => console.log(a, action$, store$.getState())),
    mapTo({
      type: "test"
    })
  );
