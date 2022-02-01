import { makeStyles, Button } from '@material-ui/core';
//import { Button } from '@mui/material/Button';
//import Button from '@material-ui/core/Button'
//import makeStyles from '@material-ui/core/makeStyles'
//import { Button, makeStyles } from '@material-ui/core'

import { accordionActionsClasses } from '@mui/material'
import React from 'react'
import accounting from 'accounting'

import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'

export default function Total() {

    const classes = useStyles();
    const history = useHistory()
    const [{basket}, dispatch] = useStateValue()
    
    const checkOut = () => {
        history.push(("/Checkout2"))
    }

    return (
        <div className = { classes.root } >
            <h5>Total items: { basket?.length }</h5>
            <h5>{ accounting.formatMoney(getBasketTotal(basket), "$") }</h5>
            <Button  onClick = { checkOut } className = { classes.button } variant="contained" color ="secondary" >
                Check out
            </Button>
        </div>
    )
}

const useStyles = makeStyles ((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "20vh"
    },
    button: {
        marginTop: "2rem"
    }
}))

