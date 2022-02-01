import { useStateValue } from './../../StateProvider';

import react from 'react'
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useStyles from './styles.js'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

// Component [1 = test , 2 = prod]
import AddressForm from './AddressForm2'; 
import PaymentForm from './PaymentForm2';
import Confirmation from './Confirmation'

export default function Checkout2 () {
    
    const classes = useStyles()

    const steps = ["shipping address", "Payment details"]
    const [activeStep, setActiveStep] = react.useState(0)
    const [{paymentMessage}, dispatch]= useStateValue()


    // TODO: suma +1 a la pasarela 
    const nextStep = () => setActiveStep ( preActiveStep => preActiveStep + 1 )

    // TODO: suma +1 a la pasarela 
    const backStep = () => setActiveStep ( preActiveStep => preActiveStep - 1 )


    // component function 
    const Form = () => activeStep === 0 ? <AddressForm  nextStep = { nextStep } /> : <PaymentForm nextStep = { nextStep }  backStep = { backStep } />

    return (
        <>
            <main className = { classes.layout } >
                <div>
                    <Paper className = { classes.paper } > 
                        <Typography component = "h1" variant="h6" align ="center" >
                            Checkout2
                        </Typography>
                       
                        <Stepper activeStep = { activeStep } sx = {{ pt: 3, pb: 5 } }> 
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {   
                            // steps.length == 'cuando termina el array' //  
                            activeStep === steps.length ? (<Confirmation message = { paymentMessage } />) : (<Form />)
                        }
                    </Paper> 
                    
                </div>        
            </main>
        </>
    )
}
