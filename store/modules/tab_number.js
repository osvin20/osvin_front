import { createSlice ,PayloadAction } from '@reduxjs/toolkit';

const initialState = { value:null};
 // 초기 상태 정의
const tabSlice = createSlice({
 name: 'tab_number',
 initialState,
 reducers: {
   setTabNumber: (state,action) => {

    state.value = action.payload;
    return state;
   }
 }
});

 export const { setTabNumber } = tabSlice.actions; // 액션 생성함수
 export default tabSlice.reducer; // 리듀서
