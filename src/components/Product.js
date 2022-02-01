import { StateProvider } from './../StateProvider'
import { actionTypes } from './../reducer'
import { useStateValue } from '../StateProvider'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import ShareIcon from  '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles }  from '@material-ui/core'
import accounting from 'accounting'

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



export default function Product({ product: { id, name, productType, description, image, rating, price }}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //TODO: min 34 useStyles
  const classes = useStyles();

  // Activate basket
  const [{basket}, dispatch] = useStateValue()
  

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET, /* ADD_TO_BASKET */
      item: { /* Array de datos */
        name,
        productType,
        price,
        rating,
        description,
        id,
        image 
      }
    })
  } 

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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { productType }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart" onClick = { addToBasket }>
          {/* <FavoriteIcon /> */}
          <AddShoppingCart fontSize = 'large' />
        </IconButton>
        {/* <IconButton aria-label="share"> */}
          {/* <ShareIcon /> */}
           {
               Array(rating)
                .fill()
                .map((_, i) => (
                    <p> &#11088; </p>
                ))
           }
        {/* </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description }</Typography>
        </CardContent>
      </Collapse>
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
    }
  }))