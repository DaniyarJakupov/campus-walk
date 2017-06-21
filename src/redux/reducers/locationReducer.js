import { CHANGE_LOCATION } from "../actions/types";

const INITIAL_STATE = {
  name: "S-Bahn Station",
  image: "sbahnstation.jpg",
  id: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.payload;
    default:
      return state;
  }
};
