import React, { useEffect, useState } from "react";

import wheelImage from "../style/img/wheel.png";
import rulewheel from "../style/img/rulewheel.png";

import $ from "jquery";

function Wheel({ spinState, currentLength }) {
  const [rotateLength, setRotateLength] = useState(0);
  const [rNum, setRNum] = useState(0);

  function getRandom() {
    var _rNum = rNum + 4;
    // return Math.floor(rNum + (Math.random() * 30 + 10));
    // return Math.floor(Math.random() * 5 + 4);
    setRNum(_rNum);
    return _rNum;
  }

  useEffect(() => {
    setRotateLength(360 * getRandom() - (360 / 37) * currentLength);
  }, [currentLength]);

  useEffect(() => {
    if (spinState === true) {
      $(".wheel").css("transform", "rotate(" + rotateLength + "deg)");
    }
  }, [rotateLength]);

  return (
    <div className="noselect">
      <div style={{ position: "relative" }}>
        <img src={rulewheel} className="rulewheel" alt="NoImg" />
        <img src={wheelImage} className="wheel" alt="NoImg" />
      </div>
    </div>
  );
}

export default Wheel;
