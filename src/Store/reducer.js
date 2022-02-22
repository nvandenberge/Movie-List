import {
	FETCH_TRENDING,
	FETCH_TOP_RATED,
	FETCH_ACTION_MOVIES,
	FETCH_COMEDY_MOVIES,
	FETCH_DOCUMENTRY_MOVIES,
	FETCH_HORROR_MOVIES,
	FETCH_ROMANCE_MOVIES,
  } from "./const";

export const initialState = [];

export const reducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case FETCH_TRENDING:
			return {
				...state,
				Trending: payload,
			};
		case FETCH_TOP_RATED:
			return {
				...state,
				TopRated: payload,
			};
		case FETCH_ACTION_MOVIES:
			return {
				...state,
				Action: payload,
			};
		case FETCH_COMEDY_MOVIES:
			return {
				...state,
				Comedy: payload,
			};
		case FETCH_HORROR_MOVIES:
			return {
				...state,
				Horror: payload,
			};
		case FETCH_ROMANCE_MOVIES:
			return {
				...state,
				Romance: payload,
			};
		case FETCH_DOCUMENTRY_MOVIES:
			return {
				...state,
				Documentaries: payload,
			};
		default:
			return state;
	}
};





