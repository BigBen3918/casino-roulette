import React, { useEffect, useState } from "react";
import { Grid, Modal, Fade, Backdrop } from "@mui/material";


import hoverImg from "../style/img/spin.png";
import originImg from "../style/img/spin_hover.png";
import clickImg from "../style/img/spin_click.png";
import resultImg1 from "../style/img/resultpan.png";
import resultImg2 from "../style/img/resultpan_lose.png";

import { useSelector, useDispatch } from "react-redux";
import Action from "../../services/action";

function Spin(props) {

  const {
    totalBet,
    spinState,
    spinImg,
    setSpinState,
    setSpinImg,
    setCurrentLength,
    setTotalBet,
    setImgs,
    betState,
    setBetState,
  } = props;

  const token = useSelector(state => state.sessionData.token);
  const myBalance = useSelector(state => state.sessionData.myBalance);
  const totalBetAmount = useSelector(state => state.sessionData.totalBet);

  const dispatch = useDispatch();

  const [reachMoney, setReachMoney] = useState(null);

  useEffect(() => {
    setSpinImg(originImg);
  }, []);

  const setHoverIMG = () => {
    setSpinImg(hoverImg);
  };

  const setClickIMG = () => {
    setSpinImg(clickImg);
  };

  const setOriginIMG = () => {
    setSpinImg(originImg);
  };

  const startSpin = async () => {
    if (betState) {
      const sendingData = {
        token: token,
        betValue: totalBet,
      };
      setSpinState(true);
      Action.send(sendingData)
        .then((res) => {
          if (res.data.status == "ok") {
            setCurrentLength(res.data.rotateNum);
            setReachMoney(res.data.moneyResult);

            setTimeout(() => {
              setSpinState(false);
            }, 9500);
          } else {
            console.log(res.data.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    if (spinState !== null && spinState === false) {
      handleOpen();
      setTotalBet({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
        24: 0,
        25: 0,
        26: 0,
        27: 0,
        28: 0,
        29: 0,
        30: 0,
        31: 0,
        32: 0,
        33: 0,
        34: 0,
        35: 0,
        36: 0,
        column1: 0,
        column2: 0,
        column3: 0,
        dozen1: 0,
        dozen2: 0,
        dozen3: 0,
        half1: 0,
        half2: 0,
        even: 0,
        odd: 0,
        red: 0,
        black: 0,
      });
      setImgs({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
        18: [],
        19: [],
        20: [],
        21: [],
        22: [],
        23: [],
        24: [],
        25: [],
        26: [],
        27: [],
        28: [],
        29: [],
        30: [],
        31: [],
        32: [],
        33: [],
        34: [],
        35: [],
        36: [],
        column1: [],
        column2: [],
        column3: [],
        dozen1: [],
        dozen2: [],
        dozen3: [],
        half1: [],
        half2: [],
        even: [],
        odd: [],
        red: [],
        black: [],
      });
      setBetState(false);

      dispatch({
        type: "SET_MYBALANCE",
        payload: (myBalance - totalBetAmount + reachMoney)
      })

      dispatch({
        type: "SET_TOTALBET",
        totalBet: 0
      })
    }
  }, [spinState]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item sm={2} xs={2}></Grid>
      <Grid item lg={12} md={12} sm={8} xs={8}>
        <div className="noselect">
          {spinState === true ? (
            <img
              src={clickImg}
              style={{ width: "100%", height: "100%" }}
              alt="NoImg"
            />
          ) : (
            <img
              src={spinImg}
              className="spin"
              alt="NoImg"
              onClick={startSpin}
              onMouseEnter={setHoverIMG}
              onMouseDown={setClickIMG}
              onMouseUp={setOriginIMG}
              onMouseLeave={setOriginIMG}
            />
          )}
        </div>
      </Grid>
      <Grid item sm={2} xs={2}></Grid>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open} className="resultpan">
          <div style={{ display: "relative" }}>
            {reachMoney > 0 ? (
              <span>
                <label className="resulttitle">
                  <b style={{ fontSize: "6vh" }}>You Win!!!</b>
                  <br />
                  <br />
                  &nbsp; {reachMoney}$
                </label>
                <img
                  src={resultImg1}
                  style={{ width: "100%", height: "100%" }}
                  alt="NoImg"
                />
              </span>
            ) : (
              <span>
                <label className="resulttitle">
                  <b style={{ fontSize: "6vh" }}>You lost!</b>
                </label>
                <img
                  src={resultImg2}
                  style={{ width: "100%", height: "100%" }}
                  alt="NoImg"
                />
              </span>
            )}
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}

export default Spin;
