import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'

const app = express();
//Clave privada
const stripe = new Stripe("sk_test_51Jhr8oAzm7NW3jWwkc2qEJsvV6vwm9nAXn5ux5vrp3ii3XW5TySGmRVtJ2rGLfpSQwiJeo68QP7R6vktc2DX8E9Y00FV6vmCrJ")


//Middleware
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json())

app.post("/api/checkout", async (req, res) => {
    const { id, amount } =  req.body
    
    try {
        //Creo objeto con los datos recibidos.
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Basket of products",
            payment_method: id,
            confirm: true
        })
        console.log(payment)
        return res.status(200).json({message: "Succesful payment"})
        
        
    } catch (error) {
        //console.log(error)
        return res.json({message: error.raw.message})    
    }


})

app.listen(3001, () => console.log("server listening port", 3001));