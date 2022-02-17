import { createSlice ,PayloadAction } from '@reduxjs/toolkit';

const initialState = {value:0};
 // 초기 상태 정의
const scrollData = createSlice({
 name: 'scroll',
 initialState,
 reducers: {
   setScrollVal: (state,action) => {
    state.scroll = action.payload;
    return state;
   }
 }
});

 export const { setScrollVal } = scrollData.actions; // 액션 생성함수
 export default scrollData.reducer; // 리듀서
