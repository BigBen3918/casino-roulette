import React from "react";
import { Grid } from "@mui/material";

import cover100 from "../style/img/100.png";
import cover500 from "../style/img/500.png";
import cover1000 from "../style/img/1k.png";
import cover10000 from "../style/img/10k.png";
import cover50000 from "../style/img/50k.png";
import cover100000 from "../style/img/100k.png";
import cover500000 from "../style/img/500k.png";
import cover1000000 from "../style/img/1m.png";

import $ from "jquery";

const row1Info = {
    3: "red ftdo",
    6: "black ftdo",
    9: "red ftdo",
    12: "red ftdo",
    15: "black ftdo",
    18: "red ftdo",
    21: "red ftdo",
    24: "black ftdo",
    27: "red ftdo",
    30: "red ftdo",
    33: "black ftdo",
    36: "red ftdo"
}
const row2Info = {
    2: "black",
    5: "red",
    8: "black",
    11: "black",
    14: "red",
    17: "black",
    20: "black",
    23: "red",
    26: "black",
    29: "black",
    32: "red",
    35: "black",
}
const row3Info = {
    1: "red",
    4: "black",
    7: "red",
    10: "black",
    13: "black",
    16: "red",
    19: "red",
    22: "black",
    25: "red",
    28: "black",
    31: "black",
    34: "red",
}
const rowArray1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
const rowArray2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35,]
const rowArray3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]

function BetTable({
    chipValue,
    totalBet,
    setTotalBet,
    imgs,
    setImgs,
    spinState,
    setBetState
}) {
    const ChipsCSS = {
        100: "chip-100-cursor",
        500: "chip-500-cursor",
        1000: "chip-1k-cursor",
        10000: "chip-10k-cursor",
        50000: "chip-50k-cursor",
        100000: "chip-100k-cursor",
        500000: "chip-500k-cursor",
        1000000: "chip-1m-cursor"
    };

    const ChipsImgs = {
        100: cover100,
        500: cover500,
        1000: cover1000,
        10000: cover10000,
        50000: cover50000,
        100000: cover100000,
        500000: cover500000,
        1000000: cover1000000
    }

    const OtherBetSet = {
        Dozens1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        Dozens2: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        Dozens3: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        Columns1: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
        Columns2: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
        Columns3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        Red: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
        Black: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
        Even: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
        Odd: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
        half1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        half2: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    }

    let newTotalBet = { ...totalBet };

    //Bet Content
    const BetIncreasing = (value) => {
        setBetState(true);
        if (chipValue !== 0 && (spinState === false || spinState === null))
            switch (value.toString()) {
                case "0":
                    var x = Math.ceil(Math.random() * 3 - 1.5);
                    var y = Math.ceil(Math.random() * 3 - 1);
                    var tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet(newTotalBet);
                    break;
                case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
                case "10": case "11": case "12": case "13": case "14": case "15": case "16": case "17": case "18": case "19":
                case "20": case "21": case "22": case "23": case "24": case "25": case "26": case "27": case "28": case "29":
                case "30": case "31": case "32": case "33": case "34": case "35": case "36":
                    x = Math.ceil(Math.random() * 3 + 1);
                    y = Math.ceil(Math.random() * 3 - 2);
                    tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet({ ...newTotalBet });
                    break;
                case "column1":
                case "column2":
                case "column3":
                    x = Math.ceil(Math.random() * 3);
                    y = Math.ceil(Math.random() * 3 - 2);
                    tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet({ ...newTotalBet });
                    break;
                case "dozen1":
                case "dozen2":
                case "dozen3":
                    x = Math.ceil(Math.random() * 10 + 20);
                    y = Math.ceil(Math.random() * 1 - 2);
                    tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet({ ...newTotalBet });
                    break;
                case "half1":
                case "half2":
                    x = Math.ceil(Math.random() * 10 + 5);
                    y = Math.ceil(Math.random() * 1 - 2);
                    tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet({ ...newTotalBet });
                    break;
                case "even":
                case "odd":
                    x = Math.ceil(Math.random() * 10 + 5);
                    y = Math.ceil(Math.random() * 1 - 2);
                    tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet({ ...newTotalBet });
                    break;
                case "red":
                case "black":
                    x = Math.ceil(Math.random() * 5 + 3);
                    y = Math.ceil(Math.random() * 1 - 3.5);
                    tempImg = imgs;
                    tempImg[value].push({ x, y, chipValue });
                    setImgs(tempImg);
                    newTotalBet[value] = totalBet[value] + chipValue;
                    setTotalBet({ ...newTotalBet });
                    break;
                default:
                    break;
            }
    };

    //Img Setting
    const ImgSetting = (index) => {
        return <div style={{ position: "relative", width: "5vh" }}>
            {
                totalBet[index] > 0 ?
                    imgs[index].map(v => <img src={ChipsImgs[v.chipValue]} alt="NoImg" style={{ width: "4vh", height: "4vh", position: "absolute", left: v.x + "vh", top: v.y + "vh" }} />)
                    : ""
            }
        </div>
    }

    // HoverEvent
    const OtherHoverEvent = (value) => {
        switch (value) {
            case "Columns3":
                for (var i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Columns3[i]).addClass("coverColor");
                }
                break;
            case "Columns2":
                for (i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Columns2[i]).addClass("coverColor");
                }
                break;
            case "Columns1":
                for (i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Columns1[i]).addClass("coverColor");
                }
                break;
            case "Dozens1":
                for (i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Dozens1[i]).addClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens2[i]).removeClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens3[i]).removeClass("coverColor");
                }
                break;
            case "Dozens2":
                for (i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Dozens1[i]).removeClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens2[i]).addClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens3[i]).removeClass("coverColor");
                }
                break;
            case "Dozens3":
                for (i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Dozens1[i]).removeClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens2[i]).removeClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens3[i]).addClass("coverColor");
                }
                break;
            case "half1":
                for (i = 0; i < 6; i++) {
                    $("#cell" + OtherBetSet.Columns1[i]).addClass("coverColor");
                    $("#cell" + OtherBetSet.Columns2[i]).addClass("coverColor");
                    $("#cell" + OtherBetSet.Columns3[i]).addClass("coverColor");
                }
                break;
            case "half2":
                for (i = 6; i < 12; i++) {
                    $("#cell" + OtherBetSet.Columns1[i]).addClass("coverColor");
                    $("#cell" + OtherBetSet.Columns2[i]).addClass("coverColor");
                    $("#cell" + OtherBetSet.Columns3[i]).addClass("coverColor");
                }
                break;
            case "Even":
                for (i = 0; i < 18; i++) {
                    $("#cell" + OtherBetSet.Even[i]).addClass("coverColor");
                }
                break;
            case "Odd":
                for (i = 0; i < 18; i++) {
                    $("#cell" + OtherBetSet.Odd[i]).addClass("coverColor");
                }
                break;
            case "Red":
                for (i = 0; i < 18; i++) {
                    $("#cell" + OtherBetSet.Red[i]).addClass("coverColor");
                }
                break;
            case "Black":
                for (i = 0; i < 18; i++) {
                    $("#cell" + OtherBetSet.Black[i]).addClass("coverColor");
                }
                break;
            default:
                for (i = 0; i < 12; i++) {
                    $("#cell" + OtherBetSet.Dozens1[i]).removeClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens2[i]).removeClass("coverColor");
                    $("#cell" + OtherBetSet.Dozens3[i]).removeClass("coverColor");
                }
        }
    }

    // contents
    const cell1 = (id) => {
        return (
            <td id={"cell" + id} className={row1Info[id]} onClick={() => BetIncreasing(id)}>
                {ImgSetting(id)}
                {id}
            </td>
        )
    }

    const cell2 = (id) => {
        return (
            <td id={"cell" + id} className={row2Info[id]} onClick={() => BetIncreasing(id)}>
                {ImgSetting(id)}
                {id}
            </td>
        )
    }

    const cell3 = (id) => {
        return (
            <td id={"cell" + id} className={row3Info[id]} onClick={() => BetIncreasing(id)}>
                {ImgSetting(id)}
                {id}
            </td>
        )
    }

    return (
        <Grid item style={{ position: "relative" }}>
            <table border="0" cellSpacing="0" cellPadding="0" className={ChipsCSS[chipValue] + " noselect"}>
                <tbody>
                    <tr>
                        <td rowSpan="3" id="zero" onClick={() => BetIncreasing("0")}>
                            {ImgSetting("0")}
                            0
                        </td>
                        {
                            rowArray1.map((v) => {
                                return (cell1(v))
                            })
                        }
                        <td className="le_1" onMouseEnter={() => OtherHoverEvent("Columns3")} onMouseOut={() => OtherHoverEvent("")} style={{ width: "5vh", height: "5vh", borderRadius: "0 30px 0 0" }} onClick={() => BetIncreasing("column3")}>
                            {ImgSetting("column3")}
                            2 TO 1
                        </td>
                    </tr>
                    <tr>
                        {
                            rowArray2.map((v) => {
                                return (cell2(v))
                            })
                        }
                        <td className="le" onMouseEnter={() => OtherHoverEvent("Columns2")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("column2")}>
                            {ImgSetting("column2")}
                            2 TO 1
                        </td>
                    </tr>
                    <tr>
                        {
                            rowArray3.map((v) => {
                                return (cell3(v))
                            })
                        }
                        <td className="le" onMouseEnter={() => OtherHoverEvent("Columns1")} onMouseOut={() => OtherHoverEvent("")} style={{ borderRadius: "0 0 30px 0" }} onClick={() => BetIncreasing("column1")}>
                            {ImgSetting("column1")}
                            2 TO 1
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2">&nbsp;</td>
                        <td className="lor" colSpan="4" onMouseEnter={() => OtherHoverEvent("Dozens1")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("dozen1")}>
                            {ImgSetting("dozen1")}
                            1ST 12
                        </td>
                        <td className="lor" colSpan="4" onMouseEnter={() => OtherHoverEvent("Dozens2")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("dozen2")}>
                            {ImgSetting("dozen2")}
                            2ND 12
                        </td>
                        <td className="lor flor" colSpan="4" onMouseEnter={() => OtherHoverEvent("Dozens3")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("dozen3")}>
                            {ImgSetting("dozen3")}
                            3RD 12
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td className="lor" colSpan="2" style={{ borderRadius: "0 0 0 30px" }} onMouseEnter={() => OtherHoverEvent("half1")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("half1")}>
                            {ImgSetting("half1")}
                            1 - 18
                        </td>
                        <td className="lor" colSpan="2" onMouseEnter={() => OtherHoverEvent("Even")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("even")}>
                            {ImgSetting("even")}
                            EVEN
                        </td>
                        <td colSpan="2" className="a_red" onMouseEnter={() => OtherHoverEvent("Red")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("red")}>
                            {ImgSetting("red")}
                        </td>
                        <td colSpan="2" className="a_black" onMouseEnter={() => OtherHoverEvent("Black")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("black")}>
                            {ImgSetting("black")}
                        </td>
                        <td className="lor" colSpan="2" onMouseEnter={() => OtherHoverEvent("Odd")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("odd")}>
                            {ImgSetting("odd")}
                            ODD
                        </td>
                        <td className="lor flor" colSpan="2" style={{ borderRadius: "0 0 30px 0" }} onMouseEnter={() => OtherHoverEvent("half2")} onMouseOut={() => OtherHoverEvent("")} onClick={() => BetIncreasing("half2")}>
                            {ImgSetting("half2")}
                            19 - 36
                        </td>
                    </tr>
                </tbody>
            </table>
        </Grid>
    );
}

export default BetTable;