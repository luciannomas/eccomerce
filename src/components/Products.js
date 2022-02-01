import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


//Components
import Product from './Product'


//Data
import _products from "../_products"
import DataTable from './DataTable';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1, padding: "3pc" }}>
      <Grid container spacing={2}>
        {
            _products.map ( product => (
                <Grid item xs = {12} sm = { 6 } lg = { 3} >   {/*  TODO: ATRIBUTO ITEM  */}
                     <Product product = { product } key = { product.id } />
                {/*   <DataTableTable /> */}
                </Grid>
            ))
        }
      </Grid>
    </Box>
  );
}
