import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react'
import Typography from '@mui/material/Typography';
import { useStateValue } from '../../StateProvider'
import * as Ctrl from '../../reducer'

import accounting from 'accounting'

              

const Rewies2 = () => {
    
     const [{ basket } , dispatch ] = useStateValue()   
    
    return (
        <>
            <Typography variant = "h6" gutterBottom>
                Order Summary
            </Typography>
            <List disablePadding>
                {
                    basket?.map( product => (
                        <ListItem key = { product.name }  >
                            <ListItemText primary = { product.name } secondary = { `Qty : ${1}`} />
                                <Typography variant = "body2">
                                    { accounting.formatMoney(5, "€") }                  
                                </Typography>
                            
                        </ListItem>
                    ) )
                }
                <ListItem>
                    <ListItemText primary ="Total" />
                        <Typography variant = "subtitle1">
                            { accounting.formatMoney(Ctrl.getBasketTotal(basket), "€") }                  
                        </Typography>
                </ListItem>
                
            </List>
        </>
    )
}

export default Rewies2
