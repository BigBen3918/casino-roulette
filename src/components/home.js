import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import WheelSet from "./layouts/wheelset";
import ChipSet from "./layouts/chipset";
import SpinSet from "./layouts/spinset";
import BetingTable from "./layouts/bettable";
import { useSelector, useDispatch } from "react-redux";

function Home() {

    const dispatch = useDispatch();
    const [spinState, setSpinState] = useState(null);
    const [betState, setBetState] = useState(false);
    const [spinImg, setSpinImg] = useState("");
    const [chipValue, setChipValue] = useState(100);
    const [currentLength, setCurrentLength] = useState(0);

    const initTotalBet = {
        "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0,
        "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0,
        "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 0, "29": 0,
        "30": 0, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "column1": 0, "column2": 0, "column3": 0,
        "dozen1": 0, "dozen2": 0, "dozen3": 0, "half1": 0, "half2": 0, "even": 0, "odd": 0, "red": 0, "black": 0
    }

    const initImgs = {
        "0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], "7": [], "8": [], "9": [], "10": [],
        "11": [], "12": [], "13": [], "14": [], "15": [], "16": [], "17": [], "18": [], "19": [], "20": [],
        "21": [], "22": [], "23": [], "24": [], "25": [], "26": [], "27": [], "28": [], "29": [], "30": [],
        "31": [], "32": [], "33": [], "34": [], "35": [], "36": [], "column1": [], "column2": [], "column3": [],
        "dozen1": [], "dozen2": [], "dozen3": [], "half1": [], "half2": [], "even": [], "odd": [], "red": [], "black": []
    }

    const [totalBet, setTotalBet] = useState(initTotalBet);

    const [imgs, setImgs] = useState(initImgs);

    useEffect(() => {

        window.onmessage = (e) => {

            // poolAddress: poolAddress,
            // name: "iframe_message",
            // token: localStorage.jwtToken,
            if (e.data.name === "iframe_message") {
                console.log(e.data.name);
                dispatch({
                    type: "SET_MYBALANCE",
                    payload: e.data.allowanceAmount
                });
                
                dispatch({
                    type: "SET_TOKEN",
                    payload: e.data.token
                });
                dispatch({
                    type: "SET_POOLADDRESS",
                    payload: e.data.poolAddress
                });

            }
        }

        window.parent.postMessage({ name: "iframe_message" }, "*");
    }, []);

    useEffect(() => {
        var totalBetAmount = 0
        for (var key in totalBet) {
            totalBetAmount += totalBet[key];
        }
        dispatch({
            type : "SET_TOTALBET",
            payload : totalBetAmount
        })
    }, [totalBet])

    const handleReset = ()=>{
    	if(!spinState) {
        	setTotalBet(initTotalBet);
        	setImgs(initImgs);
        	setBetState(false);
    	}
    }

    return (
        <div>
            <Grid container><Grid item sm={12} md={1}></Grid>
                <Grid item sm={12} md={10}>
                    <Grid container justifyContent="center" alignItems="center" spacing={10}>
                        <Grid item sm={12} md={4}>
                            <WheelSet
                                spinState={spinState}
                                currentLength={currentLength}
                            />
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <br /><br /><br />
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item md={9}>
                                    <ChipSet
                                        chipValue={chipValue}
                                        setChipValue={setChipValue}
                                        spinState={spinState}
                                    />
                                </Grid>
                                <Grid item md={3}>
                                    <SpinSet
                                        totalBet={totalBet}
                                        spinState={spinState}
                                        setSpinState={setSpinState}
                                        spinImg={spinImg}
                                        setSpinImg={setSpinImg}
                                        setCurrentLength={setCurrentLength}
                                        setTotalBet={setTotalBet}
                                        setImgs={setImgs}
                                        betState={betState}
                                        setBetState={setBetState}
                                    />
                                    <div className = "reset_button" onClick = {handleReset}>
                                        Reset
                                    </div>
                                </Grid>
                            </Grid>
                            <br /><br />
                            <BetingTable
                                spinState={spinState}
                                chipValue={chipValue}
                                totalBet={totalBet}
                                setTotalBet={setTotalBet}
                                imgs={imgs}
                                setImgs={setImgs}
                                setBetState={setBetState}
                            />
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={2}></Grid>
                </Grid>
            </Grid>
        </div >
    )
};

export default Home;