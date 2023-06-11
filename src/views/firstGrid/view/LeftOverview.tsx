import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LeftViewUpdateDrawer from './leftViewUpdate';
const LeftOverview = ({data}:any) => {
  const [edit, setEdit] = React.useState(false)
    console.log(' props data: ', data);
  return (
      <TableContainer component={Paper}>
      <Typography  variant="h5"
          component="h5"
          sx={{ mt: 2, ml:10  }}>
                User detail
              </Typography>
        <TableBody sx={{ml:2}}>
          <Divider />
        </TableBody>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><Typography  variant="h6">Details</Typography></TableCell>
            <TableCell align="right"><Button type="submit" variant="contained"
            onClick={()=> setEdit(true) }>Edit</Button></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow  >
            <TableCell align="left"> Id:</TableCell>
             <TableCell align="left">{data.id}</TableCell>
            </TableRow>
            <TableRow  >
            <TableCell align="left">Name:</TableCell>
             <TableCell align="left">{data.name}</TableCell>
            </TableRow>
            <TableRow  >
            <TableCell align="left"> userName:</TableCell>
              <TableCell align="left">userName:{data.username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Email:</TableCell>
              <TableCell align="left">{data.email}</TableCell>
            </TableRow>
            <TableRow  >
            <TableCell align="left">Phone:</TableCell>
              <TableCell align="left">{data.phone}</TableCell>
            </TableRow>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">Website</TableCell>
              <TableCell align="left">{data.website}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
      <LeftViewUpdateDrawer open={edit} setEdit={setEdit} data={data} />
    </TableContainer>
  );
}

export default LeftOverview