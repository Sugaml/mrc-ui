import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../action/studentaddress";
import { Divider } from "@mui/material";

export const AddressInformation = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  const student = useSelector((state) => state.StudentGeneral.currentStudent);
  const address = useSelector((state) => state.CurrentAddress.address);
  console.log("token :: ",token)
    React.useEffect(()=>{
      dispatch(getAddress(token,student.ID))
    },[dispatch,token,student])
  console.log("address :: ",address)
  return (
   student && address && !!address.ID && <div>
      <Typography variant="h6" gutterBottom sx={{ pt: 2 }}>Student Address Inforamtion</Typography>
      <Divider/>
      <Typography variant="h6" gutterBottom sx={{ pt: 2, mb: 3 }}>Permanent Address Inforamtion</Typography>
      <Typography>Provience  :: {address.provience} </Typography>
      <Typography>District  :: {address.district} </Typography>
      <Typography>Rural/Municipality  :: {address.municipality} </Typography>
      <Typography>Street :: {address.street} </Typography>
      <Typography>Ward Number :: {address.ward_number} </Typography>
      <Divider/>
      <Typography variant="h6" gutterBottom sx={{ pt: 2, mb: 3 }} >Temporary Address Inforamtion</Typography>
      <Typography>Provience  :: {address.tprovience} </Typography>
      <Typography>District  :: {address.tdistrict} </Typography>
      <Typography>Rural/Municipality  :: {address.tmunicipality} </Typography>
      <Typography>Street :: {address.tstreet} </Typography>
      <Typography>Ward Number :: {address.tward_number} </Typography>
    </div>
  );
}