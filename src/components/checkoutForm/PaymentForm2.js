import { actionTypes } from './../../reducer';
import React from 'react'
import Review from './Rewies2'
import { Divider, Button, CircularProgress } from '@material-ui/core';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Typography from '@mui/material/Typography';
import Checkout from './Checkout';

import { useStateValue } from '../../StateProvider'
import * as Ctrl from '../../reducer'
import accounting from 'accounting'

// backend
import axios from 'axios'

// Conect to Stripe
const stripePromise = loadStripe ("pk_test_51Jhr8oAzm7NW3jWwoPXyEX4R71GX8cYvDUkKuZL0uqTPtbMCOvNjAM4sQ7WWuoeWn2u5xSOXW3PyW3jQJ9nTOuof00XvRUCjMn") // clave public [HACER VAR ENTORNO]

const CARD_ELEMENT_OPTIONS = {
    iconsStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            iconColor: "rgb(240, 57, 122)",
            color: "#333",
            fontSize: "18px",
            "::placeholder":{
                color: "#ccc",
            },
            invalid: {
                color: "#e5424d",
                ":focus":{
                    color:"#3033238",
                },
            },
        },
    },
}


const PaymentForm2 = ({basckStep, nextStep}) => {

    const CheckoutForm = ({ basckStep , nextStep }) => {
    
    //hook
    const [{basket}, dispath] = useStateValue()
    const [loading, setLoading] = React.useState(false)

    const stripe = useStripe()
    const elements = useElements() // objeto con los elementos
    
    //Capture data-form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement) // devuelve data del componente 'cardElemnets'
        })
        
        console.log ("paymentMethod:", paymentMethod)
        //Cambio a Verdadero
        setLoading(true)

        //Validation
        if ( ! error ){
            const { id } = paymentMethod;
            try {
                //Sprite rquiere que se envie en centavos el precio. ( $ * 100)
                const { data } = await axios.post("http://localhost:3001/api/checkout",{ 
                    id,
                    amount: Ctrl.getBasketTotal(basket) * 100
                    })
                console.log(data)

                dispath({
                    type: actionTypes.SET_PAYMENT_MESSAGE,
                    paymentMessage: data.message
                })

                //Vacio el carrito
                if(data.message === "Succesful payment"){
                    dispath({
                        type: actionTypes.EMPTY_BASKET,
                        basket: []
                    })
                }

                //Limpia num de tarjeta
                elements.getElement(CardElement).clear()
                nextStep()
            }
            catch (error) {
                console.log(error)
                //Para que nos pueda mostrar el error .
                nextStep()
            } 
            //Depues de todo el procceso de confirmacion
            setLoading(false)

            
        }

    }
        return (
            <>
                <form onSubmit = { handleSubmit }>
                    <CardElement options = { CARD_ELEMENT_OPTIONS } />
                    <div style = {{
                        display: "flex",
                        justifyContent:"space-between",
                        marginTop: "1rem"
                    }} >   
                        <Button variant = "outlined" onclick = { basckStep } > Back </Button>
                        <Button 
                         //disabled = {! stripe }/*  disabled = { true }  hacer dinamico*/ 
                         type = "submit" 
                         variant = "contained" 
                         color = "primary"  
                         > 
                          { loading ? (<CircularProgress />) : accounting.formatMoney(Ctrl.getBasketTotal(basket), "€") } 
                         </Button>
                    </div>
                </form>

            </>
        )

    }

return (
    <>
        <Review/>
        <Divider/>
        {/* gutterBottom le da padding hacia abajo */}
        <Typography variant ="h6" gutterBottom style = {{ margin: "20px 0"}}>  
            Payment method
        </Typography>   
        <div>
            <Elements stripe = { stripePromise }> 
                <CheckoutForm basckStep = { basckStep } nextStep = { nextStep } />
            </Elements>
             
        </div> 
    </>
)
}

export default PaymentForm2
