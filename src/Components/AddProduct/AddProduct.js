import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            productDesc: '',
            productPrice: 0,
            productImageLink: ''
        }
    }

    handleResetState = () => {
        this.setState({
            productName: '',
            productDesc: '',
            productPrice: 0,
            productImageLink: '',
        })
    }

    handleUpdateName = (e) => {
        this.setState({productName: e.target.value})
    }

    handleUpdateDesc = (e) => {
        console.log(e.target.value)
        this.setState({productDesc: e.target.value})
    }

    handleUpdatePrice = (e) => {
        console.log(e.target.value)
        this.setState({productPrice: e.target.value})
    }

    handleUpdateImage = (e) => {
        console.log(e.target.value)
        this.setState({productImageLink: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {productName, productDesc, productPrice, productImageLink} = this.state
        if (
            productName &&
            productDesc &&
            productPrice && 
            productImageLink
        ) {
            let newProduct = {
                name: productName,
                desc: productDesc,
                price: productPrice,
                image_url: productImageLink
            }
            axios.post('/api/products', {newProduct} )
            .then(res => {
                window.alert('Submitted!')
                this.handleResetState()
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Add a new product</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Product name" onChange={(e) => this.handleUpdateName(e)} />
                    <input type="text" placeholder="Product description" onChange={(e) => this.handleUpdateDesc(e)} />
                    <input type='number' placeholder="Product price" onChange={(e) => this.handleUpdatePrice(e)} />
                    <input type='text' placeholder='Product image link' onChange={(e) => this.handleUpdateImage(e)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}