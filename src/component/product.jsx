import React from "react";

function Product({menu}) {

  return (
    <div>
        <div className="row">
        {menu.map(menu =>

      <div  className="card" style={{"width": "18rem", "marginLeft":"20px","marginBottom":"20px"}}>
        <img src={menu.recipe.image} className="card-img-top" alt="food"  />
        <div className="card-body">
          <h5 className="card-title">  {menu.recipe.label} </h5>
          <p className="card-text">
            Total number of calories : {Math.round( menu.recipe.calories)}
          </p>
          <button className="btn btn-primary">
            Buy
          </button>
        </div>
      </div>
        )}
    </div>
    </div>
  );
}

export default Product;
