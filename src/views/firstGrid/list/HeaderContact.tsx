import React from 'react'
import { Box, Grid, TextField, Button, InputAdornment, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { toggleUpdateUi } from '../../../Redux/dataGrid';
import {useDispatch} from "react-redux"
import { AppDispatch } from '../../../Redux/store';
const HeaderContact = (props:any) => {
  const {searchTerm ,handleFilter} = props;
  const dispatch= useDispatch<AppDispatch>()
  return (
    <> 
    <Box sx={{ textAlign: "right", mt: 2, mb:5 }}>
      <TextField
      sx={{mr:50, width:200}}
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="admin"
        variant="filled"
        //helperText="Please select your currency"
      >
        {['super-admin', 'admin','client','user'].map((option) => (
          <MenuItem key={option} value={option} onClick={()=>handleFilter('role',option)}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    <TextField
      id="search"
      type="search"
      label="Search"
      variant="filled"
      value={searchTerm}
      onChange={(e)=>handleFilter('search', e.target.value)}
      sx={{ width: 200, mr:2 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
      <Button type="submit" variant="contained" sx={{ mr:5, width:150, p:1.9 }} onClick={()=>//handleFilter('open',true)}
      dispatch(toggleUpdateUi({addDataDrawer:{open:true}}))}>
        Add New
      </Button>
    </Box>
    </>
  )
}

export default HeaderContact