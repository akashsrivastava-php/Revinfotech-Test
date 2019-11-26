import React, { useState, useEffect } from "react";
import StarRatings from 'react-star-ratings';
import { connect } from "react-redux";
import swal from 'sweetalert';
import { update, addToCart } from "../actions/actionCreator";
import { bindActionCreators } from "redux";

const Table = (props) => {

  const [ product, setProduct ] = useState(props.product)

  useEffect(() => {
      setProduct(props.product)
  }, [props.product])

  const handelRating = (newRating, id) => {
      const objIndex = product.findIndex((obj => obj.id == id));
      product[objIndex].rating = newRating
      props.update(product)
      setProduct(product)
  }

  const handelAddToCart = (item) => {
    const { cart } = props
    if(cart.length > 0)
    {
      const objIndex = cart.findIndex((obj => obj.id == item.id));
      if(objIndex == -1){
        props.addToCart({name: item.productName, id: item.id, price: item.price})
      }else{
        swal('Oops', 'This product is already in cart!', 'error')
      }
    }else{
      props.addToCart({name: item.productName, id: item.id, price: item.price})
    }
  }

  return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
        <div className="row">
        {
          product.length > 0 &&
          product.map((val, key)=>{
            return(
              <div key={key} className="col-sm-4">
                <div className="card">
                  {
                    val.image &&
                    <img src={val.image} className="card-img-top"/>
                  }
                  <div className="card-body">
                    <h5 className="card-title">Name: {val.productName}</h5>
                    <p className="card-text">Category: {val.productCategory}</p>
                    <p className="card-text">Price: ${val.price}</p>
                    <StarRatings
                      rating={val.rating}
                      starDimension="25px"
                      starSpacing="10px"
                      changeRating={handelRating}
                      name={val.id}
                    />
                    <p className="text-center"><a href onClick={()=>handelAddToCart(val)} className="btn btn-primary" href="#/">Add to cart</a></p>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
  );
}

const mapStateToProps = state => {
  return { 
    product: state.product,
    cart: state.cart
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      update,
      addToCart
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
