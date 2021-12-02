import  React from 'react';
import { Grid ,Button } from '@mui/material';
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utill/const';
function Navbar() {
    const user=false;

    return (
            <AppBar style={{background: "linear-gradient(-45deg, #39249a, #e14e42)"}} position="static">
            <Toolbar variant="dense">
                <h3>Bobur Abdukarimov</h3>
                <Grid container justify={"flex-start"}>
                    {user ?  (  <Button variant={"outlined"}>Quit</Button>
                    ) : (
                        <NavLink to ={LOGIN_ROUTE}>
                                <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    
                    )}
                </Grid>
            </Toolbar>
            </AppBar>
        
    );
}

export default Navbar;