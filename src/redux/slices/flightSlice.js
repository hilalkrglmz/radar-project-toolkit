import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";


const initialState={
    isLoading:false,
    isError:false,
    flights:[],
    path:[]
}

const flightSlice= createSlice({
    name:"flight",
    initialState,
    reducers:{
        setPath: (state, action) => {
            state.path= action.payload.map((i) => [i.lat, i.lng])
            
        },
        clearPath: (state) =>  {
            state.path= []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFlights.pending,(state) =>{
            state.isLoading = true
        })
        builder.addCase(getFlights.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.flights = action.payload;
        })
        builder.addCase(getFlights.rejected,(state,action) =>{
            console.log("istek başarısız:" , action.error)
            state.isLoading = false;
            state.isError= true;
        })
    }
})

export default flightSlice.reducer;
export const {setPath,clearPath} = flightSlice.actions;