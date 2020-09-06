import React from "react";
import shop_shirt from "../images/shop_shirt.jpg"
import teespring from "../images/teespring.png"

function Shop(props) {
  return (<div className="row" style={{ margin: "10px", flexDirection: "column", alignContent: "center" }}>
    <img src={shop_shirt}
      className="img-fluid"
      alt="shirt"
      style={{
        display: "inline-block"
      }} />
    <div style={{
      display: "inline-block",
      position: "relative",
      margin: "auto",
      width: "50%",
    }}
    >
      <a className="badge mt-2 bg-light" href="https://teespring.com/new-back-on-my-shit?pid=934&cid=103881" target="_blank" rel="noopener noreferrer">
        <img src={teespring} alt="teespring" className="img-fluid" />
      </a>
    </div>
  </div>);
}

export default Shop;