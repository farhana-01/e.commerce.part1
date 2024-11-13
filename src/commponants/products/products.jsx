import { Box, Card, CircularProgress, Divider, Grid, Grid2, IconButton, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "..//..//commponants/products/product.css"
import axios from 'axios'
import { Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";










const Products = () => {
  const [CartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [Products, setProducts] = useState([]);

 const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  // console.log(isLoading, "isLoading");

  const cartHandler = (product) => {
    const isExist = CartList.find((cart) => cart.id === product.id);



    if (!isExist) {
      setCartList((prev) => [...prev, product]);
    } else {
      setOpenAlert(true)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickAway') {
      return;
    }

    setOpenAlert(false);
  };


  useState(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const products = await axios.get('https://fakestoreapi.com/products');



        if (products.status === 200) {
          setIsLoading(false);
          setProducts(products?.data);
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
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Already Added"

      />
      {isLoading ? (<Box className='text-center mt-5'>
        <CircularProgress color='inherit' />
      </Box>) :
        <Grid container className='container mt-5'>
          {Products?.map((product, index) => {

            return (
              <Grid
                item xs={12} md={3} mb={3}
              // sx={{minHeight:'250px', maxHeight:'350px', border:'1px solid red'}} 
              >
                <Card key={index} sx={{ padding: '30px', cursor: 'pointer', width: '250px' }}>
                  <Box >
                    <Box className=" text-center">
                      <img style={{ maxHeight: '140px', minHeight: '180px' }} className="product-img" width={100} src={product.image} alt={'${product.title}'} />
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                      <Tooltip title={product?.title} placement='top'>
                        <Typography variant='51'>{product?.title?.length >= 22 ? `${product?.title.slice(0, 18)}...` : product?.title}</Typography>
                      </Tooltip>
                      <Divider sx={{ borderColor: '#333' }} className='mt-2' />
                      <Box className='d-flex justify-content-between mt-3'>
                        <Tooltip title='product Details'>
                          <VisibilityIcon  onClick={() => {navigate(`product-details/${product?.id}`)
                          }}/>
                        </Tooltip>
                        <Tooltip title='Add to Favorite'>
                          <FavoriteIcon />
                        </Tooltip>
                        <Tooltip title='Add to Cart'>
                          <AddShoppingCartIcon onClick={() => { cartHandler(product) }} />
                        </Tooltip>

                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );

          })}

        </Grid>
      }

    </>
  )
}
export default Products;
