import React, {Component} from 'react';
import ProductService from '../../services/Product/ProductService';

class ProductList extends Component
{
    constructor(props){
        super(props);

        this.productService = new ProductService();

        this.state = {
            products: null
        }
    }

    getProductList = () => {
        if (!this.state.products){
            return(<h1>The store information cannot be reached. Please check your connection.</h1>);
        }
        
        if(this.state.products === []){
            return(<h1>No products available.</h1>);
        }

        return(
            <div>
                {
                    this.state.products.map(product => {
                        return(
                            <div>
                                {product.name}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    componentDidMount(){
        this.setState({
            products: this.productService.getProducts()
        })
    }

    render(){
        return(
            <div>
                {this.getProductList()}
            </div>
        );
    }
}

export default ProductList;

