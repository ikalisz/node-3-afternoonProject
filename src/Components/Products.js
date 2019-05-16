import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../App.css'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('/api/products')
        .then(res => {
            this.setState({products: res.data})
        })
    }

    handleDelete = (id) => {
        axios.delete(`/api/products/${id}`)
        .then(() => {
            axios.get('/api/products')
            .then(res => {
                this.setState({products: res.data})
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        let displayProducts = this.state.products.map((val,i) => {
            return (
                <div key={i} className="displayDuck">
                    <div>
                        <h3>{val.name}</h3>
                        <button onClick={() => this.handleDelete(val.product_id)}>Delete</button>
                    <Link to={`/products/editProduct/${val.product_id}`}><button>Edit</button></Link>
                    </div>
                    <h3>Price: {val.price}</h3>
                    <img className="duckImage" src={val.image_url} alt={val.description}/>
                </div>
            )
        })
        return (
            <div>
                <h1>Products</h1>
                <Link to ='/products/addProduct'><button>Add Product</button></Link>
                {displayProducts}
            </div>
        )
    }
}

export default Products