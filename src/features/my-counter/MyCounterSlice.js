import {createSlice} from "@reduxjs/toolkit";


const myCounterSlice = createSlice({
  name:"myCounter",
  initialState:{
    count: 10,
  },
  reducers:{
    incrementMyCounter(state){
      state.count++;
    },
    incrementMyCounterBy(state, payload){
      state.count+=payload;
    },
    decrementMyCounter(state){
      state.count--;
    }
  }
});


export default myCounterSlice.reducer;

export const {incrementMyCounter, incrementMyCounterBy, decrementMyCounter} = myCounterSlice.actions;