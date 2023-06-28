import React, { Component } from 'react'
import ProductList from './ProductList'
import data from './data.json'
import Modal from './Modal'

export default class Index extends Component {
  state = {
    products: data,
    showhome: true,
    showmodal: false,
    productmodal: '',
    quantity: 0
  }

  findIndexProduct = (id) => this.state.products.findIndex(product => product.id === id)

  onAdd = () => {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  showModal = (id) => {
    let { products } = this.state
    let product = {}
    const index = this.findIndexProduct(id)
    if (index !== -1) {
      product = products[index]
    }
    this.setState({
      showmodal: true,
      productmodal: product
    })
  }
  render() {
    let { products, showmodal, productmodal,quantity } = this.state
    return (
      <>
        <h1 className='text-center py-4'>Shop Shoes</h1>
        <div className='row px-4'>
          <div className='col-md-2'>
            <div>
              <div className='text-center'>Modal</div>
              <hr />
            </div>
            {showmodal === false ? '' :
              <Modal
                productmodal={productmodal}
              />}
          </div>
          <div className='col-md-10'>
            <button className='btn btn-secondary'>Cart({quantity})</button>
            <div className='row pt-3'>
              <ProductList
                products={products}
                showModal={this.showModal}
                onAdd={this.onAdd}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}
