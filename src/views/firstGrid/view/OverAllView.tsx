import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Grid, Dialog} from "@mui/material"
import LeftOverview from "./LeftOverview";
import {useSelector, useDispatch} from "react-redux"
import { toggleUpdateUi } from '../../../Redux/dataGrid';
import { AppDispatch } from '../../../Redux/store';
import {ThunkDispatch} from "@reduxjs/toolkit";
const OverAllView = (props:any) => {
    const dispatch = useDispatch<AppDispatch>();
    const {open} = props;
    const [value, setValue] = React.useState('1');
    const store = useSelector((state:any)=>state.dataGridData.data.singleData)
    console.log("store single", store)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClose=()=>{
    dispatch(toggleUpdateUi({viewDatadialog:{open:false}}));
  }
  return (
    <Dialog onClose={()=>handleClose()} open={open}
    PaperProps={{ style: {
        minHeight: '90%',
        maxHeight: '90%',
        minWidth: '90%',
        maxWidth: '90%',
      }}}
        >
    <Grid container spacing={2}>
    <Grid item xs={4}>
    <LeftOverview data={store} />
    </Grid>
    <Grid item xs={8}>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </Grid>
   </Grid>
   </Dialog>
  )
}

export default OverAllView