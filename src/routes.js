import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import NotFound from './Components/NotFound'
import AddProduct from './Components/AddProduct/AddProduct'
import EditProduct from './Components/EditProduct/EditProduct'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/addProduct' component={AddProduct} />
        <Route path='/products/editProduct/:id' component={EditProduct} />
        <Route component={NotFound} />
    </Switch>
)