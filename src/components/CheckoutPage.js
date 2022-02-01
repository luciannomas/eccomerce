import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Components
import Product from './Product'
import Total from './Total'

//Data
import _products from "../_products"

import { useStateValue , StateProvider} from '../StateProvider'
import { Typography } from '@mui/material';
import CheckoutCard from './CheckoutCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CheckoutPage() {

    function FormRow(){

        const [{basket}, dispatch] = useStateValue()
        console.log("dentro del carrito", basket)
        
        
        return (
            <React.Fragment>
                {   
                    // TODO: BASKET [ARRAY] ? => LO PROTEJE ,SINO RETORNA NULL
                    basket.map( (item) => (
                        <Grid item xs = { 12 } sm = {8} md = { 6 } lg = { 4 } >
                            <CheckoutCard key = { item.id } product = { item } />
                            {/* <Product key = { e.id } product = { e } /> */}
                        </Grid>
                    ))
                }
            </React.Fragment>
        )
    }

  return (
    <Box sx={{ flexGrow: 1, padding: "3pc" }}>
      <Grid container spacing={ 3 }>  
        <Grid item xs = { 12 } >
            <Typography align = "center " gutterBottom variant ="h4" >
                Shopping Cart
            </Typography>
        </Grid>

        {/*
            _products.map ( product => (
                <Grid item xs = {12} sm = { 6 } lg = { 3} >  
                     <Product product = { product } key = { product.id } />
                </Grid>
            ))
        */} 
        <Grid item xs = {12} sm = {8} md = {9} container spacing = {2} >
            <FormRow />
        </Grid> 
            
        
        <Grid item xs = { 12 } sm = { 4 } md = { 3 } > {/* TODO: 12 col sm 4 col md 3 */}
            <Typography align = "center " gutterBottom variant ="h4" >
                <Total />
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
