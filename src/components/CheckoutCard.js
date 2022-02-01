import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import { makeStyles }  from '@material-ui/core'

//Icons
import DeleteIcon from '@material-ui/icons/Delete';
//import DeleteIcon from '@mui/icons-material/Delete';

import accounting from 'accounting'
import { useStateValue } from '../StateProvider'
import { actionTypes } from './../reducer'
// Image
import image1 from "../images/shoes.jpeg" 

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function CheckoutCard({ product: { id, name, productType, description, image, rating, price }}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //TODO: min 34 useStyles
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue()

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <Card sx={{ maxWidth: 345 }} className = { classes.root }>
      <CardHeader
        action={
          <Typography
            className = { classes.action }
            //style={{ marg// min 34 useStylesinTop: "1rem" }}
            color = 'h5'
          >
              { accounting.formatMoney(price, "€") }
          </Typography>
        }
        title = { name }
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image = { image } 
        title = { name } 
      />
    
    <CardActions disableSpacing className = { classes.cardActions } >
    <div className = { classes.cardRating } >
            {
                Array(rating)
                .fill()
                .map((_, i) => (
                    <p> &#11088; </p>
                ))
            }
    </div>

    <IconButton>
        <DeleteIcon onClick = { removeItem } fontSize = "large" />
    </IconButton>

    </CardActions>
    </Card>
  );
}

const useStyles = makeStyles( (theme) => ({
    root: {
        maxWidth: 345,
    },
    action:{
        marginTop: "1rem"
    },
    media:{
        height: 0,
        paddigTop: "56.25%" //16:9
    },
    cardRating: {
        display: "flex"
    },
    cardActions:{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center"
    }
  }))