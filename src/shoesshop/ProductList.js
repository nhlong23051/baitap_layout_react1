import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        let { products, showModal, onAdd } = this.props
        let productList = products.map((product) => {
            return <ProductItem product={product} key={product.id} showModal={showModal} onAdd={onAdd} />
        })
        return (
            <>
                {productList}
            </>
        )
    }
}
