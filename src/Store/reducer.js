import { ACTIONS } from "./const";

export const initialState = {};

export const reducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case ACTIONS.FETCH_ACTION_MOVIES:
			return {
				...state,
				Action: payload,
			};
		// case ACTIONS.FETCH_NETFLIX_ORIGINALS:
		// 	return {
		// 		...state,
		// 		NetflixOriginals: payload,
		// 	};
		// case ACTIONS.FETCH_TOP_RATED:
		// 	return {
		// 		...state,
		// 		TopRated: payload,
		// 	};
		// case ACTIONS.FETCH_ACTION_MOVIES:
		// 	return {
		// 		...state,
		// 		Action: payload,
		// 	};
		// case ACTIONS.FETCH_COMEDY_MOVIES:
		// 	return {
		// 		...state,
		// 		Comedy: payload,
		// 	};
		// case ACTIONS.FETCH_HORROR_MOVIES:
		// 	return {
		// 		...state,
		// 		Horror: payload,
		// 	};
		// case ACTIONS.FETCH_ROMANCE_MOVIES:
		// 	return {
		// 		...state,
		// 		Romance: payload,
		// 	};
		// case ACTIONS.FETCH_DOCUMENTARIES:
		// 	return {
		// 		...state,
		// 		Documentaries: payload,
		// 	};
		default:
			return state;
	}
};





