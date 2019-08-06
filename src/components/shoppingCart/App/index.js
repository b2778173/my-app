import React, { Component } from 'react';
import Filter from './../Filter';
import ProductList from './../productList'

class App extends Component {
    render() {
        return (
            <div>
                <Filter />
                <ProductList/>
            </div>
        )
    }
}
export default App;

