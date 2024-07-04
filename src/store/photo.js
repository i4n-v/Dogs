import { PHOTO_GET } from "../Api";

const FETCH_PHOTO_STARTED = "photo/fetchStarted";
const FETCH_PHOTO_SUCCESS = "photo/fetchSuccess";
const FETCH_PHOTO_ERROR = "photo/fetchError";

const fetchPhotoStarted = () => ({
  type: FETCH_PHOTO_STARTED,
});

const fetchPhotoSuccess = (payload) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload,
});

const fetchPhotoError = (payload) => ({
  type: FETCH_PHOTO_ERROR,
  payload,
});

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const photo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return {
        ...initialState,
        loading: true,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_PHOTO_ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchPhotoStarted());

    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === false) throw new Error(data.message);

    dispatch(fetchPhotoSuccess(data));
  } catch (error) {
    dispatch(fetchPhotoError(error.message));
  }
};

export { photo, fetchPhoto };
