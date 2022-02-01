import { actionTypes } from './../reducer';
import { auth } from '../firebase';

//Material Icons
import { ShoppingCart } from '@material-ui/icons';
//import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//Core
import { makeStyles } from '@material-ui/core' 
//import { Link } from '@material-ui/core'
import { Link } from 'react-router-dom';

// Image
import logo from "../images/eccomerce1.png" 
import logo2 from "../images/eccomerce2.jpg"
import { Badge } from '@mui/material';

import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'

export default function Navbar() {

    const classes = useStyles();
    const history = useHistory()
    const [ { basket, user }, dispatch ] = useStateValue()
    //console.log("le voy a sumar al carroo:", basket, "con lenth:", basket?.length )

    const handleAuth = () => { // In the video names handleAuth
        if(user){
            auth.signOut()
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            })
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
            })
            history.push("/SignIn")
        }
       
    }
    
    return (
    <Box sx={{ flexGrow: 1 }} className = { classes.root } >
        <AppBar position="fixed"  className = { classes.appBar }> {/* static  */} 
        <Toolbar>
            <Link to = "/">
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                {/* <MenuIcon />  
                TODO: menu type hamburguer */}
                <img src = { logo2 } className = { classes.logo } alt = "logo" />  
                </IconButton>
            </Link>
            <div className = { classes.grow } />
            <Typography color = "textPrimary" variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Hello {user ? user.email : 'Guest'} !
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <div className = { classes.button } >   
                <Button onClick = { handleAuth } color="inherit" variant = "filled"  > {/* variant = "outlined " */}
                   <Link to = "SignIn" >  
                    <strong> { user ? "Sign Out" : "Sign In" } </strong> 
                   </Link>
                </Button>
                <Link to= "/ChekoutPage">
                    <IconButton aria-label="show cart items" color ="inherit">
                        <Badge badgeContent = { basket?.length } color ="secondary" >
                            {/* TODO: CARRITO SUP DERECHO */}
                            <ShoppingCart fontSize = "large" color = "primary" />
                        </Badge>
                    </IconButton>
                </Link>

            </div>
        </Toolbar>
        </AppBar>
    </Box>
    );
}

const useStyles = makeStyles( (theme) => ({

    logo: {
        height: '3.2rem', /* x defecto 1.5*/
        objectFit: 'contain', /* asegura que la img no se alarge o se achique */
        borderRadius: "10px", //redondea image
        '&:hover': {
            cursor: 'pointer' /* espera una accion */
        },
        marginRight: "10px",
    },
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
        
    },
    appBar: {
        backgroundColor: "lavender !important",
        //boxShadow: "none",
    },
    grow: {
        flexGrow: 700,

    },
    button: {
        marginLeft: theme.spacing(2)
    },
    image: {
        marginRight: "10px",
        height: "3rem"
    },

  }))
