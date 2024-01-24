import React, { Component } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { formatDate } from "../../../sharedfiles/helper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setPopOverIdx } from "./popoverSlice";
class PopoverComponent extends Component {
  handlePopOverClick(status, isHome, keyValue) {
    this.props.dispatch(setPopOverIdx(status, isHome, keyValue));
  }
  render() {
    const { label, keyValue, match, isHome } = this.props;
    return (
      <Popover
        isOpen={
          keyValue == this.props.activeIdx.home ||
          keyValue == this.props.activeIdx.away
            ? true
            : false
        }
        positions={["bottom", "right", "left", "top"]}
        padding={2}
        reposition={false}
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={"grey"}
            arrowSize={5}
            arrowStyle={{ opacity: 0.7 }}
            className="popover-arrow-container"
            arrowClassName="popover-arrow"
          >
            <div
              style={{
                border: "solid 1px #ccc",
                borderRadius: "4px",
                padding: "5px",
                width: "100%",
                textAlign: "center",
                background: "#fff",
                fontSize: "13px",
                margin: "0 10px",
              }}
            >
              <div className="selectedData" style={{ width: "100%" }}>
                <div className="fixture" style={{ fontWeight: "bold" }}>
                  {match.homeTeamName}&nbsp;
                  <span
                    className="score"
                    style={{
                      background: "#001a69",
                      color: "#fff",
                      textAlign: "center",
                      padding: "3px 10px",
                      borderRadius: "4px",
                      letterSpacing: "2px",
                    }}
                  >
                    {match.score}
                  </span>{" "}
                  &nbsp;{match.awayTeamName}{" "}
                  {formatDate(match.kickOff, "banner").date}{" "}
                  {match.competitionName}
                </div>
                {/* <div style={{ fontSize: "13px" }}>{formatDate(match.kickOff, 'banner').date} {match.competitionName}</div> */}
              </div>
            </div>
          </ArrowContainer>
        )}
      >
        <span
          className={
            "status " +
            (label.toLowerCase() === "w"
              ? "win"
              : label.toLowerCase() === "l"
                ? "loss"
                : label.toLowerCase() === "d"
                  ? "draw"
                  : "")
          }
          onMouseEnter={() => this.handlePopOverClick(true, isHome, keyValue)}
          onClick={() => this.handlePopOverClick(true, isHome, keyValue)}
          //onMouseLeave={() => this.handlePopOverClick(false,isHome)}
          key={"popover" + keyValue}
        >
          {this.props.staticKeyWords[label.toLowerCase()]}
        </span>
      </Popover>
    );
  }
}
function mapStateToProps(state) {
  return {
    activeIdx: state.popover.activeIdx,
    staticKeyWords: state.app.staticKeyWords,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PopoverComponent);
