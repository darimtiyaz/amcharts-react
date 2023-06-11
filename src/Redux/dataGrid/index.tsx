import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import http from "../../http/http-common"
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
  
export const getAllgridData:any = createAsyncThunk("app/getAllgridData", async () => {
  const response =  await http.get("https://jsonplaceholder.typicode.com/users", {    
})
if (response.status === 200) {
      return response.data
  }
 });
 export const getSinglegridData:any = createAsyncThunk("app/getSinglegridData", async (id) => {
   const response =  await http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
   console.log('restooss', response)
 if (response.status === 200) {
       return response.data
   }
  });

export const toggleUpdateUi = createAsyncThunk("app/toggleUpdateUi", async(data:any) => {
   console.log('data1', data);
   return data
});

const DataGridSlice = createSlice({
    name: "app",
    initialState: {
    data:{ 
     data:[],
     singleData: {}
 },
   ui:{
    viewDatadialog:{
      open: false
    },
    addDataDrawer: {
      open:false
    },
    updateDataDrawer: {
      open:false
    }
   },
 loading: false,
},
reducers: {},
extraReducers: (builder:any) => {
    builder
        .addCase(getAllgridData.pending, (state:any, action:any) => {
          state.loading = true;
       })
       .addCase(getAllgridData.fulfilled, (state:any, action:any) => {
          state.data.data=action.payload
       })
       .addCase(getAllgridData.rejected, (state:any, action:any) => {
          state.loading = false;
       })

       .addCase(getSinglegridData.pending, (state:any, action:any) => {
         state.loading = true;
      })
      .addCase(getSinglegridData.fulfilled, (state:any, action:any) => {
         state.data.singleData=action.payload
      })
      .addCase(getSinglegridData.rejected, (state:any, action:any) => {
         state.loading = false;
      })

      .addCase(toggleUpdateUi.fulfilled, (state:any, action:AnyAction) => {
         state.ui=action.payload
      })
}
});
  
export default DataGridSlice.reducer;