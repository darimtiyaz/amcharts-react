import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Grid, TextField, Button, InputAdornment } from "@mui/material";
import AddNewDrawer from "../../views/firstGrid/list/AddNewDrawer";
import React, {useCallback, useState} from "react";
import HeaderContact from "../../views/firstGrid/list/HeaderContact";
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
    phone: yup.number().integer().nullable().required("phone is required"),
  })
  .required();
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: null,
};
const ContactForm = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [role, setRole] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((event:any) => {
    setSearchTerm(event.target.value);
  },[searchTerm]);

  const handleFilter = useCallback((arg:any,val:any) => {
    switch(arg){
      case "search": setSearchTerm(val); 
      break;
      case "role": setRole(val); 
      break;
      case "open": setOpen(val); 
      break;
      default: return null;
    }
    
  },[searchTerm, role, open]);
  console.log("search value", searchTerm, role);
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
  };

  // console.log(watch("example")); // watch input value by passing the name of it
const closeAddDrawer = () =>{
  setOpen(false)
}
  return (
    <>
      
      <HeaderContact handleFilter={handleFilter} searchTerm={searchTerm} />
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          flexGrow: 1,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
                {/* {errors.firstName && <p>{errors.firstName?.message}</p>} */}
              </Grid>
              <Grid item xs={6}>
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
              </Grid>

              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ textAlign: "left", ml: 4, mt: 3 }}>
            <Button onClick={() => reset()} variant="outlined">
              Reset
            </Button>
            <Button type="submit" variant="contained" sx={{ ml: "50%" }}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <AddNewDrawer open={open} closeAddDrawer={closeAddDrawer} />
    </>
  );
};

export default ContactForm;
