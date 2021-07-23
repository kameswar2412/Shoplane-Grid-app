import React from 'react';


const Card = (props) => {
    const {brand,preview,id}=props
    return (
<div className=" m-4 card" style={{width:" 250px"}}  id={id.toString()} key={id} >
  <div>
  <img src={preview} className="card-img-top" alt={id} />
  </div>
  <div className="card-body">
    <h5 className="card-title">{brand}</h5>
    {/* <h5 className="card-title">{description}</h5> */}
    <a href=" # " className="btn btn-primary">ADD TO CART</a>
  </div>
</div>
    );
}
 
export default Card;
