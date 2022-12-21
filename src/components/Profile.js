import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { StudentGeneral } from './StudentGeneral';
import { AddressInformation } from './AddressInformation';
import { CourseInformation } from './CourseInformation';
import { DocumentInformation } from './DocumentInformation';
import { AcademicInformation } from './AcademicInformation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Profile=()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="General Information" {...a11yProps(0)} />
        <Tab label="Address Information" {...a11yProps(1)} />
        <Tab label="Course Information" {...a11yProps(2)} />
        <Tab label="Academic Information" {...a11yProps(3)} />
        <Tab label="Document Information" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       <StudentGeneral/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AddressInformation/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <CourseInformation/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AcademicInformation/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DocumentInformation/>
      </TabPanel>
    </Box>
  );
}