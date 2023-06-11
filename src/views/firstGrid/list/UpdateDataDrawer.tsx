import React, { useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Drawer, Typography } from "@mui/material";
import { toggleUpdateUi } from "../../../Redux/dataGrid";
import { AppDispatch } from "../../../Redux/store";
interface FormData {
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
}
const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required(),
    username: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required()
      .required(),
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required(),
    website: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required()
      .required(),
    phone: yup.number().transform((value) => Number.isNaN(value) ? null : value ).nullable().required("phone is required"),
  })
  .required();
  const defaultValues = {
    name:"",
    username:"",
    email: "",
    phone:null,
    website: ""
  };
  const UpdateDataDrawer = (props: any) => {
      const { open } = props;
      const dispatch = useDispatch<AppDispatch>();
      const store:any = useSelector((state:any)=>state.dataGridData.data.singleData);
      console.log('update data ', store);
      
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(()=>{
    const fieldArray = ["name", "username", "email", "website", "phone"]
      if(store){
        fieldArray.forEach((field:any)=> setValue(field, store[field]))
      }
  },[store])
  const onSubmit: any = (data: FormData) => {
    console.log(data);
    reset();
    dispatch(toggleUpdateUi({UpdateDataDrawer:{open: false}}))
  };
  return (
    <React.Fragment>
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <Drawer
        PaperProps={{
          elevation: 8,
          sx: {
            width: "40%",
            // height: 500,
            // color: "rgba(225,249,27,1)",
            // backgroundColor: "rgba(30, 139, 195, 0.8)"
          },
        }}
        anchor="right"
        open={open}
        onClose={() => dispatch(toggleUpdateUi({updateDataDrawer:{open:false}}))}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{ mt: 5, textAlign: "center" }}
        >
          Update Contact
        </Typography>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            flexGrow: 1,
            mt: 5,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                ml: 5,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Promoting</FormLabel>
                    <Controller
                      name={"name"}
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          variant="filled"
                          fullWidth
                          onChange={onChange}
                          value={value}
                          label={"Name"}
                          error={Boolean(errors.name)}
                          helperText={errors.name?.message}
                        />
                      )}
                    />
                  </FormControl>
                  {/* {errors.firstName && <p>{errors.firstName?.message}</p>} */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <Controller
                      name={"username"}
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          variant="standard"
                          fullWidth
                          onChange={onChange}
                          value={value}
                          label={"User Name"}
                          error={Boolean(errors.username)}
                          helperText={errors.username?.message}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <Controller
                      name={"email"}
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          fullWidth
                          onChange={onChange}
                          value={value}
                          label={"Email"}
                          error={Boolean(errors.email)}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <Controller
                      name={"website"}
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          fullWidth
                          onChange={onChange}
                          value={value}
                          label={"website"}
                          error={Boolean(errors.website)}
                          helperText={errors.website?.message}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <Controller
                      name={"phone"}
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          fullWidth
                          onChange={onChange}
                          value={value}
                          label={"phone"}
                          error={Boolean(errors.phone)}
                          helperText={errors.phone?.message}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ textAlign: "left", ml: 5, mt: 3 }}>
              <Button onClick={() => dispatch(toggleUpdateUi({updateDataDrawer:{open:false}}))} variant="outlined">
                Cancel
              </Button>
              <Button type="submit" variant="contained" sx={{ ml: 35 }}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default UpdateDataDrawer;
