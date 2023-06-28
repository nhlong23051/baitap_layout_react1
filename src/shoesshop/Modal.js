import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let { productmodal } = this.props
    return (
      <>
        <div className="card mt-3">
          <div className="card-header">
            <p>Adidas Prophere</p>
          </div>
          <div className="card-body">
            <img src={productmodal.image} alt='' style={{ width: '100%' }} />
            <p>
              {productmodal.description}
            </p>
            <p>Quantity: {productmodal.quantity}</p>
            <p>Price: {productmodal.price}$</p>
          </div>
          <div className='cart-footer'>
          </div>
        </div>
      </>
    )
  }
}
