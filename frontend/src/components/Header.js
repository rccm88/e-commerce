import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-around" alignItems="center" xs={12}>
            <Typography variant='h3' style={{color: "white", fontFamily: "sans-serif", margin: "28px", textShadow: "0px 5px 15px black"}}>
                JERSEY STORE
            </Typography>
            <Link to="/" style={{textDecoration: "none"}}>
                <Button color="primary" style={{color: "black", fontSize: "16px", padding: "18px 22px"}}>Home</Button>
            </Link>
            <Link to="/contato" style={{textDecoration: "none"}}>
                <Button color="primary" style={{color: "black", fontSize: "16px", padding: "18px 22px"}}>Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
