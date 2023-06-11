import React, { useState, useEffect, useCallback, useRef  } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { dataGrid } from "../../dataTypes/types";
import HeaderContact from "../../views/firstGrid/list/HeaderContact";
import AddNewDrawer from "../../views/firstGrid/list/AddNewDrawer";
import UpdateDataDrawer from "../../views/firstGrid/list/UpdateDataDrawer";
import { getAllgridData, getSinglegridData, toggleUpdateUi } from "../../Redux/dataGrid";
import { useSelector, useDispatch } from "react-redux";
import OverAllView from "../../views/firstGrid/view/OverAllView";
import { AppDispatch } from "../../Redux/store";

interface rowCell {
  row: dataGrid;
}

const RowOperations = ({ id }:any) => {
  const dispatch=useDispatch<AppDispatch>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleUpdateDrawer = () => {
    console.log('tooggle id', id);
    dispatch(getSinglegridData(id));
    dispatch(toggleUpdateUi({updateDataDrawer:{open:true}}))
    setAnchorEl(null);
    
  };
  const handleDelete = () => {
    console.log('tooggle id dell', id);
  };

  return (
    <>
      <IconButton
        size="small"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        keepMounted
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            //  maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={()=>toggleUpdateDrawer()}>
          <EditIcon fontSize="small" sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize="small" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

const Columns: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getViewData = ({ id }: any) => {
    console.log("id", { id });
    dispatch(getSinglegridData(id));
    dispatch(toggleUpdateUi({viewDatadialog:{open:true}}))
  };
  return [
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 60,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">
          <RowOperations id={row.row.id} />
         </Typography>
      ),
    },

    {
      field: "view",
      headerName: "View",
      flex: 1,
      maxWidth: 70,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">
          <VisibilityIcon onClick={() => getViewData({ id: row.row.id })} />
        </Typography>
      ),
    },
    {
      field: "id",
      headerName: "Id",
      flex: 1,
      maxWidth: 150,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row?.row?.id}</Typography>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.name}</Typography>
      ),
    },
    {
      field: "username",
      headerName: "userName",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.username}</Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.email}</Typography>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.phone}</Typography>
      ),
    },
    {
      field: "website",
      headerName: "Website",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.website}</Typography>
      ),
    },
    {
      field: "company.name",
      headerName: "Company Name",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.company?.name}</Typography>
      ),
    },
    {
      field: "company.bs",
      headerName: "Company Bs",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.company?.bs}</Typography>
      ),
    },
    {
      field: "company.catchPhrase",
      headerName: "Company catchPhrase",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.company?.catchPhrase}</Typography>
      ),
    },
    {
      field: "address.city",
      headerName: "Address City",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.address?.city}</Typography>
      ),
    },
    {
      field: "address.street",
      headerName: "Address street",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.address?.street}</Typography>
      ),
    },
    {
      field: "address.suite",
      headerName: "Address Suite",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.address?.suite}</Typography>
      ),
    },
    {
      field: "address.zipcode",
      headerName: "Address zipcode",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (row: rowCell) => (
        <Typography variant="subtitle2">{row.row?.address?.zipcode}</Typography>
      ),
    },
    //   {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 110,
    //     editable: true,
    //   },
    //   {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: GridValueGetterParams) =>
    //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //   },
  ];
};

const DataGridDemo = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [openView, setOpenView] = useState<boolean>(false)
  const [role, setRole] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const dataFetchedRef = useRef(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const handleFilter = useCallback((arg:any,val:any) => {
    switch(arg){
      case "search": setSearchTerm(val); 
      break;
      case "role": setRole(val); 
      break;
      case "open": setOpen(val); 
      break;
      case "openView": setOpenView(val); 
      break;
      default: return null;
    }
    
  },[searchTerm, role, open, openView]);
  console.log("search value", searchTerm, role);
  const store:any = useSelector((state:any)=>state.dataGridData);
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getAllgridData({page:paginationModel.page, limit:paginationModel.pageSize}));
    console.log('dataFetchedRef')
    
  }, [ paginationModel]);
  
  return (
    <>
    <HeaderContact handleFilter={handleFilter} searchTerm={searchTerm} />
    <Box sx={{ height: 580, width: "100%" }}>
      <DataGrid
      autoHeight
      rows={store?.data?.data}
      columns={Columns()}
     // initialState={{
      // pagination: {
      //   paginationModel: {
      //     page:page-1,
      //     pageSize: pageSize,
      //   },
     //  },
    // }}
      pagination
      pageSizeOptions={[5, 8, 10, 20]}
      checkboxSelection
      disableRowSelectionOnClick
      paginationModel={paginationModel}
     //  paginationMode="server"
      onPaginationModelChange={setPaginationModel}
     // rowCount={store?.data?.totalCount}
      />
    </Box>
    <AddNewDrawer open={store?.ui?.addDataDrawer?.open} />
    <UpdateDataDrawer open={store?.ui?.updateDataDrawer?.open} />
    <OverAllView open={store?.ui?.viewDatadialog?.open} />
    </>
  );
};

export default DataGridDemo;
