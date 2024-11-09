import {createSlice} from "@reduxjs/toolkit"


const tweetSlice = createSlice({
    name:"tweet",
    
    initialState:{
        loading:false,
        error:false,
        token:null,
        tweets:[],
        following:[],
        myTweets:[],
        oneTweet:{},
        replies:[]
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
        },
        getOneTweetSuccess:(state,{payload})=>{
            console.log("result",payload);
            state.oneTweet=payload?.data?.result;
            state.replies=payload?.data?.result?.replies;
            // console.log("repliessssss",payload?.data?.result?.replies);
            state.loading = false;
        },
        
    }
})

export const {
    fetchStart,
    getDataSuccess,
    getMyDataSuccess,
    getProfileDataSuccess,
    fetchFail,
    getOneTweetSuccess
  } = tweetSlice.actions;
  export default tweetSlice.reducer;