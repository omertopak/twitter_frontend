import {createSlice} from "@reduxjs/toolkit"


const dataSlice = createSlice({
    name:"blog",
    
    initialState:{
        loading:false,
        error:false,
        token:null,
        blogs:[],
        categories:[],
        myblogs:[],
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
  } = dataSlice.actions;
  export default dataSlice.reducer;