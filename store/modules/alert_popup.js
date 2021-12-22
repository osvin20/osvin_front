import { createSlice ,PayloadAction } from '@reduxjs/toolkit';

const initialState = {value:false,msg:"경고창입니다"};

 // 초기 상태 정의
const alertSlice = createSlice({
 name: 'alert_value',
 initialState,
 reducers: {
   reAlert: (state,action) => {
      state.value = true;
      state.msg = action.payload;
      return state;
   },
   closeVal: (state,action) => {
      state.value = false;
      return state;
   }
 }
});

export const { reAlert,closeVal } = alertSlice.actions; // 액션 생성함수
export default alertSlice.reducer; // 리듀서
