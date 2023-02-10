import Box from '@mui/material/Box';
import FrameNavbar from './frame-navbar';

import Navbar from './navbar';

const Frame = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FrameNavbar />
      <Box sx={{ flexGrow: 1 }}></Box>
    </Box>
  );
};

export default Frame;
