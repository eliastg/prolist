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

    componentDidMount(){
        this.setState({ products: this.productService.getProducts() });
    }

    render(){
        if (!Array.isArray(this.state.products)){
            return (<div><h2>Please check your connection.</h2></div>);
        }
        else{
            if(this.state.products === []){
                return (<div><h1>No products available.</h1></div>);
            }
            else {
                return (
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
        }
    }
}

export default ProductList;

