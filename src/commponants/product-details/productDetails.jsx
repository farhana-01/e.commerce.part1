import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

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
      </Box>) : <Grid container spacing={3} className='container mt-5 pt-5'>
    <Grid item md={6} className='text-center'>
    
      <img width={"300px"} src={ProductDetail?.image} alt="" />
      </Grid>
    <Grid item md={6} className='mt-5 pt-5'>
      <Typography variant='body1'>{ProductDetail?.category}</Typography>
      <Typography variant='h5'>{ProductDetail?.title}</Typography>
      <Typography variant='body6'>{ProductDetail?.description}</Typography>
    </Grid>
    </Grid>}
    
    </>
  );
};

export default ProductDetails;
