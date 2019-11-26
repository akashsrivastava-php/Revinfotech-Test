import React, { Component } from 'react'
import AddProduct from './containers/AddProduct'
import Cart from './containers/Cart'
import Table from './containers/Table'

const App = () => {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <Cart/>
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <AddProduct />
            </div>
            <div class="clearfix"></div>
            <Table />
          </div>
        </div>
      </div>
    );
}

export default App;
