import { CURRENT_USER_POST_UPDATE } from "../constants";

const initialState = {
  currentUserPosts: null,
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_POST_UPDATE:
      return {
        ...state,
        currentUserPosts: action.currentUserPosts
      }
    default:
      return state;
  }
}