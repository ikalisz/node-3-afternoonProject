import React, {Component} from 'react'
import axios from 'axios'


class EditProduct extends Component {
    constructor() {
        super()
        this.state = {
            newDesc: '',
            product: []
        }
    }

    componentDidMount() {
        console.log(this.props.match)
        axios.get(`/api/products/${this.props.match.params.id}`)
        .then(res => {
            console.log(res.data)
            this.setState({product: res.data})
        })
    }

    handleUpdateProduct = (e) => {
        this.setState({newDesc: e.target.value})
    }

    handleResetState = () => {
        this.setState({newDesc: ''})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.newDesc) {
            let newDesc = this.state.newDesc
            axios.put(`/api/products/${this.props.match.params.id}?desc=${newDesc}`)
            .then(res => {
                window.alert('Changed!')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        let productDisplay = this.state.product.map(val => {
            return (
                <div key={val.product_id}>
                    <h2>{val.name}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder='New product desc' type='text' onChange={(e) => this.handleUpdateProduct(e)} />
                        <button>Submit</button>
                    </form>
                </div>
            )
        })
        return (
            <div>
                {productDisplay}
            </div>
        )
    }
}


export default EditProduct