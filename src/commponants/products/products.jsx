import { Box, Card, Divider, Grid, Grid2, IconButton, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import product1 from '..//../assets/menu-item-1.png'
import product2 from '..//../assets/menu-item-2.png'
import product3 from '..//../assets/menu-item-3.png'
import ShareIcon from '@mui/icons-material/Share'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "..//..//commponants/products/product.css"
import axios from'axios'
import { Tooltip } from '@mui/material';









 const Products = () => {
  const [Cartlist , setCartList] = useState([]);
  const [openAlert, setOpenAler] = useState(false)
  const [Products , setProducts] = useState([]);

  console.log(Products , 'Products');
  
   const cartHandler = (product) =>{  
    const isExist = Cartlist.find((cart)=> cart.id === product.id);

   

    if(!isExist){
      setCartList((prev) => [...prev,product]);
    } else{
     setOpenAler(true)
    }
   };
    
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAler(false);
  };


useState(()=> {
  const fetchProducts = async () => {
    try{
      const products = await axios.get('https://fakestoreapi.com/products');
      
      setProducts(products?.data);
    } catch (err) {
      console.log(err);
    }
    
  }
 
  fetchProducts();
}, []);

  
  return (
   
    <>
     <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Already Added"
     
      />
      <Grid container className='container mt-5'>
    {Products?.map((product, index )=> {
        
        return ( 
        <Grid 
        item xs={12} md={3} mb={3} 
        // sx={{minHeight:'250px', maxHeight:'350px', border:'1px solid red'}} 
        >
         <Card key={index} sx={{padding:'30px', cursor:'pointer', width:'250px'}}>
      <Box >
          <Box className=" text-center">
          <img style={{maxHeight:'140px', minHeight:'180px'}} className="product-img" width={100}  src={product.image} alt={'${product.title}'} />
          </Box>
          <Box  sx={{marginTop:'20px'}}> 
          <Tooltip title={product?.title} placement='top'>
          <Typography variant='51'>{product?.title?.length >=22 ? `${product?.title.slice(0,18)}...`:product?.title}</Typography>
          </Tooltip>
          <Divider sx={{borderColor:'#333'}} className='mt-2' />
          <Box className='d-flex justify-content-between mt-3'>
          <ShareIcon />
          <FavoriteIcon />
          <AddShoppingCartIcon onClick={()=>{cartHandler(product)}} />
          </Box>
          </Box>
      </Box>
    </Card>
    </Grid>
        );
        
      })

    }
     </Grid>
     
    </>
  )
}
export default Products;
