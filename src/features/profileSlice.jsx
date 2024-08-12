import {createSlice} from "@reduxjs/toolkit"


const profileSlice = createSlice({
    name:"tweet",
    
    initialState:{
        loading:false,
        error:false,
       
        
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getDataSuccess:(state,{payload})=>{
            // console.log(payload.data);
            state[payload?.url]=payload?.data.result;
            state.loading = false;
        },
        getMyDataSuccess:(state,{payload})=>{
            // console.log("payload.data",payload?.data.data.result);
            state[payload?.url] = payload?.data.data.result;
            state.loading = false;
        },
        
        fetchFail:(state)=>{
            state.loading = false;
            state.error = true;
        }
    }
})

export const {
    fetchStart,
    getDataSuccess,
    getMyDataSuccess,
    fetchFail,
  } = profileSlice.actions;
  export default profileSlice.reducer;