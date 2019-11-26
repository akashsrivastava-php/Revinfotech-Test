import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeItem } from '../actions/actionCreator';

const Cart = (props) => {

    const [ cart, setCart ] = useState(props.cart)

    useEffect(() => {
        setCart(props.cart)
    }, [props.cart])

    const handelItemRemove = (id) => {
        const { cart } = props
        const updatedCart = cart.filter((item) => item.id !== id);
        props.removeItem(updatedCart)
        setCart(updatedCart)
    }

    return ( 
        <div className="dropdown float-right">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cart ({cart.length})
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    cart.length > 0 ?
                    cart.map((val, key)=>{
                        return(
                            <span className="dropdown-item">{val.name} ${val.price} <a onClick={()=>handelItemRemove(val.id)} href="#/">Remove</a></span>
                        )
                    }) :
                    <span className="dropdown-item">Cart Empty</span>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { 
      cart: state.cart
   };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        removeItem
      },
      dispatch
    );
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);