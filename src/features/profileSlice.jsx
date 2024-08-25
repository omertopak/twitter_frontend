import {createSlice} from "@reduxjs/toolkit"


const profileSlice = createSlice({
    name:"profile",
    
    initialState:{
        loading:false,
        mytweets:[],
        count:null,
        error:false,

    },
    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getProfileDataSuccess:(state,{payload})=>{
            console.log("payload",payload.data);
            state.mytweets=payload?.data?.data;
            state.count = payload?.data?.count
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
    getProfileDataSuccess,
    fetchFail,
  } = profileSlice.actions;
  export default profileSlice.reducer;