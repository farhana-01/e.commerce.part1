import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const CartList = (props) => {
    const {open, toggleDrawer } = props ;
    const items = useSelector((state) =>state.products);
    
  
  return (
    <div>
     
      <Drawer open={open} onClose={toggleDrawer(false)}>
      
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
      <Typography variant='h5' className='mt-4 text-center'>Cart Items </Typography>
    </Box>
  

      </Drawer>
    </div>
  );
}


export default CartList