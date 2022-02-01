import { Link } from 'react-router-dom';
import * as React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//hook => function with return array-var-function etc 
import {useForm, FormProvider, useFormContext } from 'react-hook-form'

import AddressInput from './AddressInput'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

export default function AddressForm2({ nextStep }) {

    // Capture data the formProvider
    //const { register, handleSubmit } = useForm()
    const methods = useForm()
    
    //const { handleSubmit, control } = useForm();
    const [{shippingData}, dispatch] = useStateValue()

    //Eschema 5.52min 'shippingData'
    const onSubmit = data => { dispatch({
        type: actionTypes.SET_SHIPPINGDATA,
        shippingData: data, // console.log(data) object
      })
      nextStep() // Pasa al siguente formulari (credito)
    }
    

    return (
        <>
             <Typography variant="h6" gutterBottom>
                Shipping address
             </Typography>
               <FormProvider {...methods} > 
                    <form onSubmit = { methods.handleSubmit( onSubmit ) }>
                    
                        <Grid container spacing = {3} >
                            
                            <Grid item xs = {12} sm = {6}>
                                <TextField 
                                        required
                                        label = "First name"   
                                        {...methods.register("firstName")}
                                />
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <TextField 
                                        required
                                        label = "Last name"   
                                        {...methods.register("lastName")}
                                />
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <TextField 
                                        required
                                        label = "Address"   
                                        {...methods.register("address1")}
                                />
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <TextField 
                                        required
                                        label = "Email"   
                                        {...methods.register("email")}
                                />
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <TextField 
                                        required
                                        label = "City"   
                                        {...methods.register("city")}
                                />
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <TextField 
                                        required
                                        label = "Post Code"   
                                        {...methods.register("postCode")}
                                />
                            </Grid>
                            

                            {/* No toma los datos
                            <AddressInput required name = "firstName" label = "First name" />
                            <AddressInput required name = "lastName" label = "Last name" />
                            <AddressInput required name = "address1" label = "Address" />
                            <AddressInput required name = "email" label = "Email" />
                            <AddressInput required name = "city" label = "City" />
                            <AddressInput required name = "postCode" label = "Post Code" /> */}
                           {/*  <NestedInput /> */}
                        </Grid> 
                        <div style = { {display: "flex", justifyContent: "space-between", marginTop: "1rem"} }>
                            <Button component = { Link } to  = "/" >Back to the Checkout Page </Button>
                            
                            <Button type = "submit" variant = "contained" color ="primary" >Next</Button>
                        </div>
                        
                    </form>
                </FormProvider>
            
        </>
    )
}

function NestedInput() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input {...register("nombre")} label = "Nombre" />;
  }
