import React from "react";
import { Grid } from '@mui/material';
import logo from "./style/img/Atari-Logo.wine.svg";
import { useSelector } from "react-redux";

function Header(props) {
    const balance = useSelector(state => state.sessionData.myBalance)
    const totalBetAmount = useSelector(state => state.sessionData.totalBet);

    return (
        <Grid container justifyContent="center" alignItems="center" className="headerLogo">
            <Grid item sm={3} md={4}><img src={logo} alt="NoImg" className="logoImg" /></Grid>
            <Grid item sm={9} md={8}>My balance: {balance - totalBetAmount}</Grid>
        </Grid>
    );
}

export default Header;