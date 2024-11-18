import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '..//product-details//ProductDetail.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

const ProductDetails = () => {
   
  const [ProductDetail, setProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();



  useState(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const products = await axios.get(`https://fakestoreapi.com/products/${param?.products_id}`);



        if (products.status === 200) {
          setIsLoading(false);
          setProductDetail(products?.data);
        } else {
          setIsLoading(true);
        }
      } catch (err) {
        console.log(err);
      }

    }

    fetchProducts();
  }, []);
  return (
    <>
   {isLoading ? (<Box className='text-center mt-5'>
        <CircularProgress color='inherit' />
      </Box>) : <Grid container spacing={3} className='container mt-5 pt-5 product-detail-container '>
    <Grid item md={6}  xs={12} className="product-info text-center">
    
      <img className='product-image' width={"300px"} src={ProductDetail?.image} alt="" />
      </Grid>
    <Grid item md={6} className='mt-5 pt-5 '>
    <Typography variant="body2" color="textSecondary" className="category">
          {ProductDetail?.category}
        </Typography>
    <Typography variant="h4" className="product-title">
          {ProductDetail?.title}
        </Typography>
        <Typography variant="body1" className="product-description">
          {ProductDetail?.description}
          <Box className='d-flex gap-5 mt-5'>
            <Button variant='outlined'>
              <FavoriteBorderIcon />
            </Button>
            <Button variant='outlined'>
              <AddShoppingCartIcon />
            </Button>
            <Button variant='outlined'>
              <ShareIcon />
            </Button>
          </Box>
        </Typography>
    </Grid>
    </Grid>}

    
    
    
    </>
  );
};

export default ProductDetails;
