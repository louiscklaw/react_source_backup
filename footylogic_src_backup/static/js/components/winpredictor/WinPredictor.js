import React from "react";

import winPreGraph from "../../assets/images/winPredictor-graph.png";
import award from "../../assets/images/award.png";
import WinPredictorGraph from "../winpredictorgraph/WinPredictorGraph";
import { engLangId } from "../../sharedfiles/constants";

export function WinPredictor(props) {
  var winpreData = Object.assign({}, props.data);
  return (
    <div className="winPredictor">
      <div className="winPredictor-iconGroup">
        <div className="winPredictor-icon">
          <img src={award} alt="award" />
        </div>
        <div className={props.languageId === engLangId ? "win" : "win-chinese"}>
          {props.win}
        </div>
        {props.languageId === engLangId ? (
          <div className="predictor">{props.predictor}</div>
        ) : (
          ""
        )}
      </div>
      <div className="winPredictor-content">
        {/*<img src={winPreGraph} alt="logo"/>*/}
        {Object.keys(winpreData).length > 0 ? (
          <WinPredictorGraph data={winpreData} draw={props.draw} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
