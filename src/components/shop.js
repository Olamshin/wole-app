import React from "react";
import PrismicDOM from "prismic-dom"

function Shop(props) {
  if (props.shop_items) {
    var shop_items = props.shop_items.map(function (item, index) {
      return (
        <div key={item.id} className="row" style={{ margin: "10px" }}>
          <img src={item.data.image.url}
            className="img-responsive"
            alt={item.data.image.alt}
            style={{
              height: "200px",
              border: "1px solid red",
              display: "inline-block"
            }} />
          <div style={{
            display: "inline-block",
            position: "relative",
            bottom: "-20px",
            marginLeft: "10px"
          }}
          dangerouslySetInnerHTML={{ __html:PrismicDOM.RichText.asText(item.data.paypal_html, null)}}
          >
          </div>
        </div>
      )
    })
    return <div>{shop_items}</div>
  }
  return <p>Loading the Store....</p>;
}

export default Shop;