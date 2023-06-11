import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
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
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
const schema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required(),
    lastName: yup
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
    phone: yup.number().nullable().required("phone is required"),
  })
  .required();
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: null,
};
const AddNewDrawer = (props: any) => {
  const { open, closeAddDrawer } = props;
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit: any = (data: FormData) => {
    console.log(data);
    reset();
    dispatch(toggleUpdateUi({AddNewDrawer:{open: false}}))
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
        onClose={() => dispatch(toggleUpdateUi({addDataDrawer:{open:false}}))}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{ mt: 5, textAlign: "center" }}
        >
          Add New Contact
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
                      name={"firstName"}
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
                          label={"First Name"}
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
                        />
                      )}
                    />
                  </FormControl>
                  {/* {errors.firstName && <p>{errors.firstName?.message}</p>} */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <Controller
                      name={"lastName"}
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
                          label={"Last Name"}
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
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
              <Button onClick={() => reset()} variant="outlined">
                Reset
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

export default AddNewDrawer;
