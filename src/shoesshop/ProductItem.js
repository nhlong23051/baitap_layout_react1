import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { product, showModal,onAdd } = this.props
        return (
            <>
                <div className='col-md-3 pb-5'>
                    <div onClick={() => showModal(product.id)} className="card" style={{ cursor: 'pointer' }}>
                        <div className="card-header">
                            <img src={product.image} alt='' style={{ width: '100%' }} />
                        </div>
                        <div className="card-body">
                            <p>{product.name}</p>
                            <p>{product.price}$</p>
                            <button onClick={()=>onAdd()} className='btn btn-success'> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
