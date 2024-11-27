import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const {items} = useSelector((state) => state.products);
  console.log(items, 'items');
  


  return (
    <div>

      <Drawer open={open} onClose={toggleDrawer(false)}>

        <Box sx={{ width: 450 }} role="presentation" onClick={toggleDrawer(false)}>

          <Typography variant='h5' className='mt-4 text-center'>Cart Items </Typography>
          {items?.map((item) => {
            console.log(item,'item');
            
            return (
              <Box className='d-flex justify-content-between align-items-center'>
                <div>
                <img width='40px' src={item?.image} alt='' />
                <span>{item?.title?.length >= 15 ? `${item?.title.slice(0,15)}...`: item?.title}</span>
                
                </div>
                <ButtonGroup size='small' variant="text" aria-label="Basic button group">
  <Button><RemoveIcon/></Button>
  <Button>1</Button>
  <Button>
    <AddIcon />
    </Button>
</ButtonGroup>
                <span>{item?.price}</span>
              </Box >
            );
          })}
        </Box>
      </Drawer>
    </div>
  );
}


export default CartList