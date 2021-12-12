import React, { useEffect } from "react";
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";

import chip1 from "../style/img/100.png"
import chip2 from "../style/img/500.png"
import chip3 from "../style/img/1k.png"
import chip4 from "../style/img/10k.png"
import chip5 from "../style/img/50k.png"
import chip6 from "../style/img/100k.png"
import chip7 from "../style/img/500k.png"
import chip8 from "../style/img/1m.png"

const chipDatas = [
    {
        img: chip1,
        value: 100
    }, {
        img: chip2,
        value: 500
    }, {
        img: chip3,
        value: 1000
    }, {
        img: chip4,
        value: 10000
    }, {
        img: chip5,
        value: 50000
    }, {
        img: chip6,
        value: 100000
    }, {
        img: chip7,
        value: 500000
    }, {
        img: chip8,
        value: 1000000
    },
]

function Chip({
    chipValue,
    setChipValue
}) {
    const CurrentChipValue = (value) => {
        setChipValue(value);
    }

    const balance = useSelector(state => state.sessionData.myBalance);
    const totalBetAmount = useSelector(state => state.sessionData.totalBet);

    useEffect(() => {
        if (balance - totalBetAmount < chipValue)
            CurrentChipValue(0);
    }, [totalBetAmount, balance]);

    return (
        <Grid container sm={12} spacing={5} justifyContent="center" alignItems="center" className="noselect">
            {
                chipDatas.map((chipData) => {
                    return (
                        <Grid item xs={3} sm={3} md={3} onClick={() => {
                            if (balance - totalBetAmount >= chipData.value)
                                CurrentChipValue(chipData.value);
                        }}>
                            {
                                <img src={chipData.img} className={balance - totalBetAmount < chipData.value ? "disableImg btnChip" : chipValue === chipData.value ? "active-btnChip" : "btnChip"} alt="NoImg" />
                            }
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default Chip;