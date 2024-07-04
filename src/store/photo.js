import { PHOTO_GET } from "../Api";
import createAsyncSlice from "../utils/createAsyncSlice";

const slice = createAsyncSlice({
  name: "photo",
  fetchConfig: PHOTO_GET,
});

const fetchPhoto = slice.asyncAction;

export { fetchPhoto };

export default slice.reducer;
