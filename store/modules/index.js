import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import tab_number from './tab_number';
import alert_value from './alert_popup';
import scroll from './scroll';
const reducer = (state, action) => {
if (action.type === HYDRATE) {
  return {
     ...state,
     ...action.payload
   };
}
return combineReducers(
  {tab_number,
   alert_value,
   scroll,
    // 여기에 추가
})(state, action); }

export default reducer;
