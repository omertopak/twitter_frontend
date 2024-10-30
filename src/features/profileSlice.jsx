import {createSlice} from "@reduxjs/toolkit"


const profileSlice = createSlice({
    name:"profile",
    
    initialState:{
        loading:false,
        mytweets:[],
        count:null,
        error:false,
        pageuserInfo:[],
        ProfileofAnyUser:[]
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        getProfileDataSuccess:(state,{payload})=>{
            // console.log("payloadcount",payload.data?.count);
            // console.log("payload",payload.data.data);
            state.mytweets=payload?.data?.data;
            state.count = payload?.data?.count
            state.loading = false;
        },
        getProfileUserDataSuccess:(state,{payload})=>{
            state.pageuserInfo=payload?.data;
            state.loading = false;
        },

        getProfileofAnyUser:(state,{payload})=>{
            state.ProfileofAnyUser=payload?.data?.data;
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