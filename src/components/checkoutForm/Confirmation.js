import Typography from '@mui/material/Typography';
import { Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'

const Confirmation = ({ message }) => {
    console.log(message)
    return (
        <>
            <Typography variant="h6">
                { message }
           </Typography>
           <Divider/>
           <Typography variant="subtitle2" gutterBottom>
                { message === "Succesful payment" ? "Your booking reference : Rgh8787878lkj" : ""}
           </Typography>
           <Button component = {Link} to ='/' variant='outlined' type="button" >
               Back to Home Page
           </Button>

        </>
    )
}

export default Confirmation
