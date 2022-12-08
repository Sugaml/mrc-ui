import * as React from 'react';
import Typography from '@mui/material/Typography';
import Proviences from '../json/Proviences'
import Avatar from '@mui/material/Avatar';
import Districts from '../json/Districts'
import Municipalities from '../json/Municipalities'

export const StudentGeneral = () => {
  // const [proviences, setProvience] = React.useState(Proviences)
  const [districts, setDistrict] = React.useState(Districts)
  const [municipalities,setMunicipalities]=React.useState(Municipalities)
  return (
    <div>
     
      <Typography>Student General Inforamtion</Typography>
      <Avatar sizes='150' alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      <Typography>{districts.data.length}</Typography>
      <Typography>{municipalities.data.length}</Typography>
      {/* {proviences.proviences.map((item) => (
        <Typography>{item.Provinces}</Typography>
      ))} */}

       {/* {districts.districts.map((item) => (
        <Typography>{item.Name}</Typography>
      ))} */}

    {/* {districts.data.filter(district => district.Province==='Bagmati').map(filteredData=> (
    <Typography>
      {filteredData.Name}
    </Typography>
  ))} */}
  {municipalities.data.filter(municipalitie => municipalitie.District==='Ramechhap').map(filteredData=> (
    <Typography>
      {filteredData.Name}
    </Typography>
  ))}
  
    </div>
  );
}