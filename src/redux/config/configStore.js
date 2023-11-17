import { createStore } from "redux";
import { combineReducers } from "redux";
import member from "redux/modules/member";

const rootReducer = combineReducers({
  member,
});
const store = createStore(rootReducer);

export default store;
