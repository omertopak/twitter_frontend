import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",

    initialState:{
        currentUser:null,
        loading:false,
        error:false,
        token:null,
        userId:null,
        image:null,
        images:null,
        userInfo:[],
        bluetick:false,
        followers:null,
        following:null,
        private:true,
        join_date:null,


    },

    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getAuthSuccess:(state,{payload})=>{
            // console.log("payload",payload);
            state.loading = false;
            state.userInfo=payload;
            state.currentUser = payload?.user.username;
            state.token = payload?.bearer?.accessToken;
            state.userId=payload?.user._id;
            state.images=payload?.user.image;
            state.followers=payload?.user.followers_count;
            state.following=payload?.user.following_count;
            state.private=payload?.user.private;
            state.join_date = payload.user?.createdAt;
            state.bluetick = payload.user?.blue_tick
            // console.log("Token",payload.key);
            // console.log("id",payload.user.id);
            // console.log(payload);
        },
        logoutSuccess:(state)=>{
            state.loading = false;
            state.currentUser = null;
            state.token = null;
        },
        fetchFail:(state)=>{
            state.loading = false;
            state.error = true;
        }
    }
})

export const {
    fetchStart,
    getAuthSuccess,
    fetchFail,
    logoutSuccess,
    
  } = authSlice.actions;
  export default authSlice.reducer;