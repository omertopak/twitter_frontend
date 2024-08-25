import {createSlice} from "@reduxjs/toolkit"


const tweetSlice = createSlice({
    name:"tweet",
    
    initialState:{
        loading:false,
        error:false,
        token:null,
        tweets:[],
        following:[],
        myTweets:[]
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getDataSuccess:(state,{payload})=>{
            // console.log(payload.data);
            state.tweets=payload?.data.result;
            state.loading = false;
        },
        getMyDataSuccess:(state,{payload})=>{
            // console.log("payload.data",payload?.data.data.result);
            state.following=payload?.data?.result;
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
    getProfileDataSuccess,
    fetchFail,
  } = tweetSlice.actions;
  export default tweetSlice.reducer;