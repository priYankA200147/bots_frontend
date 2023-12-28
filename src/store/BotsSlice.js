import { createSlice } from "@reduxjs/toolkit";

export const BotsSlice =createSlice({
    name: "botSlice",

    initialState:{

        unitDetails:{
            unit_id:"",
        }
},
reducers:{
   setUnitDetails:(state,action)=>{
    console.log(action.payload);
    state.unitDetails.unit_id = action.payload;
   },
},
});
export const {setUnitDetails} = BotsSlice.actions;