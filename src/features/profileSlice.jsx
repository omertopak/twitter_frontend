import {createSlice} from "@reduxjs/toolkit"


const profileSlice = createSlice({
    name:"profile",
    
    initialState:{
        loading:false,
        mytweets:[],
        count:null,
        error:false,
        AnyUserTweets:[],
        ProfileofAnyUser:[],
        userBookmarks:[]
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getProfileDataSuccess:(state,{payload})=>{
            state.mytweets=payload?.data?.data;
            state.count = payload?.data?.data?.length || 0;
            state.loading = false;
        },
        getProfileUserDataSuccess:(state,{payload})=>{
            console.log("payload",payload);
            state.AnyUserTweets=payload?.data?.data;
            state.count = payload?.data?.data?.length;
            state.loading = false;
        },

        getProfileofAnyUser:(state,{payload})=>{
            // console.log("pppppppp",payload?.data?.data);
            state.ProfileofAnyUser=payload?.data?.data;
            state.userBookmarks = payload?.data?.data?.bookmarks || 0;
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
    getProfileUserDataSuccess,
    fetchFail,
    getProfileofAnyUser
  } = profileSlice.actions;
  export default profileSlice.reducer;