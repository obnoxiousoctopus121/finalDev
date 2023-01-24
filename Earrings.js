import * as React from 'react';
import  Card  from '@mui/material/Card';
import  CardContent  from '@mui/material/CardContent';
import  CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import './App.css';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import { useState } from 'react';




var cardStyle = {
    display: 'block',
    width: '20vw',
    height: '70vh',
    
}






    





 function Earrings({earring}){

    const[click, setClick] = useState([])
    const[count, setCount] = useState(0)
    const priceList = []
   

   

    const changeButton = () => {
        let items = [...click]
        var calc = earring.price * (items.length +1)
        priceList.push(calc)
        
        setClick(items)
        setCount(count +1)
        console.log(items)

        
        console.log("clicking")
        console.log(priceList)

        }

    const removeItem = () => {
        setCount(count - 1)
        

        }
    
    return(
        <Box sx={{ m: '2rem' }}>
            <Card style={cardStyle} variant="outlined" > 
                <CardMedia sx={{ height: 400 }} image= {earring.image}/>
                <CardHeader>
                    <img src={earring.logo} alt = {earring.name} />
                    
                    
                </CardHeader>


                <CardContent>
                    <Typography sx={{ p: 4, fontSize: 40}}> {earring.name} </Typography>
                    <Typography> Price: ${earring.price} </Typography>
                    <Typography sx={{ p: 4, fontSize: 20}}> Metal: {earring.type} </Typography>
                    <Typography> Rating: {earring.rating} Stars </Typography>
                </CardContent>
                <button id= "cartButton"   value = "add to cart" onClick= {() => changeButton(click )} >Add to Cart </button>
                <button id= "cartButton"   value = "add to cart"  onClick= {() => removeItem(click )} >Remove From Cart </button>
                <p> Quantity: {count} </p>

               
            
            
            </Card>
            
        </Box>
            
        

    );

}


export default Earrings;