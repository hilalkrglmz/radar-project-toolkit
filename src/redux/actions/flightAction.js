import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constants";
import axios from "axios";

export const getFlights = createAsyncThunk("flight/getFlights",

async () => {

    /* API İSTEĞİ AT */
    const res = await axios.request(options);
    
    /* gelen veriyi formatla */
    const refined= res.data.aircraft.map((i) => ({
        id:i[0],
        code:i[1],
        lat:i[2],
        lng:i[3]
    }))

    /* veriyi slice a aktar */
    return refined;
})