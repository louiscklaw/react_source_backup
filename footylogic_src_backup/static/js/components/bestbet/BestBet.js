import React from "react";
// import hilo from '../../assets/images/hilo.png'
import BestBetGraph from "../bestbetgraph/BestBetGraph";
import award from "../../assets/images/award.png";
import { engLangId } from "../../sharedfiles/constants";

export function BestBet(props) {
  return (
    <>
      <div className="bestBet">
        <div className="winPredictor-iconGroup">
          <div className="winPredictor-icon">
            <img src={award} alt="award" />
          </div>
          <div
            className={props.languageId === engLangId ? "win" : "best-chinese"}
          >
            {props.best}
          </div>
          {props.languageId === engLangId ? (
            <div className="predictor">{props.bet}</div>
          ) : (
            ""
          )}
        </div>
        <div
          className="bestBet-graph"
          style={{ width: "250px", height: "250px" }}
        >
          {Object.keys(props.data).length > 0 ? (
            <BestBetGraph data={props.data} />
          ) : (
            ""
          )}
        </div>
        <div className="bestBet-content">
          <div className="rtb"> {props.data.rtbText} </div>
        </div>
      </div>
    </>
  );
}
