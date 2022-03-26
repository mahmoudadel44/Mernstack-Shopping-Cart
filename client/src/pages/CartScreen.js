import { Button } from 'antd';
import React from 'react';
import Cart from '../components/Cart/Cart';

const CartScreen = ({ removeAllProducts,cartItems, removeFromCart }) => {
  return (
    <div className="row mt-3">
      <div className="d-flex justify-content-between mb-2">
        <h5 className="my-3">
          {cartItems.length === 0
            ? "Cart Is Empty"
            : `There is ${cartItems.length} Item In Cart`}
        </h5>
        {cartItems.length > 0 && (
          <Button type="primary" danger="true" onClick={() => removeAllProducts()} className='my-3'>
            Remove All Products
          </Button>
        )}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartScreen;
